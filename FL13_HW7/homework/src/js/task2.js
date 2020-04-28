let maxNumber = 5;
let prize = 100;
let totalPrize = 0;
let three = 3;
let two = 2;
let numberStep = 5;

function round(){
     for (let i = 0; i < three; i++){
      let currentPrize = prize / Math.pow(two, i);
      let number =
      prompt('Choose a roulette pocket number from 0 to ' + maxNumber +
       '\nAttempts left: ' + (three - i) + '\nTotal prize: ' + totalPrize +
       '$\nPossible prize on current attempt: ' + currentPrize + '$');

    if (+number === Math.floor(Math.random() * (maxNumber + 1))) {
        totalPrize += currentPrize;
        let ifNext = confirm('Congratulation, you won! Your prize is: ' + totalPrize + '$. Do you want to continue?');
        maxNumber += numberStep;
        prize *= two;
        if(ifNext){
         return true;
       } else{
         alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
         return false;
       }
     } else {
      alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
      if (i < two){
        let end = confirm('Do you want to play again?');
        if(!end){
          return false;
        }
      }
    }
  }
}


let cancel = confirm('Do you want to play a game?');
if (!cancel) {
  alert('You did not become a billionaire, but can');
} else {
  for (let result = true; result; ){
    result = round();
  }
}

