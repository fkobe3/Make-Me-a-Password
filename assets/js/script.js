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
}
