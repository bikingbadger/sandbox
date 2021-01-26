const quote = document.querySelector("blockquote");
const button = document.querySelector("button");

// Append Quote
const appendQuote = () => {
  fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response);
      }
    })
    .then(data => {
      quote.innerText = data;
    })
    .catch(err => {
      console.log(`Error occured ${err}`);
    });
};

// Check the click event for a checkbox
const clickChecked = event => {
  if (event.target.matches("button")) {
    appendQuote();
  }
};

// Listen for click
window.addEventListener("click", clickChecked, true);

appendQuote();
