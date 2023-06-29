// Assignment Code
var generateBtn = document.querySelector("#generate");

// All possible inclusions
const lowerCaseLetters = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z']; 
const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];

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
    prompt("Please choose a value between 8 and 128 characters.")
  };
  let inlcudeLowerCase = confirm("Do you want to include lowercase letters?");
  let includeUpperCase = confirm("Do you want to include uppercase letters?");
  let includeNumeric = confirm("Do you want to include numeric values?");
  let includeSpecial = confirm("Do you want to include special charaters?");

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
    console.log(passwordInclusions[Math.floor(Math.random() * passwordInclusions.length)]);
    let randomInclusions = passwordInclusions[Math.floor(Math.random() * passwordInclusions.length)]
    // Fill new password with random inclusions
    newPassword += randomInclusions;
  }

  return newPassword 
}

// Random selection of inclusions
//const randomLowerCase = Math.floor(Math.random() * lowerCaseLetters.length)
//const randomUpperCase = Math.floor(Math.random() * upperCaseLetters.length);
//const randomNumbers = Math.floor(Math.random() * numericCharacters.length);
//const randomSpecial = Math.floor(Math.random() * specialCharacters.length);