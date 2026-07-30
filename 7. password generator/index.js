function generatePassword(
  passwordLength,
  includesLowercase,
  includesNumbers,
  includesSymbols,
  includesUppercase,
) {
  const lowerCase = "abcbefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@$#%?+*&";

  let password = "";
  let passwordCombination = "";

  passwordCombination += includesLowercase ? lowerCase : "";
  passwordCombination += includesUppercase ? uppercase : "";
  passwordCombination += includesNumbers ? numbers : "";
  passwordCombination += includesSymbols ? symbols : "";

  if (passwordCombination.length === 0)
    return "(you must choose at least one set of characters)";

  for (let i = 0; i < passwordLength; i++) {
    randomIndex = Math.floor(Math.random() * passwordCombination.length);
    password += passwordCombination[randomIndex];
  }
  return password;
}
function generate() {
  let passwordLength = Number(document.getElementById("passLength").value);
  let includesLowercase = document.getElementById("lowercase").checked;
  let includesUppercase = document.getElementById("uppercase").checked;
  let includesNumbers = document.getElementById("numbers").checked;
  let includesSymbols = document.getElementById("symbols").checked;

  if (passwordLength < 6 || passwordLength > 20) {
    document.getElementById("password").textContent =
      "password should be between 6 and 20";
    return;
  }

  const password = generatePassword(
    passwordLength,
    includesLowercase,
    includesNumbers,
    includesSymbols,
    includesUppercase,
  );
  document.getElementById("password").textContent = String(password);
}

const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", generate);
