import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import Display from './../Display';

const testShow ={
    name: "test show",
    summary: "test summary",
    seasons: [
        {
            id: 0,
            name: "season 1 ",
            episodes: [ ]
        },
        {
            id: 1,
            name: "season 2 ",
            episodes: [ ]
        }
    ]

}


test('renders without errors with no props', async () => { 
    render(<Display />);
});

test('renders Show component when the button is clicked ', () => { 

});

test('renders show season options matching your data when the button is clicked', () => { });
