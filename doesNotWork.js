// slider function
var slider = document.getElementById("myRange");
var output = document.querySelector("#demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;

  var length = +slider.value;
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

// console.log(getRandomUpper());
// console.log(getRandomLower());
// console.log(getRandomSpecial());
// console.log(getRandomNum());

var randomFunctions = {
  upper: getRandomUpper(),
  lower: getRandomLower(),
  num: getRandomNum(),
  special: getRandomSpecial(),
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function getCharacters() {
  var hasUpper = upperEl.checked;
  var hasLower = lowerEl.checked;
  var hasNum = numberEl.checked;
  var hasSpecial = specialEl.checked;

  if (
    hasUpper === true ||
    hasLower === true ||
    hasNum === true ||
    hasSpecial === true
  )
    console.log("hello");

  {
    if (hasUpper) {
      getRandomUpper();
    }
    if (hasLower) {
      getRandomLower();
    }
    if (hasNum) {
      getRandomNum();
    }
    if (hasSpecial) {
      getRandomSpecial();
    } else {
      alert("Please select an option");
    }
  }
}
console.log(getCharacters());

// // Write password to the #password input
function generatePassword(upper, lower, num, special, length) {
  var types = upper + lower + num + special;

  console.log(types);

  var typesArray = [{ upper }, { lower }, { num }, { special }].filter(
    (item) => Object.values(item)[0]
  );

  console.log("types:", typesArray);

  if (types === 0) {
    alert("Please select at least 1 option");
  }

  for (let i = 0; i < length; i++) {
    var newPassword =
      randomFunctions[Math.floor(Math.random() * uppercaseLetters.length)];
    //   typesArray.forEach(function () {
    //     var newFunc = Object.keys(typesArray);
    //     password += randomFunctions[newFunc];

    //
    //   });
    // }

    password = newPassword;
    console.log(password);
  }

  // // Add event listener to generate button
  generateBtn.addEventListener("click", getCharacters());
}
