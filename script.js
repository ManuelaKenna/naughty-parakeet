// Assignment code here
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {

while (true) {

var userInput = window.prompt("How long do you want your password to be?")

//if user exits the prompt or pushes cancel
if (userInput === null) {
  return
}

var passwordLength = parseInt(userInput)

//if user enters information wrong
if (isNaN(passwordLength)) {
  window.alert("You have to choose a number!")
} else if (passwordLength < 8 || passwordLength > 128) {
  window.alert("Length should be between 8 and 128 characters.")
} else {
  break
}

}

//clarifying questions
var userNumbers = window.confirm("Would you like numbers in your password?")
var userSymbols = window.confirm("Would you like symbols in your password?")
var userUppercase = window.confirm("Would you like uppercase letters in your password?")
var userLowercase = window.confirm("Would you like lowercase letters in your password?")

//all the numbers, letters and symbols
var numberList = ["0","1","2","3","4","5","6","7","8","9"]
var symbolList = ["!","@","#","%","^","&","*","?"]
var lowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var optionsCart = []


//storing all the selected information
for (var i = 0; i < lowercaseList.length; i++){
  uppercaseList[i] = lowercaseList[i].toUpperCase()
}

//optionsCart storing the elements
if (userNumbers === true) {
  optionsCart.push(numberList)
}

if (userSymbols === true) {
  optionsCart.push(symbolList)
}

if (userLowercase === true) {
  optionsCart.push(lowercaseList)
}

if (userUppercase === true) {
  optionsCart.push(uppercaseList)
}

var generatedPassword = ""

for (var i = 0; i < passwordLength; i++){
  var randomList = getRandomItem(optionsCart)
  var randomChar = getRandomItem(optionsCart)
  generatedPassword += randomChar;
}

//hopefully this generates a password
return generatedPassword

}

//function action to write the password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)