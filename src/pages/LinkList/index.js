import { Pagination } from 'antd';
import {
  List,
  Button,
  notification
} from 'antd';
import {
  SortAscendingOutlined,
  SortDescendingOutlined
} from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
  downVoteLink,
  removeLink,
  sortAscByVote,
  sortByDate,
  sortDescByVote,
  upVoteLink
} from '../../redux/links/LinksSlice';
import LinkListItem from '../../components/LinkListItem/LinkListItem';
import { Link } from 'react-router-dom';

export default function LinkList() {

  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const pageSize = 5;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState();


  const links = useSelector(state => state.links.items);
  const dispatch = useDispatch();

  useEffect(() => {
    setMinIndex(0);
    setMaxIndex(pageSize);
  }, [])

  useEffect(() => {
    dispatch(sortByDate());
  }, [dispatch])


  const handleRemoveLink = () => {
    const linkId = selectedLink.id;
    dispatch(removeLink(linkId));
    setIsModalOpen(false);
    setSelectedLink(undefined);
    notification.open({
      message: 'Silme İşlemi',
      description:
        'Bağlantı başarıyla silindi!',
    });
  };

  const handleChangeVote = (link, vote) => {

    const state = vote === 'up';

    if (state) {
      dispatch(upVoteLink(link.id));
    } else {
      dispatch(downVoteLink(link.id))
    }

    dispatch(sortDescByVote())
  }

  const handleChange = (page) => {
    setCurrent(page);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
  };

  const showModal = (link) => {
    setSelectedLink(link);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setSelectedLink(undefined);
    setIsModalOpen(false);
  };


  return (
    <div className='link-list-container'>
      <header>Link List</header>
      <div className='sorter'>
        <Button
          onClick={() => dispatch(sortAscByVote())}
          title='En az oy'>
          <SortAscendingOutlined />
        </Button>
        <Button
          onClick={() => dispatch(sortDescByVote())}
          title='En çok oy'>
          <SortDescendingOutlined />
        </Button>
        <Link to='/add'>
          <Button>Add Link</Button>
        </Link>
      </div>
      <List
        className='list'
        size='small'
        dataSource={links}
        renderItem={(link, index) => (
          index >= minIndex &&
          index < maxIndex &&
          <LinkListItem 
            isModalOpen={isModalOpen} 
            selectedLink={selectedLink}
            link={link}
            onShowModal={() => showModal(link)}
            onHandleRemoveLink={() => handleRemoveLink()}
            onHandleCancel={handleCancel}
            onHandleChangeVote={(status) => handleChangeVote(link, status)}
          />
        )}
      />
      <Pagination
        pageSize={pageSize}
        current={current}
        total={links.length}
        onChange={handleChange}
        style={{ bottom: "0px" }}
      />

    </div>

  )
}
