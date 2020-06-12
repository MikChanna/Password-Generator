// DOM Elements
var upperEl = document.querySelector(".upper");
var lowerEl = document.querySelector(".lower");
var numberEl = document.querySelector(".number");
var specialEl = document.querySelector(".special");
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// slider function
var slider = document.getElementById("myRange");
var output = document.querySelector("#demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;

  var length = +slider.value;
  console.log(length);
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
generateBtn.addEventListener("click", function () {
  var hasUpper = upperEl.checked;
  var hasLower = lowerEl.checked;
  var hasNum = numberEl.checked;
  var hasSpecial = specialEl.checked;

  passwordText.value = generatePassword(
    hasUpper,
    hasLower,
    hasNum,
    hasSpecial,
    length
  );
});

// // Write password to the #password input

var password = generatePassword();
passwordText.value = password;

function generatePassword(lower, upper, special, num, length) {
  var typesCount = upper + lower + special + num;
  var typeArray = [{ upper }, { lower }, { special }, { num }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return "Please check at least 1 option";
  }

  for (var i = 0; i < length; i += randomFunctions) {}
}
