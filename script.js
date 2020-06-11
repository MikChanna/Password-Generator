// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// slider function
var slider = document.getElementById("myRange");
var output = document.querySelector("#demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";

// var lowercaseLetters = uppercaseLetters.toLowerCase();
var specialChar = "!@#$%^&*()?></][{}";

// check to see if the arrays are recognized

console.log(uppercaseLetters);
console.log(lowercaseLetters);
console.log(specialChar);

// prompts
// var passwordLength = prompt(
//   "How many characters would you like for your password (8-128)?"
// );

// var lowerChoice = prompt("Would you like to include lower case letters? (y/n");
// var upperChoice = prompt("Would you like to include upper case letters? (y/n)");
// var numChoice = prompt("Would you like to include numbers? (y/n)");
// var specialChoice = prompt(
//   "Would you like to include special characters? (y/n)"
// );

var lower = lowerChoice.toLowerCase();
var upper = upperChoice.toLowerCase();
var num = numChoice.toLowerCase();
var special = specialChoice.toLowerCase();

// check to see if the answer to the prompts are recognized

console.log(passwordLength + lower + upper + num + special);

// random selection

for (var i = 0; i < passwordLength; i++) {
  var lowercaseRandom =
    lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
  var uppercaseRandom =
    uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
  var numRandom = Math.floor(Math.random() * 10);
  var specialRandom =
    specialChar[Math.floor(Math.random() * specialChar.length)];

  console.log(lowercaseRandom + uppercaseRandom + numRandom + specialRandom);
}

function genPassword() {
  for (var i = 0; i < passwordLength; i++) {
    console.log();
  }
}
