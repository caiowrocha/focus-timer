export default function ({
minutesDisplay,
secondsDisplay,
sounds,
}) {

  let timerTimeOut;

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
  };

  function countDown() {
    timerTimeOut = setTimeout(function () {


      let minutes = Number.parseInt(minutesDisplay.textContent);
      let seconds = Number.parseInt(secondsDisplay.textContent);

      let isFinished = minutes <= 0 && seconds === 0;

      if(isFinished) {
        sounds.timeEnd();
        updateDisplay(25, 0);
        return;
      }

      if(seconds <= 0) {
        seconds = 60;
        minutes -= 1;
      }

      updateDisplay(minutes, String(seconds-1));

      countDown();

    }, 1000)
  };

  function hold() {
    clearTimeout(timerTimeOut);
  }

  return {
      updateDisplay,
      countDown,
      hold,
  }
}

