const MAX_VALUE = 100;

function generateRandomNumber() {
  let randomInt = Math.floor(Math.random() * MAX_VALUE);
  return randomInt;
}

function getPlayerGuess() {
  let userGuess;
  let number;

  while (true) {
    userGuess = prompt(`Enter a number between 0 and ${MAX_VALUE}:`);

    if (userGuess === null) {
      return null;
    }

    number = Number(userGuess);

    if (!isNaN(number) && number >= 0 && number <= MAX_VALUE) {
      return number;
    } else {
      alert(`Invalid input. Please enter a number between 0 and ${MAX_VALUE}.`);
    }
  }
}

function checkGuess(playersGuess, correctAnsware) {
  let result = 0;

  if (playersGuess == correctAnsware) {
    console.log('Correct');
    result = 1;
  } else if (playersGuess > correctAnsware) {
    console.log('Too high');
    result = 2;
  } else if (playersGuess < correctAnsware) {
    console.log('Too low');
    result = 3;
  }
  return result;
}

function game() {
  let randomNumber = generateRandomNumber();
  let playersAttempts = 0;
  let maxAttempts = 10;

  alert(
    'Please open your browser console to see the game output. You can do this by pressing F12'
  );
  console.log(
    'Welcome to the Guessing Game! You have 10 attempts to guess the number between 0 and 100.'
  );

  for (let i = 0; i < maxAttempts; i++) {
    playersAttempts++;

    const playerGuess = getPlayerGuess();
    if (playerGuess == null) {
      alert('Game canceled by the user.');
      return;
    }
    console.log(`${playersAttempts}. attempt.`);
    console.log(`Players guess: ${playerGuess}`);

    const result = checkGuess(playerGuess, randomNumber);

    if (i >= 9) {
      alert(
        `You lose! Sorry, you've used all your attempts. The correct number was ${randomNumber}.`
      );
    }

    if (result == 1) {
      console.log(`You win in only ${playersAttempts} attempts!`);
      break;
    }
  }
}

game();
