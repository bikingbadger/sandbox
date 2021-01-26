"use strict";

const wordCount = document.querySelector("#word-count");
const characterCount = document.querySelector("#character-count");
const text = document.querySelector("#text");
const charPlural = document.querySelector("#charPlural");
const wordPlural = document.querySelector("#wordPlural");
const easterEgg = document.querySelector("#easterEgg");

const getCharacterCount = () => {
  return text.value.length;
};

const getWordCount = () => {
  const numWords = text.value.split(/[\n\r\s]+/g).filter(item => {
    return item != "";
  });
  return numWords.length;
};

const setPlural = () => {
  wordPlural.style.visibility = getWordCount() === 1 ? "hidden" : "visible";
  charPlural.style.visibility =
    getCharacterCount() === 1 ? "hidden" : "visible";
};

const setCounts = () => {
  wordCount.textContent = getWordCount();
  characterCount.textContent = getCharacterCount();
  setPlural();
  // Show easter egg
  console.log(easterEgg);
  easterEgg.style.visibility = text.value == "word up" ? "visible" : "hidden";
  easterEgg.style.height = text.value == "word up" ? "100%" : 0;
};

window.addEventListener(
  "input",
  event => {
    if (event.target.matches("#text")) {
      setCounts();
    }
  },
  false,
);

setCounts();
