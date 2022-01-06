 const myAge = 45;
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