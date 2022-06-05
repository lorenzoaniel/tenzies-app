
import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './globalStyles';
import Title from './Components/Title'
import Summary from './Components/Summary';
import Board from './Components/Board';
import Dice from './Components/Dice';
import Roll from './Components/Roll';

const Main = styled.div`
  background-color: #F5F5F5;
  width: 43.75rem;
  height: 43.75rem;
  border-radius: 0.625rem;
  padding: 0 2.5rem;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Main>
      <Title title={"Tenzies"} />
      <Summary summary={"Roll until all dice are the same. Click each die to freeze it at its current value between rolls."} />
      <Board>
        {
          <>
            <Dice diceQuantity={10}/>
            <Roll buttonLabel={"Roll"}/>
          </>
        }
      </Board>
      </Main>
    </>
  );
}

export default App;
