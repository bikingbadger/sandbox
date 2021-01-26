const app = document.querySelector("#app");
const gameOverImage = document.querySelector(".game-over");
const gameWonImage = document.querySelector(".game-won");
const scoreWins = document.querySelector("#scoreWins");
const winPercentage = document.querySelector("#winPercentage");

let score = { wins: 0, games: 0 };
let doorsOpen = 0;

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
  "sock"
];
let gameOver = false;

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
const shuffle = function(array) {
  console.log(`Shuffling monsters`);
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
  gameOver = false;
  toggleGameSolution(false);
  updateScores();
  return array;
};

/**
 * Build the element for each door for monster to hide behind
 *
 * @param {Number} index
 */
const buildMonster = index => {
  let html = `<div class="monster" id='door${index}'> <button onclick="openDoor(${index});"><img src="door.svg" alt="Open the Door"></button></div>`;
  return html;
};

/**
 * Update the scores of whether you won
 */
const updateScores = () => {
  scoreWins.innerHTML = score.wins;
  winPercentage.innerHTML =
    score.games !== 0 ? Math.round((score.wins / score.games) * 100) : 0;
  winPercentage.innerHTML += "%";
};

/**
 * Show and hide elements based on game state
 *
 * @param {Boolean} win
 */
const toggleGameSolution = win => {
  if (gameOver) {
    score.games++;
    if (win) {
      gameWonImage.classList.remove("hide");
      score.wins++;
    } else {
      gameOverImage.classList.remove("hide");
    }
    updateScores();
  }

  app.style.display = gameOver === false ? "grid" : "none";
};

/**
 * Shuffle the monsters in the pack
 */
const shuffleMonsters = () => {
  // Shuffle the monsters
  shuffle(monsters);
  console.log(monsters);
  doorsOpen = 0;
  gameWonImage.classList.add("hide");
  gameOverImage.classList.add("hide");
  // Build the html for showing the monster tiles
  // Map each monster to build a new div and then concatenate
  // the array into one element to attach to the application tag
  app.innerHTML = monsters
    .map((monster, index) => {
      return buildMonster(index);
    })
    .join("");
};

/**
 * Checks whether you have won the game
 */
const checkMonster = monster => {
  doorsOpen++;
  if (monster === "sock") {
    gameOver = true;
    toggleGameSolution(false);
  } else if (doorsOpen === monsters.length - 1) {
    gameOver = true;
    toggleGameSolution(true);
  }
};

/**
 * Use array index of the door that was opened to check
 * what monster was behind the door
 *
 * @param {Number} doorNum
 */
const openDoor = doorNum => {
  if (!gameOver) {
    // Get the monster behind the door
    const monster = monsters[doorNum];
    // Get the element of the door
    const door = document.querySelector(`#door${doorNum}`);
    door.innerHTML = `<img src="${monster}.svg" alt="${monster}"></img>`;
    //
    checkMonster(monster);
  }
};

shuffleMonsters();
