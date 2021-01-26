'use strict';

(d => {
  // Data object
  const defaultDuration = 90;
  const data = { timer: defaultDuration };

  // Template
  const template = () => {
    // check if time is up and return message
    if (data.timer === 0) {
      return '⏰ <p><button data-restart-timer>Restart Timer</button></p>';
    }

    // extract the minutes from the timer, convert to string and pad with zero's
    const minutes = parseInt(data.timer / 60, 10)
      .toString()
      .padStart(2, '0');
    // extract the seconds from the timer, convert to string and pad with zero's
    const seconds = parseInt(data.timer % 60, 10)
      .toString()
      .padStart(2, '0');
    // console.log(`${minutes}:${seconds}`);
    return `<h1>${minutes}:${seconds}</h1>`;
  };

  // Render
  const render = () => {
    const app = d.querySelector('#timer');
    if (!app) return;

    // retrieve the output for the current state of timer
    const output = template();

    // check for changes, if there are none no reason to update the document
    if (app.innerHTML === output) return;

    // update changes to the document
    app.innerHTML = template();
  };

  const startTimer = () => {
    data.timer = defaultDuration;
    const countDown = window.setInterval(() => {
      data.timer === 0 ? window.clearInterval(countDown) : data.timer--;
      render();
    }, 1000);
  };

  startTimer();

  // When the restart button is clicked, restart the timer
  d.addEventListener(
    'click',
    event => {
      if (event.target.hasAttribute('data-restart-timer')) {
        startTimer();
      }
    },
    false
  );
})(document);
