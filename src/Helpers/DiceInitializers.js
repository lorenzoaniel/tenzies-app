/* 
    This function is called on to initially generate Dice components as an array for 'diceComponentArr'
    { diceId: , diceValue: , diceLockState: , diceComponent:  }
  */
const createDiceObj = (diceQuantity, start, end) => { 
    return new Array(diceQuantity).fill(0).map((ele, index) => {
        const id = index+1;
        const randVal = generateRandomValue(start, end);
        return ({
            diceId: id, 
            diceValue: randVal, 
            diceLockState: false, 
        });
    })
}

const generateRandomValue = (start, end) => {
    return Math.floor(Math.random(start) * end + 1);
}

export {createDiceObj, generateRandomValue} 