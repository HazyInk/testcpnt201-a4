import "../css/style.css"
import javascriptLogo from '../images/javascript.svg'
import viteLogo from '../images/vite.svg'
import loader from '../images/loading.png'
import { setupCounter } from './counter.js'
import dayjs from 'dayjs'
import anime from 'animejs'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="animated-head">Hello Vite!</h1>
    <div class="card">
    <p id="date"></p>
    <p id="dayspast"></p>
      <button id="counter" type="button"></button>
    </div>
    <p id="pulsing-js" class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <img id="animated-image" src="${loader}" class="logo vanilla" alt="JavaScript logo" />
  </div>
`

setupCounter(document.querySelector('#counter'))

let currentDate = dayjs().format('MMMM D, YYYY');
document.addEventListener('DOMContentLoaded', () => {
  const currentDateElement = document.querySelector('#date');
  if (currentDateElement) {
    currentDateElement.textContent = currentDate;
  }
});

 let startDate = dayjs('2023-09-05');
  let endDate = dayjs('2023-11-11');
  let daysPassed = endDate.diff(startDate, 'day');

  document.addEventListener('DOMContentLoaded', () => {
    const daysPassedElement = document.querySelector('#dayspast');
    if (daysPassedElement) {
      daysPassedElement.textContent = `${daysPassed} days passed since the start of the program`;
    }
  });

  // npm package of choice "animejs"

  const animatedImage = document.getElementById('animated-image');

  anime({
    targets: animatedImage,
    rotate: '1turn',
    easing: 'easeInOutQuad',
    duration: 5000,
    loop: true,
  });

const animatedJs = document.getElementById('pulsing-js');

anime({
  targets: animatedJs,
  scale: [
    { value: 2, duration: 1000, easing: 'easeInOutQuad' },
    { value: 1, duration: 1000, easing: 'easeInOutQuad' },
  ],
  loop: true,
});

const animatedHeader = document.getElementById('animated-head');

anime({
  targets: animatedHeader,
  scale: [
    { value: 1.2, duration: 1000, easing: 'easeInOutQuad' },
    { value: 0.8, duration: 1000, easing: 'easeInOutQuad' },
    { value: 1.1, duration: 1000, easing: 'easeInOutQuad' },
    { value: 0.9, duration: 1000, easing: 'easeInOutQuad' },
    { value: 1, duration: 1000, easing: 'easeInOutQuad' },
  ],
  rotate: [
    { value: '-5deg', duration: 1000, easing: 'easeInOutQuad' },
    { value: '5deg', duration: 1000, easing: 'easeInOutQuad' },
    { value: '-3deg', duration: 1000, easing: 'easeInOutQuad' },
    { value: '3deg', duration: 1000, easing: 'easeInOutQuad' },
    { value: '0deg', duration: 1000, easing: 'easeInOutQuad' },
  ],
  loop: true,
});