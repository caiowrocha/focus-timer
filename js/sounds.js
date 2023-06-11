

/*
 Sounds
*/
export default function() {

  // Custom Sounds
  const bgAudioCafeteria = new Audio("./sounds/Cafeteria.wav");
  const bgAudioRain = new Audio("./sounds/Chuva.wav");
  const bgAudioFire = new Audio("./sounds/Lareira.wav");
  const bgAudioForest = new Audio("./sounds/Floresta.wav");
  // Time-end Sound
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");
  // Audio Loop
  bgAudioCafeteria.loop = true;
  bgAudioRain.loop = true;
  bgAudioFire.loop = true;
  bgAudioForest.loop = true;

  function pressButtonCafeteria() {
    bgAudioCafeteria.play();
    bgAudioRain.pause();
    bgAudioFire.pause();
    bgAudioForest.pause();
  };

  function pressButtonRain() {
    bgAudioRain.play();
    bgAudioCafeteria.pause();
    bgAudioFire.pause();
    bgAudioForest.pause();
  };

  function pressButtonFire() {
    bgAudioFire.play();
    bgAudioRain.pause();
    bgAudioCafeteria.pause();
    bgAudioForest.pause();
  };

  function pressButtonForest() {
    bgAudioForest.play();
    bgAudioRain.pause();
    bgAudioCafeteria.pause();
    bgAudioFire.pause();
  };

  function pauseAll() {
    bgAudioRain.pause();
    bgAudioCafeteria.pause();
    bgAudioFire.pause();
    bgAudioForest.pause();
  }

  function timeEnd() {
    kitchenTimer.play();
    pauseAll();
  };

  return {
    pressButtonCafeteria,
    pressButtonFire,
    pressButtonForest,
    pressButtonRain,
    timeEnd,
    pauseAll,
  };

};