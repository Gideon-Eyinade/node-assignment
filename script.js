function guessNumber(){

  const username = prompt("What is your username?")

  let guessRange = 2;
  let playerPoint = 0;
  let stage = 1;

  do{
    let random = Math.floor(Math.random() * guessRange) + 1;
    let guess = parseInt(prompt(`Guess a number from 1 to ${guessRange}:`));

    guessRange += 1;
    playerpoint += 1;
    stage += 1;
  }
    while (guess == random) 

  
}


guessNumber();

