// Assignment Code
var generateBtn = document.querySelector("#generate");

// All possible inclusions
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
const numericCharacters = "0123456789";
const specialCharacters = "!#$%&()*+-./:;<=>?@[\^_`{|}~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generate password
function generatePassword() {

  // Password pool value to be filled
  let passwordInclusions = "";
  // New password value to be filled
  let newPassword = "";

  // Buttons to generate password
  let passwordLength = prompt("Please choose how long you would like the password to be:");
  // Require a password length b/w 8 and 128
  if (passwordLength < 8 || passwordLength > 128) {
    prompt("Please choose a value between 8 and 128 characters.");
  // Require value for passwordLength
  } else if (passwordLength == "") {
    prompt("Please choose a value between 8 and 128 characters.");
  }
  let inlcudeLowerCase = confirm("Do you want to include lowercase letters?");
  let includeUpperCase = confirm("Do you want to include uppercase letters?");
  let includeNumeric = confirm("Do you want to include numeric values?");
  let includeSpecial = confirm("Do you want to include special charaters?");

  // If no confirms are selected, re prompt
  if (!inlcudeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecial) {
    alert("Please restart and select at least one character type to include.");
    generatePassword.close();
  }

  //If a button is selected, add inclusions to password pool
  if (inlcudeLowerCase) {
    passwordInclusions += lowerCaseLetters;
  }
  if (includeUpperCase) {
    passwordInclusions += upperCaseLetters;
  }
  if (includeNumeric) {
    passwordInclusions += numericCharacters;
  }
  if (includeSpecial) {
    passwordInclusions += specialCharacters;
  }

  // Randomize inclusions and add 
  for (let i = 0; i < passwordLength; i++) {
    let randomInclusions = passwordInclusions[Math.floor(Math.random() * passwordInclusions.length)]
    // Fill new password with random inclusions
    newPassword += randomInclusions;
  }

  return newPassword 
}