import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    //background: red; //testing   
    height: 70%;
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;

    /* GRID/FLEX */

    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas: 
        "dice1 dice2 dice3 dice4 dice5"
        "dice6 dice7 dice8 dice9 dice10"
        ". button button button .";
`;

const Board = (props) => {
    return (
            <Div>{props.children}</Div>
    );
}

export default Board;