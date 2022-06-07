import React from 'react';
import styled from 'styled-components';
import ButtonAnimation from '../Mixins/ButtonAnimation';

const Button = styled.button`
    //background: blue; //testing
    height: 5rem; 
    width: 12rem;
    border-radius: 0.5rem;
    border-style: none;
    background-color: #5035FF;
    box-shadow: 0rem 0.3rem 0.125rem rgba(0, 0, 0, 0.15);

    /* GRID/FLEX */

    grid-area: button;

    /* FONTS */

    font-family: 'Karla';
    font-style: normal;
    font-weight: 700;
    font-size: ${props => props.gameOverState ? "2.5rem" : "2.0rem"};
    color: #FFFFFF;

    /* TRANSITIONS */

    ${ButtonAnimation}
`;

const Roll = (props) => {
    return (
            <Button 
                className={"Roll"} 
                onClick={props.rollDiceClick}
            >
                {
                    props.gameOverState ? "Restart Game" : "Roll" 
                }
            </Button>
    );
}

export default Roll;