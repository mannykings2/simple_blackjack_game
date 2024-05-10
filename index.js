let age;

if (age < 21)   {
    console.log ("Sorry, You are not old enough to enter");
}   else {
    console.log("Welcome!");
}

let card1 = getRandomCard();
let card2 = getRandomCard();
let cards = [card1, card2];
let sum = card1 + card2;
let hasBlackJack = false;
let isAlive = true
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame()  {
    renderGame();
}

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 12);
    return randomCard;
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let count = 0; count < cards.length; count++) {
        cardsEl.textContent += cards[count] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum < 21) {
        message = "Would you like to draw another card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You Lose!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    for (let count = 0; count < cards.length; count++) {
        cardsEl.textContent = "Cards: " + cards[count];
    }
    renderGame();
}