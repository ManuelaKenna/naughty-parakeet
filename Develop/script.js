// Assignment code here
var generateBtn = document.querySelector("#generate");
function generatePassword() {

  var length = parseInt(prompt("How long would you like your password to be?"))
console.log (length)

if (Number.isNaN(length)) {
  alert("Please enter a valid number.")
  return null
}

if (length <8) {
  alert("Make sure your password is larger than 8 characters!")
  return null
}

if (length >128) {
  alert("Please choose a number that is less than 128 characters!")
  return null
}



var includeNumber = confirm("Click the ok button if you want numbers in your password")

var uppercase = (confirm("Would you like an uppercase in your password?"))
console.log (uppercase)

var lowercase = (confirm("Would you like a lowercase in your password?"))
console.log (lowercase)

var specialcharacter = (confirm("Would you like a special character?"))
console.log (specialcharacter)
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
