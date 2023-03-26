import { render, screen, fireEvent } from '@testing-library/react';
import LinkListItem from './LinkListItem';

describe('Link List Item', () => { 
    

    test('renders Link List Item', () => {
        const showModal = jest.fn();
        const handleRemoveLink = jest.fn();
        const handleCancel = jest.fn();
        const handleChangeVote = jest.fn();
        const exampleLink = { id: 'sdh23fefh', title: 'Link 1', date: new Date().getTime() };
        const isModalOpen = true;
        render(<LinkListItem
            isModalOpen={isModalOpen}
            selectedLink={exampleLink}
            link={exampleLink}
            onShowModal={showModal}
            onHandleRemoveLink={handleRemoveLink}
            onHandleCancel={handleCancel}
            onHandleChangeVote={handleChangeVote}
        />);
    
        const removeButtonElm = screen.getByTitle('Sil');
        expect(removeButtonElm).toBeInTheDocument();
    
        fireEvent.click(removeButtonElm);
    
        expect(showModal).toBeCalledTimes(1);
    
        const modalElm = screen.getByText('Silme İşlemi');
        expect(modalElm).toBeInTheDocument();
    
    })
    
    test('up/down vote buttons renders', () => {
        const showModal = jest.fn();
        const handleRemoveLink = jest.fn();
        const handleCancel = jest.fn();
        const handleChangeVote = jest.fn();
        const exampleLink = { id: 'sdh23fefh', title: 'Link 1', date: new Date().getTime(), vote: 0 };
        const isModalOpen = true;
        render(<LinkListItem
            isModalOpen={isModalOpen}
            selectedLink={exampleLink}
            link={exampleLink}
            onShowModal={showModal}
            onHandleRemoveLink={handleRemoveLink}
            onHandleCancel={handleCancel}
            onHandleChangeVote={handleChangeVote}
        />);
    
        const upVoteButtonElm = screen.getByTitle('+1');
        expect(upVoteButtonElm).toBeInTheDocument();
    
        fireEvent.click(upVoteButtonElm);
        expect(handleChangeVote).toHaveBeenCalledTimes(1);

        const voteText = screen.getByText(/oy/i);
        expect(voteText).toBeInTheDocument();
        
    
        const downVoteButtonElm = screen.getByTitle('-1');
        expect(downVoteButtonElm).toBeInTheDocument();
    
        fireEvent.click(downVoteButtonElm);
        expect(handleChangeVote).toHaveBeenCalledTimes(2);
    })
 })
