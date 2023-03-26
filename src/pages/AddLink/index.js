import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addLink } from '../../redux/links/LinksSlice';
import { notification } from 'antd';
import AddForm from '../../components/Form/AddForm';
import { useRef } from 'react';

export default function AddList() {

  const addFormRef = useRef();
  const dispatch = useDispatch();


  const handleSubmit = (values) => {

    const newLink = {
      id: nanoid(),
      date: new Date().getTime(),
      title: values.link,
      vote: 0,
    }

    dispatch(addLink(newLink));
    notification.open({
      message: 'Ekleme İşlemi',
      description:
        'Bağlantı başarıyla eklendi!',
    });

    console.log('addFormRef.current', addFormRef.current)
    addFormRef.current.resetForm();

  }

  return (
    <div className='link-add-container'>
      <header>Add Link</header>
      <AddForm ref={addFormRef} onHandleSubmit={handleSubmit} />
    </div>
  )
}
