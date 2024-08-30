/** @format */

const gameName = "Guess The Word";
const primaryColor = "#f44336";
const inPlace = "#f89e13";
const notInPlace = "#18ba89";
const noPlace = "#27303f";
const hintColor = "#009688";

// ! Set the document title
document.title = gameName;

// ! Create elements and assign them to variables
const container = document.createElement("div");
container.className = "guess-game";

// ! Create and append the h1 element
const header = document.createElement("h1");
header.textContent = gameName;

// ! Create and append the game area
const gameArea = document.createElement("div");
gameArea.className = "game-area";

const inputsDiv = document.createElement("div");
inputsDiv.className = "inputs";

const controlDiv = document.createElement("div");
controlDiv.className = "control";

const checkButton = document.createElement("button");
checkButton.className = "check";
checkButton.textContent = "Check Word";

const hintButton = document.createElement("button");
hintButton.className = "hint";
hintButton.innerHTML = "<span></span> Hints";

controlDiv.appendChild(checkButton);
controlDiv.appendChild(hintButton);

const messageDiv = document.createElement("div");
messageDiv.className = "message";

gameArea.appendChild(inputsDiv);
gameArea.appendChild(controlDiv);
gameArea.appendChild(messageDiv);

container.appendChild(gameArea);

// ! Create and append the key colors section
const keyColorsDiv = document.createElement("div");
keyColorsDiv.className = "key-colors";

const keyColorsTitle = document.createElement("h2");
keyColorsTitle.textContent = "Key Colors";

const keyColor1 = createKeyColor("in-place", "Letter Is Right And In Place");
const keyColor2 = createKeyColor(
  "not-in-place",
  "Letter Is Right But Not In Place"
);
const keyColor3 = createKeyColor("no", "Letter Is Wrong, Not Exists In Word");

keyColorsDiv.appendChild(keyColorsTitle);
keyColorsDiv.appendChild(keyColor1);
keyColorsDiv.appendChild(keyColor2);
keyColorsDiv.appendChild(keyColor3);

container.appendChild(keyColorsDiv);
// ! Create and append the footer
const footer = document.createElement("footer");
footer.innerHTML = `${gameName} Made By <span>Allam</span> 🤍`;

document.body.prepend(footer);
document.body.prepend(container);
document.body.prepend(header);

// ! Helper function to create key color elements
function createKeyColor(className, text) {
  const keyColorDiv = document.createElement("div");
  keyColorDiv.className = "key-color";

  const keyDiv = document.createElement("div");
  keyDiv.className = `key ${className}`;

  const keyTextDiv = document.createElement("div");
  keyTextDiv.className = "key-text";
  keyTextDiv.textContent = text;

  keyColorDiv.appendChild(keyDiv);
  keyColorDiv.appendChild(keyTextDiv);

  return keyColorDiv;
}

document.documentElement.style.boxSizing = "border-box";

document.body.style.cssText = `
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #eee;
  margin: auto;
`;

header.style.cssText = `
  text-align: center;
  padding: 20px;
  margin: 0 0 50px;
  background-color: #fff;
  font-family: "Metal Mania", system-ui;
  color: ${primaryColor};
  opacity: 0.8;
`;

container.style.cssText = `
  text-align: center;
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 30px;
  min-height: calc(100vh - 306px);
`;

footer.style.cssText = `
  text-align: center;
  padding: 20px 0;
  background-color: #333;
  color: white;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
`;

footer.children[0].style.cssText = `
  color: ${primaryColor};
`;

controlDiv.style.cssText = `
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  margin: 30px auto 70px;
  gap: 10px;
`;

checkButton.style.cssText = `
  background-color: ${primaryColor};
  color: white;
  font-weight: bold;
  font-size: 18px;
  padding: 15px 60px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  flex: 1;
`;

hintButton.style.cssText = `
  background-color: ${hintColor};
  font-size: 18px;
  color: white;
  padding: 15px 0;
  border-radius: 6px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  flex: 1;
  width: fit-content;
`;
keyColorsDiv.style.cssText = `
  margin-bottom: 80px;
`;

hintButton.children[0].style.cssText = `
  margin-right: 5px;
`;

messageDiv.style.cssText = `
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  margin: 15px 0;
`;

const keyTextDivs = document.querySelectorAll(".key-text");
keyTextDivs.forEach((keyTextDiv) => {
  keyTextDiv.style.cssText = `
    font-weight: bold;
  `;
});

const keyColorDivs = document.querySelectorAll(".key-color");
keyColorDivs.forEach((keyColorDiv) => {
  keyColorDiv.style.cssText = `
    display: flex;
    align-items: center;
    padding: 15px;
    background-color: white;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    max-width: 520px;
  `;

  // ! Make a Style For The Box Of Color
  keyColorDiv.children[0].style.cssText = `
    width: 30px;
    height: 30px;
    margin: 0 10px 0 8px;
  `;

  // ! Put The Color In The Correct Place In Box
  if (keyColorDiv.children[0].classList.contains("in-place")) {
    keyColorDiv.children[0].style.background = `${inPlace}`;
  } else if (keyColorDiv.children[0].classList.contains("not-in-place")) {
    keyColorDiv.children[0].style.background = `${notInPlace}`;
  } else if (keyColorDiv.children[0].classList.contains("no")) {
    keyColorDiv.children[0].style.background = `${noPlace}`;
  }
});

// ! Setting Game Option
let wordToGuess = "";
let wordToGuessArray = [
  "apple",
  "grape",
  "melon",
  "peach",
  "berry",
  "lemon",
  "mango",
  "olive",
  "tommy",
  "radar",
  "beach",
  "smoke",
  "flame",
  "sunny",
  "pinky",
  "candy",
  "blaze",
  "music",
  "sound",
  "light",
  "charm",
  "globe",
  "plane",
  "pilot",
  "earth",
  "smile",
  "style",
  "flair",
  "fancy",
  "trend",
  "shape",
  "curve",
  "beast",
  "mouse",
  "horse",
  "zebra",
  "tiger",
  "eagle",
  "sheep",
  "goose",
  "whale",
  "shark",
  "piano",
  "viola",
  "trump",
  "viola",
  "laser",
  "robot",
  "climb",
  "dance",
  "swing",
  "fight",
  "throw",
  "block",
  "punch",
  "sword",
  "rifle",
  "march",
  "squad",
  "army",
  "plant",
  "bloom",
  "flora",
  "grass",
  "trees",
  "lakes",
  "creek",
  "river",
  "valve",
  "wheel",
  "motor",
  "brake",
  "cable",
  "chain",
  "gears",
  "hinge",
  "jewel",
  "brace",
  "pearl",
  "plume",
  "stone",
  "storm",
  "quake",
  "flock",
  "waves",
  "grace",
  "power",
  "rider",
  "crown",
  "ruler",
  "chief",
  "mayor",
];

wordToGuess =
  wordToGuessArray[
    Math.floor(Math.random() * wordToGuessArray.length)
  ].toLowerCase();
console.log(wordToGuess);

let numberOfTries = wordToGuess.length;
let numberOfLetters = wordToGuess.length;
let currentTry = 1;
let numberOfHints = Math.ceil(wordToGuess.length / 3);

function generatGame() {
  const inputsField = document.querySelector(".inputs");
  for (let i = 1; i <= numberOfTries; i++) {
    let div = document.createElement("div");
    let span = document.createElement("span");
    span.innerHTML = `Try ${i}`;
    div.classList.add(`Try-${i}`);

    div.style.cssText = `
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    `;

    span.style.cssText = `
      font-weight: bold;
      font-size: 20px;
      margin-right: 15px;
    `;

    div.append(span);

    if (i !== 1) div.classList.add("disabled-inputs");

    for (let j = 1; j <= numberOfLetters; j++) {
      let input = document.createElement("input");
      input.type = "text";
      input.id = `guess-${i}-letter-${j}`;
      input.maxLength = "1";
      input.style.cssText = `
        width: 50px;
        height: 50px;
        margin: 5px;
        border: none;
        border-bottom: 3px solid #333;
        outline: none;
        text-align: center;
        font-size: 40px;
        font-weight: bold;
        caret-color: ${primaryColor};
        background-color: white;
      `;
      div.append(input);
    }
    inputsField.appendChild(div);
  }

  inputsField.children[0].children[1].focus();

  const disabledInputs = document.querySelectorAll(".disabled-inputs input");
  disabledInputs.forEach((input) => {
    input.disabled = true;
  });

  const inputs = document.querySelectorAll("input");
  inputs.forEach((input, index) => {
    input.addEventListener("input", function () {
      this.value = this.value.toUpperCase();
      const nextInput = inputs[index + 1];
      if (nextInput) nextInput.focus();
    });

    input.addEventListener("keydown", function (event) {
      const currentIndex = Array.from(inputs).indexOf(event.target);

      if (event.key === "ArrowRight") {
        const nextInput = currentIndex + 1;
        if (nextInput < inputs.length) inputs[nextInput].focus();
      } else if (event.key === "ArrowLeft") {
        const prevInput = currentIndex - 1;
        if (prevInput >= 0) inputs[prevInput].focus();
      }
    });
  });
}

const guessButton = document.querySelector(".check");
guessButton.addEventListener("click", handleGuesses);

function handleGuesses() {
  let successGuess = true;
  for (let i = 1; i <= numberOfLetters; i++) {
    const inputField = document.querySelector(
      `#guess-${currentTry}-letter-${i}`
    );
    const inputLetter = inputField.value.toLowerCase();
    const actualLetter = wordToGuess[i - 1];

    if (inputLetter === actualLetter) {
      inputField.classList.add("in-place");
    } else if (wordToGuess.includes(inputLetter) && inputLetter !== "") {
      inputField.classList.add("not-in-place");
      successGuess = false;
    } else {
      inputField.classList.add("no");
      successGuess = false;
    }
  }
  let messageArea = document.querySelector(".message");
  if (successGuess) {
    messageArea.innerHTML = `Congratulations You Win The Word Is <span>${wordToGuess}</span>`;

    if (numberOfHints === 2) {
      messageArea.innerHTML = `<p>Congratulations You Win Without Hints</p>`;
    }

    let allTries = document.querySelectorAll(".inputs > div");
    allTries.forEach((input) => input.classList.add("disabled-inputs"));
    checkButton.disabled = true;
    hintButton.disabled = true;
  } else {
    document
      .querySelector(`.Try-${currentTry}`)
      .classList.add("disabled-inputs");
    const currentTryInputs = document.querySelectorAll(
      `.Try-${currentTry} input`
    );
    currentTryInputs.forEach((input) => (input.disabled = true));
    currentTry++;
    const nextTryInputs = document.querySelectorAll(`.Try-${currentTry} input`);
    nextTryInputs.forEach((input) => (input.disabled = false));
    let el = document.querySelector(`.Try-${currentTry}`);
    if (el) {
      document
        .querySelector(`.Try-${currentTry}`)
        .classList.remove("disabled-inputs");
      el.children[1].focus();
    } else {
      checkButton.disabled = true;
      hintButton.disabled = true;
      messageArea.innerHTML = `You Lose The Word Is <span>${wordToGuess}</span>`;
    }
  }
}

document.querySelector(".hint span").innerHTML = numberOfHints;

hintButton.addEventListener("click", () => {
  const enabledInputs = document.querySelectorAll("input:not([disabled])");
  const emptyEnabledInputs = Array.from(enabledInputs).filter(
    (input) => input.value === ""
  );

  if (emptyEnabledInputs.length === 0) {
    return;
  }

  if (numberOfHints > 0) {
    numberOfHints--;
    document.querySelector(".hint span").innerHTML = numberOfHints;
  }

  if (emptyEnabledInputs.length > 0) {
    const randomIndex = Math.floor(Math.random() * emptyEnabledInputs.length);
    const randomInput = emptyEnabledInputs[randomIndex];
    const indexToFill = Array.from(enabledInputs).indexOf(randomInput);

    if (indexToFill !== -1) {
      randomInput.value = wordToGuess[indexToFill].toUpperCase();
    }
  }

  if (numberOfHints === 0) {
    hintButton.disabled = true;
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    const inputs = document.querySelectorAll("input:not([disabled])");
    const currentIndex = Array.from(inputs).indexOf(document.activeElement);

    if (currentIndex >= 0) {
      const currentInput = inputs[currentIndex];

      if (currentInput.value.length > 0) {
        currentInput.value = currentInput.value.slice(0, -1);
      }

      if (currentInput.value.length === 0 && currentIndex > 0) {
        const previousInput = inputs[currentIndex - 1];
        previousInput.focus();
      }

      // ! Prevent the default backspace action
      e.preventDefault();
    }
  }
});

window.onload = () => {
  generatGame();
};
