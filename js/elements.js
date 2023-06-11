/*
Elementos
*/
const buttonPlay = document.querySelector('.play');
const buttonStop = document.querySelector('.stop');
const btnIncreaseTimer = document.querySelector('.increase-timer');
const btnDecreaseTimer = document.querySelector('.decrease-timer');
const btnForestSound = document.querySelector('#sounds .forest');
const btnCafeteriaSound = document.querySelector('#sounds .home');
const btnRainSound = document.querySelector('#sounds .rain');
const btnFireSound = document.querySelector('#sounds .fire');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

export const elements = {
  buttonPlay,
  buttonStop,
  btnDecreaseTimer,
  btnForestSound,
  btnCafeteriaSound,
  btnRainSound,
  btnFireSound,
  minutesDisplay,
  secondsDisplay,
  btnIncreaseTimer
};