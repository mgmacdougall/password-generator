const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/"
];

const passwordOneEl = document.getElementById("password-one");
const passwordTwoEl = document.getElementById("password-two");
/**
 * Create a random password from characters array
 */
function createRandomPassword() {
  let password = "";
  // 15 chracters long
  for (let i = 0; i <= 15; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
}

function generatePasswords() {
  passwordOneEl.innerText = createRandomPassword();
  passwordTwoEl.innerText = createRandomPassword();
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(
    function() {
      console.log("success");
    },
    function() {
      console.log("failed");
    }
  );
}

function getTextFromTarget() {
  copyToClipboard(this.innerText);
}

passwordOneEl.addEventListener("click", getTextFromTarget);
