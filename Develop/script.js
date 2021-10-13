// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

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


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generatePassword() {

  var localPassword = "";

  var passLength = prompt("Choose a number between 8 and 128 for your password length");

  // Error catching incorrect inputs
  if(!passLength) {
    return;
  } else if(passLength < 8 || passLength > 128) {
    alert("Please enter a number between 8 and 128");
    return;
  }

  var hasLowerCase = confirm("Would you like your password to have lowercase characters?");
  var hasUpperCase = confirm("Would you like your password to have uppercase characters?");
  var hasNumbers = confirm("Would you like your password to have numbers?");
  var hasSpecialChars = confirm("Would you like your password to have special characters?");

  var lowAlphabet = "abcdefghijklmnopqrstuvwxyz";
  var upAlphabet = lowAlphabet.toUpperCase();
  var numbers = "1234567890";
  var specialChars = "!@#$%^&*()_+=?/";

  var charBank = "";

  if(hasLowerCase) {
    charBank = charBank.concat(lowAlphabet);
  }
  
  if(hasUpperCase) {
    charBank = charBank.concat(upAlphabet);
  }

  if(hasNumbers) {
    charBank = charBank.concat(numbers);
  }

  if(hasSpecialChars) {
    charBank = charBank.concat(specialChars);
  }

  for(i = 0 ; i < passLength ; i++){
    localPassword = localPassword.concat(charBank.charAt(getRandomInt(charBank.length - 1)));
  }

  return localPassword;

}
