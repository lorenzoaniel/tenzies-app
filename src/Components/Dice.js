import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    //background: green; //testing
    height: 5rem;
    width: 5rem; 
    border-radius: 0.5rem;
    box-shadow: 0rem 0.3rem 0.125rem rgba(0, 0, 0, 0.15);
    background-color: #FFFFFF;

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
`;

const Dice = (props) => {

    const renderDices = () => {

        let dicesArr = new Array(props.diceQuantity).fill(0).map((ele, index) => {
            const diceNumber = index+1;
            return <Div className={`dice${diceNumber}`} key={`dice${diceNumber}`} >{`${diceNumber}`}</Div>
        });

        return dicesArr; 
    }

    return (
        renderDices()
    )
}

export default Dice;