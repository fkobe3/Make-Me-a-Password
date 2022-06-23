var generateBtn = document.querySelector("#generate");

function getPasswordLength() {

var passwordLength = prompt("Please type in the length of your password (must be from 8 to 128 characters) .");
  while (passwordLength < 8 || passwordLength > 128 || passwordLength == null) {
     alert("Your answer did not meet the minimum, or exceeded the maximum, limits. Please try again.")
     passwordLength = prompt("Please type in the length of your password(must be from 8 to 128 characters).");
  }
  return passwordLength;};

function initializePassword() {
   
  alert("What does your password need to include?");
 
  var Lowercase = confirm("Lowercase letters?");
  var Uppercase = confirm("Uppercase letters?");
  var Numerics = confirm("Numbers?");
  var Specials = confirm("Special characters?");

  var confirmArray = new Array(Lowercase, Uppercase, Numerics, Specials);
  
  var allPromptsFalseCheck = confirmArray.every( confirmElement  => !confirmElement );
  if (allPromptsFalseCheck) {
     alert("Please Select Character Types")
     initializePassword();   
  };

  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '1234567890';
  const specials = `!"#$%&'()*+,-./:;<>=?@[]^_\{}|~`;

  var characterRange = '';

  if (Lowercase) { 
     characterRange += lowercase; 
  }
  if (Uppercase) { 
     characterRange += UPPERCASE; 
  }
  if (Numerics) { 
     characterRange += numbers; 
  }
  if (Specials) { 
     characterRange += specials; 
  }
 
  return characterRange;
};

function generatePassword() {

 
  var userLength = getPasswordLength();
  var characters = initializePassword();
  
  var yourPassword = '';  
  for (let i = 0; i < userLength; i++) {
     yourPassword += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return yourPassword;
};

var generateBtn = document.querySelector("#generate");

function writePassword() {
 var password = generatePassword();
 var passwordText = document.querySelector("#password");

 passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);
