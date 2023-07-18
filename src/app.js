/* eslint-disable */

let suits = ["♠", "♥", "♦", "♣"];
let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

let generateSuit = () => {
  let randomSuit = Math.floor(Math.random() * suits.length);
  return suits[randomSuit];
};

let generateValue = () => {
  let randomValue = Math.floor(Math.random() * values.length);
  return values[randomValue];
};

var divElem = document.getElementById("playingCard");
var firstH2 = document.createElement("h2");
var cardSuit = document.createTextNode(`${generateSuit()}`);
firstH2.appendChild(cardSuit);
divElem.appendChild(firstH2);
var firstH1 = document.createElement("h1");
var cardValue = document.createTextNode(`${generateValue()}`);
firstH1.appendChild(cardValue);
divElem.appendChild(firstH1);
var secondH2 = document.createElement("h2");
var bottomSuit = document.createTextNode(`${cardSuit}`);
secondH2.appendChild(bottomSuit);
divElem.appendChild(secondH2);

//document.querySelector("#playingCard").innerHTML = `<div>
//<h2>${generateSuit()}</h2>
//<h1>${generateValue()}</h1>
//<h2>${generateSuit()}</h2>
//</div>`;

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console");
};
