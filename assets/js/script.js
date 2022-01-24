// Assignment code herenvar specialChars = ["!", "@", "#", "$", "%","&"]
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

};

function generatePassword() {
    let passwordLength = prompt("How many characters would you liek in your password? Must be between 8 and 128 characters.");
    if (passwordLength >= 8 || passwordLength <= 128) {
      let wantsSpecial = confirm("If you'd like special characters, click okay");
      let wantsLower = confirm("If you'd like lowercase characters click okay.");
      let wantsUpper = confirm("If you'd like uppercase characters click okay.");
      let wantsNumber = confirm("If you'd like numbers click okay.");
      if (wantsNumber || wantsLower || wantsSpecial || wantsUpper) {
          let passwordText = "";
          
      }
    } 
}
    generatePassword();