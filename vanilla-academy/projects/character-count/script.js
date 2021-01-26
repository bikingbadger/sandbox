const characterCount = document.querySelector('#character-count');

window.addEventListener(
  'input',
  event => { 
   event.target.matches('#text') ? characterCount.textContent = event.target.textLength : 0;
  },
  false,
);

characterCount.textContent = document.querySelector('#text').textLength;
