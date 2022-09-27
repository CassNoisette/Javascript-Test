// Assignment code here

var characterLength = 8;
var choiceArray = [];

var specialCharArray= ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var lowerCaseArray= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArray= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArray= ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
// generate password based on the prompts
function generatePassword() {

}

function getPrompts(){
  choiceArray = [];
characterLength = parseInt(prompt("Choose the length of your password"(8-128 characters)))
if (isNaN (characterLength) || characterLength <8 || characterLength >128){
  alert ("Your password length must be a number between 8-128 digits. Please try again.")

}
if (confirm("Would you like to include lowercase letters to your password?")){
  choiceArray=choiceArray.concat(lowerCaseArray);
}

if (confirm("Would you like to include uppercase letters to your password?")){
  choiceArray=choiceArray.concat(upperCaseArray);
}

if (confirm("Would you like to include numbers to your password?")){
  choiceArray=choiceArray.concat(numberArray);
}

if (confirm("Would you like to include special characters to your password?")){
  choiceArray=choiceArray.concat(specialCharArray);
}
return true;

}
