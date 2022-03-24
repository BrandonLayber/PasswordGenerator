// Assignment code here
var characterLength = 8;
var choiceArr = [];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];  
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];  
var numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];  
var specialCharacterArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>', '?', '*'];  


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
  
  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  }
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts() {
  characterLength = parseInt(prompt("How many characters do you want your password to be? (TYPE any number between (8 - 128 characters"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("character length has to be a typed number between 8 - 128 digits, please try again!");
    return false;
  }

  if(confirm("Would you like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }

  if(confirm("Would you like Uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }

  if(confirm("Would you like Numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }

  if(confirm("Would you like special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharacterArr);
  }
  return true;
}