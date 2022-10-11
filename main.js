const start = document.getElementById("start-btn");
const nav = document.getElementById("wohoo");
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardEl = document.getElementById("card-el");
const newCard = document.getElementById("new-btn");
const playerEl = document.getElementById("player-el");
let Array = [];
let message = "";
let hasBlackJack = false;
let isAlive = false;
let sum = 0;

let player = {
  name: "Mustafa",
  chips: 145,
};

playerEl.textContent = player.name + " : $" + player.chips;

function getRandomCards() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

start.addEventListener("click", (eo) => {
  isAlive = true;
  let firstCard = getRandomCards();
  let secondCard = getRandomCards();
  Array = [firstCard, secondCard];
  sum = Array[0] + Array[1];
  renderGame();
});

const renderGame = () => {
  cardEl.textContent = "Cards : ";

  for (let i = 0; i < Array.length; i++) {
   cardEl.textContent += Array[i] + " " ;
    
  }

  sumEl.innerText = "sum : " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card ?";
  } else if (sum === 21) {
    message = "Wohoo! you have got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  messageEl.innerText = message;
};

newCard.addEventListener("click", (eo) => {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCards();

    sum += card;

    Array.push(card);

    renderGame();
  }
});
