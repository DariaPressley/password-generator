function generatePassword(){

var charset = "";
var password = "";
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "!@#$%^&*()";
var numberCharacters = "0123456789";

  
  var passwordLength = window.prompt("Number of charcaters between 8 and 128");

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert ("Please enter a number between 8 and 128.");
    return "Try again.";
  }

  var upperCaseChoice = window.confirm ("Would you like to include uppercase characters?")
  var lowerCaseChoice = window.confirm ("Would you like to include lowercase characters?")
  var specialCharactersChoice = window.confirm ("Would you like to include special characters?")
  var numbersChoice = window.confirm ("Would you like to include numbers?")

  if (!upperCaseChoice && !lowerCaseChoice && !specialCharactersChoice && !numbersChoice) {
    
    window.alert ("Please choose at least one option.")
    return "Try again.";
  }

  if (upperCaseChoice === true) {
    charset += upperCharacters;
  }

  if (lowerCaseChoice === true) {
    charset += lowerCharacters;
  }

  if (specialCharactersChoice === true) {
    charset += specialCharacters;
  }

  if (numbersChoice === true) {
    charset += numberCharacters; 
  }

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * charset.length);
    password += charset.substring(randomNumber, randomNumber +1);
   }

return password;
}


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

