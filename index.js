let age;

if (age < 21)   {
    console.log ("Sorry, You are not old enough to enter");
}   else {
    console.log("Welcome!");
}

let card1;
let card2;
let sum = card1 + card2;
let hasBlackJack = false;
let isAlive = true;
let message = "";

if (sum < 21) {
    console.log("Would you like to draw another card?");
} else if (sum === 21) {
    console.log("Congrats! You've got Blackjack!");
    hasBlackJack = true;
} else {
    console.log("You Lose!");
    isAlive = false;
}