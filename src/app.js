/* eslint-disable */
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console");
  let suits = ["♠", "♥", "♦", "♣"];
  let values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let generateSuit = () => {
    let randomSuit = Math.floor(Math.random() * suits.length);
    return suits[randomSuit];
  };
  const newSuit = generateSuit();

  let generateValue = () => {
    let randomValue = Math.floor(Math.random() * values.length);
    return values[randomValue];
  };
  const newValue = generateValue();

  let getTopNumber = (document.querySelector(
    "#topNumber"
  ).innerHTML = newValue);
  let getSuitTop = (document.querySelector("#topSuit").innerHTML = newSuit);
  let getcenterNumber = (document.querySelector(
    "#centerNumber"
  ).innerHTML = newValue);
  let getSuitBottom = (document.querySelector(
    "#bottomSuit"
  ).innerHTML = newSuit);
  let getbottomNumber = (document.querySelector(
    "#bottomNumber"
  ).innerHTML = newValue);

  if (newSuit === "♥" || newSuit === "♦") {
    document.getElementById("topSuit").style.color = "red";
    document.getElementById("bottomSuit").style.color = "red";
    document.getElementById("topNumber").style.color = "red";
    document.getElementById("bottomNumber").style.color = "red";
    document.getElementById("centerNumber").style.color = "red";
  } else {
    document.getElementById("topSuit").style.color = "black";
    document.getElementById("bottomSuit").style.color = "black";
    document.getElementById("topNumber").style.color = "black";
    document.getElementById("bottomNumber").style.color = "black";
    document.getElementById("centerNumber").style.color = "black";
  }
};

function drawNewCard() {
  let suits = ["♠", "♥", "♦", "♣"];
  let values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let generateSuit = () => {
    let randomSuit = Math.floor(Math.random() * suits.length);
    return suits[randomSuit];
  };
  const newSuit = generateSuit();

  let generateValue = () => {
    let randomValue = Math.floor(Math.random() * values.length);
    return values[randomValue];
  };
  const newValue = generateValue();

  let getTopNumber = (document.querySelector(
    "#topNumber"
  ).innerHTML = newValue);
  let getSuitTop = (document.querySelector("#topSuit").innerHTML = newSuit);
  let getcenterNumber = (document.querySelector(
    "#centerNumber"
  ).innerHTML = newValue);
  let getSuitBottom = (document.querySelector(
    "#bottomSuit"
  ).innerHTML = newSuit);
  let getbottomNumber = (document.querySelector(
    "#bottomNumber"
  ).innerHTML = newValue);

  if (newSuit === "♥" || newSuit === "♦") {
    document.getElementById("topSuit").style.color = "red";
    document.getElementById("bottomSuit").style.color = "red";
    document.getElementById("topNumber").style.color = "red";
    document.getElementById("bottomNumber").style.color = "red";
    document.getElementById("centerNumber").style.color = "red";
  } else {
    document.getElementById("topSuit").style.color = "black";
    document.getElementById("bottomSuit").style.color = "black";
    document.getElementById("topNumber").style.color = "black";
    document.getElementById("bottomNumber").style.color = "black";
    document.getElementById("centerNumber").style.color = "black";
  }
}

const btn = document.querySelector("#button1");
btn.addEventListener("click", drawNewCard);

setInterval(drawNewCard, 10000);
