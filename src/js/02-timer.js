import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputEl = document.querySelector('#datetime-picker');
const btnEl = document.querySelector('button[data-start]');

const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

btnEl.addEventListener('click', onStartClick);
btnEl.disabled = true;

let selectedDate;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
flatpickr(inputEl, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    const deltaDate = selectedDate - Date.now();

    if (deltaDate > 0) {
      btnEl.disabled = false;
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
      btnEl.disabled = true;
    }
  },
});

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function onStartClick(evt) {
  const intervalId = setInterval(() => {
    const deltaDate = selectedDate - Date.now();

    if (deltaDate >= 0) {
      const { days, hours, minutes, seconds } = convertMs(deltaDate);

      daysEl.textContent = addLeadingZero(days);
      hoursEl.textContent = addLeadingZero(hours);
      minutesEl.textContent = addLeadingZero(minutes);
      secondsEl.textContent = addLeadingZero(seconds);
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
}
