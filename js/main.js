import "../css/style.css"
import javascriptLogo from '../images/javascript.svg'
import viteLogo from '../images/vite.svg'
import loader from '../images/loading.png'
import { setupCounter } from './counter.js'
import dayjs from 'dayjs'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 >Hello Vite!</h1>
    <div class="card">
    <p id="date"></p>
    <p id="dayspast"></p>
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <img src="${loader}" class="logo vanilla" alt="JavaScript logo" />
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