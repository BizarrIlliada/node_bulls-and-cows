'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = [];

  do {
    const excluded = digits.length === 0 ? [0] : digits;

    digits.push(getRandomDigit(excluded));
  } while (digits.length < 4);

  return Number(digits.join(''));
}

function getRandomDigit(excluded = []) {
  let digit;

  do {
    digit = Math.floor(Math.random() * 10);
  } while (excluded.includes(digit));

  return digit;
}

module.exports = {
  generateRandomNumber,
};
