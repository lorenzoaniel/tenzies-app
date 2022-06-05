import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    //background: purple; //testing
    height: 20%;
    
    border-top-right-radius: inherit;
    border-top-left-radius: inherit;
    padding-bottom: 0.5rem;

    /* GRID/FLEX */

    display: flex;
    justify-content: center;
    align-items: end;
`;

const H1 = styled.h1`
    font-family: 'Karla';
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    letter-spacing: -0.03em;
    color: #2B283A;
    line-height: 30px;
`;

const Title = (props) => {
    

    return (
        <Div>
            <H1>{props.title}</H1>
        </Div>
    );
}

export default Title;