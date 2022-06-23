import React from 'react';
import { render, fireEvent, screen, userEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Show from './../Show';

// * [ ] Build an example data structure that contains the show data in the correct format. 
// A show should contain a name, a summary and an array of seasons, 
// each with a id, name and an (empty) list of episodes within them. 
// Use console.logs within the client code if you need to to verify the structure of show data.

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


// * [ ] Test that the Show component renders when your test data is passed in 
// through show prop and "none" is passed in through selectedSeason prop.

test('renders without errors', () => { 
    render(<Show show={testShow} selectedSeason={'none'} />)
});

// * [ ] Test that the Loading component displays when null is passed into 
// the show prop (look at the Loading component to see how to test for it's existence)

test('renders Loading component when prop show is null', () => {
    render(< Show show={null}/>);

    const loadingComponent = screen.queryByTestId('loading-container');

    expect(loadingComponent).toBeInTheDocument();    
 });

// * [ ] Test that when your test data is passed through the show prop, 
// the same number of season select options appear as there are seasons within your test data.

test('renders same number of options seasons are passed in', () => { 
    render(< Show show={testShow} selectedSeason={'none'} />);

    const seasonOptions = screen.queryAllByTestId('season-option');

    expect(seasonOptions).toHaveLength(2);
});

// * [ ] Test that when an item is selected, the handleSelect function is called. 
// Look at your code to see how to get access to the select DOM element and 
// [userEvent reference materials](https://testing-library.com/docs/ecosystem-user-event/)
//  to see how to trigger a selection.
test('handleSelect is called when an season is selected', () => {
    const handleSelect = jest.fn();
    render(< Show show={testShow} selectedSeason={"none"} handleSelect ={handleSelect}/>);
    const select = screen.getByLabelText(/select a season /i);
    userEvent.selectOptions(select, ['1']);

    expect(handleSelect).toBeCalled();
 });

 // * [ ] Test that the episode component DOES NOT render when the selectedSeason props is "none" 
// and DOES render the episode component when the selectedSeason prop has a valid season index.
test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
   
    const {rerender} = render (<Show show={testShow} selectedSeason={"none"} />);
    let episodes = screen.queryByTestId('episodes-container');
    expect(episodes).not.toBeInTheDocument();


    rerender(<Show show={testShow} selectedSeason={1}/>);
    episodes = screen.queryByTestId('episodes-container');
    expect(episodes).toBeInTheDocument();
});



// // ### The Show Component
// // > *This component holds all general information on our featured show.
//  Here we will once again work with data props, 
//  mock a function for testing and rerender our component for a change in data.*
