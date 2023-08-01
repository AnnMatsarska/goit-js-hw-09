const startBtn = document.querySelector('button[data-start]');
const stoptBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', onStartClick);
stoptBtn.addEventListener('click', onStopClick);

let timerId;

stoptBtn.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onStartClick() {
  timerId = setInterval(() => {
    randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
  }, 1000);
  startBtn.disabled = true;
  stoptBtn.disabled = false;
}

function onStopClick() {
  clearInterval(timerId);
  stoptBtn.disabled = true;
  startBtn.disabled = false;
}
