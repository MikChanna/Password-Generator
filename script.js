// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

var uppercaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var lowercaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// var lowercaseLetters = uppercaseLetters.toLowerCase();
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];

// check to see if the arrays are recognized

console.log(uppercaseLetters);
console.log(lowercaseLetters);
console.log(specialChar);

// prompts
var passwordLength = prompt(
  "How many characters would you like for your password (8-128)?"
);

var lowerChoice = prompt("Would you like to include lower case letters? (y/n");
var upperChoice = prompt("Would you like to include upper case letters? (y/n)");
var specialChoice = prompt(
  "Would you like to include special characters? (y/n)"
);

var lower = lowerChoice.toLowerCase();
var upper = upperChoice.toLowerCase();
var special = specialChoice.toLowerCase();

// check to see if the answer to the prompts are recognized

console.log(passwordLength + lower + upper + special);
