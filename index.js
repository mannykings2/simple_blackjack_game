
let age;

if (age < 18)   {
    console.log ("Sorry, You are not old enough to enter");
} else {
    console.log("Welcome!");
}

let cards = [];
let sum = 0;
let hasBlackJack = false; //checks for blackjack cards
let isAlive = false; //checks if game has started (makes sure that cards are generated only when startGame is called)
let isActive = true; //checks if game is active(makes sure that cards are generated only when startGame is first called, i.e you cannot genarate two cards again after the first function call)
let message = "";

let player = {
    name: "Emma",
    amount: 100
}

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ":" + " $" + player.amount;

// Function to start game
function startGame()  {
    let card1 = getRandomCard();
    let card2 = getRandomCard();
    cards = [card1, card2];
    sum = card1 + card2;
    isAlive = true;
    renderGame();
}

// Function to get a card number (called in startGame and newCard functions)
function getRandomCard() {
    let min = 1;
    let max = 13;
    let randomCard = Math.floor(Math.random() * (max - min + 1) + min);
    if (randomCard === 1) {
        return 11;
    /*  } else if (randomCard === 11 || randomCard === 12 || randomCard === 13) {   */
    } else if (randomCard >= 11 && randomCard <= 13) {
        return 10;
    } else {
        return randomCard;
    }
}

// Function for text and card number display after game starts
function renderGame() {
    if (isActive == false) {
        return; 
     }

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
    isActive = false;
}

// Generate new card if sum of first two cards is less than 21
function newCard() {
    if (isAlive == true && hasBlackJack == false && isActive == false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        for (let count = 0; count < cards.length; count++) {
            cardsEl.textContent = "Cards: " + cards[count];
        }
        isActive = true;
        renderGame();
    }
}