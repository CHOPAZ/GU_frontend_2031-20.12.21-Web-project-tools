import { printError, printResult } from './printResult.js';
import getDateDiff from './getDateDiff.js';
import { sound } from './soundEnd.js';



const formDate = document.getElementById("datecalc");
const formTimer = document.getElementById("timer");
const timerContainer = document.getElementById("timer__result");
const stop = document.getElementById("stop");

formDate.onsubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const firstDate = formData.get('firstDate');
  const secondDate = formData.get('secondDate');

  if (!firstDate || !secondDate) {
    printError('Oooppppss -> put date')
  } else {
    const dateDiff = getDateDiff(firstDate, secondDate)

    printResult(dateDiff)
  }
};
 
let timer1;
formTimer.onsubmit = (event) => {
  event.preventDefault();
  const formTimer = new FormData(event.target);
  let timeMinut = formTimer.get('time'); 
  timeMinut = parseInt(timeMinut, 10) * 60;
  
  timer1 = setInterval(function() {
    const seconds = timeMinut%60; 
    const minuts = timeMinut/60%60;
    const hours = timeMinut/60/60%60;
    

    if(timeMinut <= 0) {
      clearInterval(timer1);
      sound.play();
      timerContainer.innerHTML = "Timeout";
    } else {
      let strTimer = `${Math.trunc(hours)}:${Math.trunc(minuts)}:${Math.trunc(seconds)}`;
      timerContainer.innerHTML = strTimer;
    }
    --timeMinut;
  },1000)

}

stop.addEventListener('click', () => {
  clearInterval(timer1);
})


// создать фунцкцию handlTimer, в нее впихнуть