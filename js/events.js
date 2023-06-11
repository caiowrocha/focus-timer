import { elements } from "./elements.js";

// Elements
const {
  buttonPlay,
  buttonStop,
  btnIncreaseTimer,
  btnDecreaseTimer,
  btnRainSound,
  btnFireSound,
  btnForestSound,
  btnCafeteriaSound,
  minutesDisplay,
  secondsDisplay,
} = elements;

export default function ({ sounds, timer, isRunning }) {

  let minutes = minutesDisplay.textContent;

  /* Controls */
  buttonPlay.addEventListener("click", () => {

      let fire = btnFireSound.classList.contains('playing')
      , forest = btnForestSound.classList.contains("playing")
      , coffee = btnCafeteriaSound.classList.contains("playing")
      , rain = btnRainSound.classList.contains("playing");

      if(!isRunning) {
        if(fire === true) sounds.pressButtonFire();
        else if(forest === true) sounds.pressButtonForest();
        else if(coffee === true) sounds.pressButtonCafeteria();
        else sounds.pressButtonRain();
        isRunning = true;
        timer.countDown();
      } else {
        timer.hold();
        sounds.pauseAll();
        isRunning = false;
      }
    }
  )

  buttonStop.addEventListener("click", () => {
    isRunning = false;
    timer.updateDisplay(minutes, 0);
    timer.hold();
    sounds.pauseAll();
  });

  btnIncreaseTimer.addEventListener("click", () => {
    let newMinutes = Number(minutesDisplay.textContent),
      seconds = Number.parseInt(secondsDisplay.textContent);
    if (newMinutes < 85) {
      timer.updateDisplay(String(newMinutes + 5), seconds);
    } else {
      timer.updateDisplay(String(90), String(0));
    }
  });

  btnDecreaseTimer.addEventListener("click", () => {
    let currentMinutes = Number.parseInt(minutesDisplay.textContent),
      seconds = Number.parseInt(secondsDisplay.textContent);

    if (currentMinutes > 5) {
      timer.updateDisplay(String(currentMinutes - 5), seconds);
    } else {
      timer.updateDisplay(String(5), String(0));
    }
  });

  btnFireSound.addEventListener("click", () => {
    btnFireSound.classList.toggle("playing");
    btnForestSound.classList.remove("playing");
    btnCafeteriaSound.classList.remove("playing");
    btnRainSound.classList.remove("playing");
    if(!isRunning) {
      return;
    };
    sounds.pressButtonFire();
  });

  btnRainSound.addEventListener("click", () => {
    btnRainSound.classList.toggle("playing");
    btnFireSound.classList.remove("playing");
    btnForestSound.classList.remove("playing");
    btnCafeteriaSound.classList.remove("playing");
    if(!isRunning) {
      return;
    };
    sounds.pressButtonRain();
  });

  btnForestSound.addEventListener("click", () => {
    btnForestSound.classList.toggle("playing");
    btnFireSound.classList.remove("playing");
    btnCafeteriaSound.classList.remove("playing");
    btnRainSound.classList.remove("playing");
    if(!isRunning) {
      return;
    };
    sounds.pressButtonForest();
  });

  btnCafeteriaSound.addEventListener("click", () => {
    btnCafeteriaSound.classList.toggle("playing");
    btnFireSound.classList.remove("playing");
    btnForestSound.classList.remove("playing");
    btnRainSound.classList.remove("playing");
    if(!isRunning) {
      return;
    };
    sounds.pressButtonCafeteria();
  });
};


