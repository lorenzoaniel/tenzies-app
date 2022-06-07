
import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './globalStyles';
import Title from './Components/Title'
import Summary from './Components/Summary';
import Board from './Components/Board';
import Roll from './Components/Roll';
import Dice from './Components/Dice';
import {createDiceObj, generateRandomValue} from './Helpers/DiceInitializers';

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
    appSummary: "Roll until all dice are the same. Click each die to freeze it at its current value between rolls.",
    diceFaces: {start: 1, end: 6}
  }

  const [diceObjArr, setDiceObjArr] = React.useState(createDiceObj(AppBase.numberOfDice, AppBase.diceFaces.start, AppBase.diceFaces.end));
  const [gameOver, setGameOver] = React.useState(false);
  
  const checkTenzies = () => {
    let temp = false;
    for(let dice of diceObjArr){
      if(dice.diceValue !== diceObjArr[0].diceValue){
        temp = false;
        break;
      }
      temp = true;
    }
    setGameOver(temp);
  }

  React.useEffect(checkTenzies, [diceObjArr])

  const resetGame = () => {
    setDiceObjArr(createDiceObj(AppBase.numberOfDice, AppBase.diceFaces.start, AppBase.diceFaces.end));
    setGameOver(false);
  }

  const rollDices = () => {
    if(gameOver){
      resetGame();
    }
    setDiceObjArr((prevDiceArr) => prevDiceArr.map((prevDice) => {
      const newRandVal = generateRandomValue(AppBase.diceFaces.start, AppBase.diceFaces.end);

      return (prevDice.diceLockState) ? 
        prevDice :
        {...prevDice, diceValue: newRandVal}
    }))
  }

  const changeLockState = (id) => {
    setDiceObjArr((prevDiceArr) => prevDiceArr.map(dice => {
      return dice.diceId === id ?
        {...dice, diceLockState: !dice.diceLockState} :
        dice
    }))
  }

  const renderDices = diceObjArr.map(prevDice => 
    <Dice 
      handleClick={() => changeLockState(prevDice.diceId)} 
      diceLockState={prevDice.diceLockState} 
      diceValue={prevDice.diceValue} 
      key={prevDice.diceId} className={`dice${prevDice.diceId}`}
    />
  )

  return (
    <>
      <GlobalStyle />
      <Main>
      <Title title={AppBase.appTitle} />
      <Summary summary={AppBase.appSummary} />
      <Board>
          {
            renderDices
          }
            <Roll rollDiceClick={rollDices} gameOverState={gameOver} />
      </Board>
      </Main>
    </>
  );
}

export default App;
