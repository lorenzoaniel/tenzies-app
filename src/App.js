
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
  
  const [rollState, setRollState] = React.useState(true);

  const calculateTenzie = (state) => {
    console.log("check dice and return true or false");
    return state ? false : true;
  }
  
  const changeRollState = () => {
    setRollState((prevState) => calculateTenzie(prevState));
    console.log("run change roll state");
  }

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
            <Roll rollDiceClick={changeRollState} rollState={rollState}/>
          </>
        }
      </Board>
      </Main>
    </>
  );
}

export default App;
