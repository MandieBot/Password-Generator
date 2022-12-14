function generatePassword() {
  //Declare variables
  var lowerArray = [
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
  var upperArray = [
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
  var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var charactersArray = ["!", "@", "#", "$", "*", "%"];
  var lowerCase;
  var upperCase;
  var numericValue;
  var specialChar;
  var pwLength;

  //Length prompt

  var getLength = function () {
    var pwLength = window.prompt("How long do you want your password?");
    return pwLength;
  };

  //Confirm yes or no for lowercase

  var getLowercase = function () {
    var lowercaseOpt = window.confirm(
      "Do you want to include lowercase characters?"
    );
    return lowercaseOpt;
  };

  //Confirm yes or no for uppercase

  var getUppercase = function () {
    var uppercaseOpt = window.confirm(
      "Do you want to include uppercase characters?"
    );
    return uppercaseOpt;
  };

  //Confirm yes or no for numeric values

  var getNumericValue = function () {
    var numericOpt = window.confirm("Do you want to include numeric values?");
    return numericOpt;
  };

  //Confirm yes or no for special characters

  var getSpecialChar = function () {
    var specialOpt = window.confirm(
      "Do you want to include special characters?"
    );
    return specialOpt;
  };
  //If statements and for loop to generate password

  pwLength = getLength();
  var userArray = [];
  if (pwLength >= 8 && pwLength <= 128) {
    lowerCase = getLowercase();
    upperCase = getUppercase();
    numericValue = getNumericValue();
    specialChar = getSpecialChar();
    console.log(lowerCase);
    if (lowerCase) {
      userArray = userArray.concat(lowerArray);
    }
    if (upperCase) {
      userArray = userArray.concat(upperArray);
    }
    if (numericValue) {
      userArray = userArray.concat(numbersArray);
    }
    if (specialChar) {
      userArray = userArray.concat(charactersArray);
    }
    console.log(userArray);
    console.log(pwLength);
    var finalPassword = [];
    if (lowerCase || upperCase || numericValue || specialChar) {
      for (var i = 0; i < pwLength; i++) {
        var randomIndex = Math.floor(Math.random() * userArray.length);
        console.log(randomIndex);
        finalPassword = finalPassword.concat(userArray[randomIndex]);
        console.log(finalPassword);
      }
      finalPassword = finalPassword.join("");
      console.log(finalPassword);
    }
    return finalPassword;
  } else {
    alert("Please choose a number between 8 and 128");
    generatePassword();
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
