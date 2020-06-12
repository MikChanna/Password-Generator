// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// DOM Elements
var upperEl = document.querySelector(".upper");
var lowerEl = document.querySelector(".lower");
var numberEl = document.querySelector(".number");
var specialEl = document.querySelector(".special");
var generateEl = document.querySelector("#generate");

// slider function
var slider = document.getElementById("myRange");
var output = document.querySelector("#demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

// password choices
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!@#$%^&*()?></][{}";

// Random Selector Functions

function getRandomLower() {
  return lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
}

function getRandomUpper() {
  return uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
}

function getRandomSpecial() {
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}
function getRandomNum() {
  return [Math.floor(Math.random() * 10)];
}

// console.log(
//   uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]
// );
// console.log(
//   lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]
// );
// console.log(specialChar[Math.floor(Math.random() * specialChar.length)]);

// console.log([Math.floor(Math.random() * 10)]);

var randomFunctions = {
  lower: getRandomLower(),
  upper: getRandomUpper(),
  special: getRandomSpecial(),
  num: getRandomNum(),
};

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
