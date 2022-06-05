import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    //background: blue; //testing
    height: 5rem; 
    width: 12rem;
    border-radius: 0.5rem;
    border-style: none;
    background-color: #5035FF;
    box-shadow: 0rem 0.3rem 0.125rem rgba(0, 0, 0, 0.18);

    /* GRID/FLEX */

    grid-area: button;

    /* FONTS */

    font-family: 'Karla';
    font-style: normal;
    font-weight: 700;
    font-size: 2.5rem;
    color: #FFFFFF;
`;

const Roll = (props) => {
    return (
            <Button className={"Roll"}>{props.buttonLabel}</Button>
    );
}

export default Roll;