const app = document.querySelector("#app");
// The monsters and socks
const monsters = [
  "monster1",
  "monster2",
  "monster3",
  "monster4",
  "monster5",
  "monster6",
  "monster7",
  "monster8",
  "monster9",
  "monster10",
  "monster11",
  "sock",
];

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
const shuffle = function(array) {
  var currentIndex = array.length;
  var temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const buildMonster = monster => {
  let html = '<div class="monster">';
  if (monster === "sock") {
    html += `<a href="javascript:void(0);" onclick="shuffleMonsters();"><img src="${monster}.svg" alt="${monster}"></a>`;
  } else {
    html += `<img src="${monster}.svg" alt="${monster}">`;
  }
  html += "</div>";
  return html;
};

/**
 * Shuffle the monsters in the pack
 */
const shuffleMonsters = () => {
  // Shuffle the monsters
  shuffle(monsters);

  // Build the html for showing the monster tiles
  // Map each monster to build a new div and then concatenate
  // the array into one element to attach to the application tag
  app.innerHTML = monsters
    .map(monster => {
      return buildMonster(monster);
    })
    .join("");
  
};

shuffleMonsters();