
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
  
  const AppBase = {
    numberOfDice: 10,
    appTitle: "Tenzies",
    appSummary: "Roll until all dice are the same. Click each die to freeze it at its current value between rolls."
  }

  const [rollState, setRollState] = React.useState(true);
  const [diceComponentArr, setDiceComponentArr] = React.useState(
    new Array(AppBase.numberOfDice).fill(0).map((ele, index) => {
      return <Dice key={index+1} className={`dice${index+1}`}/>
    })
  );

  const calculateTenzie = (state) => {
    setDiceComponentArr((prevArr) => prevArr)
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
      <Title title={AppBase.appTitle} />
      <Summary summary={AppBase.appSummary} />
      <Board>
          {
            diceComponentArr
          }
            <Roll rollDiceClick={changeRollState} rollState={rollState} />
      </Board>
      </Main>
    </>
  );
}

export default App;
