const quote = document.querySelector("blockquote");
const button = document.querySelector("button");

let quotes = [];

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
      const newQuote = data[0];
      if (quotes.includes(newQuote)) {
        console.log("Already exists fetch a new quote");
        appendQuote();
      } else {
        if (quotes.length === 50) {
          quotes.shift();
        }
        quotes.push(newQuote);
        quote.innerText = newQuote;
      }
    })
    .catch(err => {
      console.log(`Error occurred ${err}`);
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
