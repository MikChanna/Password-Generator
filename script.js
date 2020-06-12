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
function getrandomNum() {
  return [Math.floor(Math.random() * 10)];
}

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// check to see if the arrays are recognized

console.log(
  uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]
);
console.log(
  lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]
);
console.log(specialChar[Math.floor(Math.random() * specialChar.length)]);

console.log([Math.floor(Math.random() * 10)]);

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
