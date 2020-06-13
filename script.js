// slider functions
var slider = document.getElementById("myRange");
var output = document.querySelector("#demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;

  // var sliderLength = +slider.value;
  // console.log(length);
};

// DOM Elements
var upperEl = document.querySelector(".upper");
var lowerEl = document.querySelector(".lower");
var numberEl = document.querySelector(".number");
var specialEl = document.querySelector(".special");
var generateBtn = document.querySelector("#generate");

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

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

function validate() {
  var hasUpper = upperEl.checked;
  var hasLower = lowerEl.checked;
  var hasNum = numberEl.checked;
  var hasSpecial = specialEl.checked;

  // var typesCount = hasUpper + hasLower + hasNum + hasSpecial;

  if (!hasUpper && !hasLower && !hasNum && !hasSpecial) {
    alert("Please select as least one option.");
  } else {
    generatePassword();
  }
}

function generatePassword() {
  var typesCount = [
    upperEl.checked + lowerEl.checked + numberEl.checked + specialEl.checked,
  ];

  // console.log(typesCount);
  var sliderLength = +slider.value;
  var firstPass = "";
  for (i = 0; i < sliderLength; i++) {
    if (upperEl.checked) {
      firstPass += getRandomUpper();
    }
    if (lowerEl.checked) {
      firstPass += getRandomLower();
    }
    if (numberEl.checked) {
      firstPass += getRandomNum();
    }
    if (specialEl.checked) {
      firstPass += getRandomSpecial();
    }
    var secondPass = firstPass.slice((typesCount - 1) * sliderLength);
  }
  console.log(firstPass, firstPass.length);
  console.log(secondPass, secondPass.length);
}

// Add event listener to generate button
generateBtn.addEventListener("click", validate);
