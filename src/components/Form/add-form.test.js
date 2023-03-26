import 'matchmedia-polyfill';
import 'matchmedia-polyfill/matchMedia.addListener';
import '@testing-library/jest-dom';

import { screen, render, fireEvent } from '@testing-library/react';
import AddForm from './AddForm';

describe('Add Link', () => {

    test('renders Add Link', () => {
        const handleSubmit = jest.fn();
        render(<AddForm
            onHandleSubmit={handleSubmit}
        />)


        const formInputElm = screen.getByPlaceholderText('Bağlantı giriniz...');
        expect(formInputElm).toBeInTheDocument();

        fireEvent.change(formInputElm, {
            target: {
                value: 'Link 1'
            }
        });

    })

    test('render submit button', () => {
        const handleSubmit = jest.fn();
        render(<AddForm
            onHandleSubmit={handleSubmit}
        />)

        const formSubmitButtonElm = screen.getByText('Add');
        expect(formSubmitButtonElm).toBeInTheDocument();

        fireEvent.click(formSubmitButtonElm);
    })

})