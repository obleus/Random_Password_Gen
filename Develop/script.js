// Assignment code here
var passwordLength = 8
var numeric = false
var lowercase = false
var uppercase = false
var specialChar = false
var step = 0
var charset = ""

function generatePassword() {
  if  (step === 0) 
  {
    passwordLength = window.prompt ("Enter password length between 8 and 128 characters.")
    if (passwordLength < 8 || passwordLength > 128) 
    {
      window.alert("Please enter a number between 8 and 128.")
    }
    else {step = 1}
  }
  if (step === 1)
  {
    numeric = window.confirm ("Would you like to add numeric characters?")
    step = 2
  }
  if (step === 2)
  {
    lowercase = window.confirm ("Would you like to include lowercase letters?")
    step = 3
  }
  if (step === 3)
  {
    uppercase = window.confirm ("Would you like to include uppercase letters?")
    step = 4
  }
  if (step === 4)
  {
    specialChar = window.confirm ("Would you like to include special characters?")
    step = 5
  }
  if (step === 5)
  {
    if (numeric) charset += "0123456789"
    if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz"
    if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (specialChar) charset += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~" 
    var retVal = "";
    for (var i = 0, n = charset.length; i < passwordLength; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
  }



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password !== 'undefined') 
  {
    passwordText.value = password; 
    step = 0   
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


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
