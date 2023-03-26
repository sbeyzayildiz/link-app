
import { Modal, List, Button, } from 'antd';
import {
    CaretDownOutlined,
    CaretUpOutlined,
    CloseCircleOutlined,
} from '@ant-design/icons';


export default function LinkListItem({
    isModalOpen,
    selectedLink,
    link,
    onShowModal,
    onHandleRemoveLink,
    onHandleCancel,
    onHandleChangeVote,
}) {
    return (
        <>
            <List.Item>
                <div className='list-item-left'>
                    <div className='list-item-title'>{link.title}</div>
                    <Button
                        className='delete-button'
                        type='link'
                        title='Sil'
                        onClick={onShowModal}>
                        <CloseCircleOutlined />
                    </Button>
                    <Modal
                        title="Silme İşlemi"
                        open={isModalOpen}
                        onOk={onHandleRemoveLink}
                        onCancel={onHandleCancel}
                    >
                        <p>"{selectedLink?.title || ''}" silmek istediğine emin misin?</p>
                    </Modal>
                </div>

                <div className='list-item-right'>
                    <Button
                        className='vote-up-Button'
                        onClick={() => onHandleChangeVote('up')}
                        title='+1'>
                        <CaretUpOutlined />
                    </Button>
                    <div className='vote-title'> {link.vote} Oy </div>
                    <Button
                        className='vote-down-Button'
                        onClick={() => onHandleChangeVote('down')}
                        title='-1'>
                        <CaretDownOutlined />
                    </Button>
                </div>

            </List.Item>
        </>
    )
}
