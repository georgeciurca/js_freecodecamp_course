/*  const myAge = 45;
 const humanDogRatio = 7;
 const myDogAge = myAge * humanDogRatio;
 console.log(myDogAge);

 let bonusPoints = 50;
 bonusPoints = bonusPoints + 50;
 bonusPoints = bonusPoints - 75;
 bonusPoints = bonusPoints + 45;
console.log(bonusPoints);

function countdown (){
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
}
countdown(); 

function log42() {
    console.log(42);
};

log42();

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function sumLaps() {
  let totalTimeLaps = lap1 + lap2 + lap3;
  console.log(totalTimeLaps);
}

sumLaps();

let lapsCompleted = 0;
function incrementByOne () {
    lapsCompleted = lapsCompleted +1;
}
incrementByOne();
incrementByOne();
incrementByOne();
console.log(lapsCompleted);

let clickBtn = document.getElementById("increment-btn");

clickBtn.addEventListener("click", increment());
let newCount = document.getElementById('count-el');

let username = "gogu"; 
let message = "You have three new notifications";
let messageToUser = message + ', ' + username + '!';
console.log(messageToUser);

let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countDash = count + " - ";
  saveEl.textContent += countDash;
  countEl.textContent = 0;
  count = 0;
}


let firstName = 'George';
let lastName = 'Ciurca';
let fullName = firstName + " " + lastName;
console.log(fullName); 

let name = "Linda";
let greeting = "Hi there";
function greetings () {
  console.log (greeting + ", " + name + "!");
}
greetings();

let myPoints = 3;

function add3Points() {
  myPoints += 3;
};
function remove1Point() {
  myPoints -= 1;
};
add3Points();
remove1Point();
add3Points();
remove1Point();
add3Points();
console.log(myPoints);



let purchaseBtn = document.getElementById('purchase-btn'); 
let errorMsg = "Something went wrong, please try again";
let errorParagraph = document.getElementById('error');
function print () {
  errorParagraph.textContent = errorMsg;
}

let num1 = 8;
let num2 = 2;

document.getElementById('num1-el').textContent = num1;
document.getElementById('num2-el').textContent = num2;

function add() {
  let addNum = num1 + num2;
  document.getElementById('sum-el').textContent = addNum;
}
function subtract() {
  let subtractNum = num1 - num2;
  document.getElementById('sum-el').textContent = subtractNum;
}
function divide() {
  let divideNum = num1 / num2;
  document.getElementById('sum-el').textContent = divideNum;
}
function multiply() {
  let multiplyNum = num1 * num2;
  document.getElementById('sum-el').textContent = multiplyNum;
} 

 document.getElementById('num1-el').textContent = num1;
document.getElementById('num2-el').textContent = num2;

let num3 = 0;

function add() {
  let addNum = num3 ++;
  document.getElementById('sum-el').textContent = addNum;
 }
function subtract() {
  let subtractNum = num3 --;
  document.getElementById('sum-el').textContent = subtractNum;
}
function divide() {
  num3 = 0;
  let divideNum = num3;
  document.getElementById('sum-el').textContent = divideNum;
}
 */

/* let firstCard = 10;
let secondCard = 9;

let sum = firstCard + secondCard;

if (sum < 21) {
  console.log('Do you want another card?')
} else if (sum===21) {
  console.log('Blackjack!!')
} else {
  console.log('You are out of the game...')
}

let age = 22;

if (age <= 20) {
  console.log('not ok')
} else {
  console.log ('ok')
}; */

/* let age = 100;

if (age <100 ) {
  console.log('not eligeble')
} else if (age === 100) {
  console.log('Blackjack!!')
} else {
  console.log('You are out of the game...')
} */

/* let sentence = [" a", "b", "c", "d", "e"];
let messageEel = document.getElementById("message-eel");

for (let i = 0; i < sentence.length; i++) {
  messageEel.textContent += sentence[i] + " ";

} */

/* function rollDice () {
  let randomNumber = Math.floor(Math.random()*6) + 1;
  return randomNumber
};
console.log(rollDice()); */

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
   if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
  }


function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  let cards = [firstCard, secondCard];
  let sum = firstCard + secondCard;
  renderGame();
  isAlive = true;

}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want another card?";
    isAlive = true;
  } else if (sum === 21) {
    message = "Blackjack!!";
    hasBlackJack = true;
    isAlive = true;
  } else {
    message = "You are out of the game...!!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  console.log("drawing a new card from the deck");
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
}

for (let i = 0; i < cards.length; i++) {
  console.log(cards[i]);
}
