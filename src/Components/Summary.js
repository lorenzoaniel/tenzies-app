import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    //background: orange; //testing
    height: 10%;
    padding: 0 3rem;
    padding-top: 1rem;

    /* GRID/FLEX */

    display: flex;
    justify-content: center;
    align-items: center;
`;

const P = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    text-align: center;
    color: #4A4E74;
`;


const Summary = (props) => {
   
    return (
        <Div>
            <P>{props.summary}</P>
        </Div>
    );
}

export default Summary;