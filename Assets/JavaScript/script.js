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

  // Empty local password
  var localPassword = "";

  // Possible character bank values
  var lowAlphabet = "abcdefghijklmnopqrstuvwxyz";
  var upAlphabet = lowAlphabet.toUpperCase();
  var numbers = "1234567890";
  var specialChars = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  // Character bank begins as empty string
  var charBank = "";

  var passLength = prompt("Choose a number between 8 and 128 for your password length");

  // Checks to see if desired password length is within parameters
  if (passLength >= 8 && passLength <= 128) {

    // Adds characters to character bank depending on user input
    if (confirm("Would you like your password to have lowercase characters?")) {
      charBank = charBank.concat(lowAlphabet);
    }

    if (confirm("Would you like your password to have uppercase characters?")) {
      charBank = charBank.concat(upAlphabet);
    }

    if (confirm("Would you like your password to have numbers?")) {
      charBank = charBank.concat(numbers);
    }

    if (confirm("Would you like your password to have special characters?")) {
      charBank = charBank.concat(specialChars);
    }

    // Bad input catch
    if (charBank === "") {
      alert("How do you expect to have a password with no characters?")
      return;
    }

    for (i = 0; i < passLength; i++) {
      localPassword = localPassword.concat(charBank.charAt(getRandomInt(charBank.length)));
    }

    return localPassword;
  }

  // Error catching incorrect inputs
  else if (!passLength) {
    alert("You forgot to enter a number between 8 and 128.")
    return;
  } else {
    alert("ONLY enter a number between 8 and 128. Not that difficult. Jeez.");
    return;
  }

}
