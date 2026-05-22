'use strict';
/* eslint-disable no-console */

const readline = require('node:readline');

const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

function play() {
  const terminal = readline.createInterface(process.stdin, process.stdout);
  const numberToGuess = generateRandomNumber();

  askUser();

  function askUser() {
    terminal.question('Please, enter your guess: ', (userInput) => {
      if (!checkIsValidUserInput(userInput)) {
        console.log('Please, enter a correct value!');
        askUser();

        return;
      }

      const result = getBullsAndCows(Number(userInput), numberToGuess);

      console.log(result);

      if (result.bulls === 4) {
        console.log('Congratulations!!!');
        console.log('The number is ' + numberToGuess);
        terminal.close();

        return;
      }

      askUser();
    });
  }
}

play();
