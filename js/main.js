import { elements } from "./elements.js";
import Sounds from "./sounds.js";
import Events from "./events.js";
import Timer from "./timer.js"

let isRunning = false;

// Elements
const {
  minutesDisplay,
  secondsDisplay
} = elements;

// Sounds
const sounds = Sounds();

// Timer
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  sounds,
  isRunning,
});

let minutes = Number.parseInt(minutesDisplay.textContent);

// Events
const events = Events({
sounds,
timer,
isRunning,
});
