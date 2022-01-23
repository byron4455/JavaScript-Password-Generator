// Assignment code here
var specialChars = ["!", "@", "#", "$", "%","&"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var lowercase = ["a", "b", "c", "d","e","f","g","h"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H"]


function getRandomSpecial() {
    return specialChars[Math.floor(Math.random() * specialChars.length)];
  }
  function getRandomNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
  }
  function getRandomLowercase() {
    return lowercase[Math.floor(Math.random() * lowercase.length)];
  }
  function getRandomUppercase() {
    return uppercase[Math.floor(Math.random() * uppercase.length)];
  }
  const randomFunction = {
    lower: getRandomLowercase,
    upper: getRandomUppercase,
    number: getRandomNumber,
    special: getRandomSpecial
  };
  





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