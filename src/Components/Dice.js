import React from 'react';
import styled from 'styled-components';
import ButtonAnimation from '../Mixins/ButtonAnimation';

const Div = styled.div`
    //background: green; //testing

    /* GENERAL */

    height: 5rem;
    width: 5rem; 
    border-radius: 0.5rem;
    box-shadow: 0rem 0.3rem 0.125rem rgba(0, 0, 0, 0.15);
    background-color: ${props =>  props.diceLockState ?  "#59E391" : "#FFFFFF"};

    /* GRID/FLEX */

    grid-area: ${props => props.className};
    display: flex;
    justify-content: center;
    align-items: center;

    /* FONTS */

    font-family: 'Karla';
    font-style: normal;
    font-weight: 700;
    font-size: 2.5rem;  

    /* TRANSITIONS */

    ${ButtonAnimation}

`;

const Dice = (props) => {
    return (
        <Div 
            className={props.className}
            onClick={props.handleClick}
            {...props}
        >
            {
                props.diceValue
            }
        </Div>
    );
}

export default Dice;