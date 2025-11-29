// instead of cramming input into weird small functions...
// lets lean into javascript's internal calculation system which works fine.
// (also lets try to do this without an open invitation for XSS)

// ------------------------------------- Core Variables ---------------------------------------
let input;
let solution;
let previousCalculation;
const inputInStorage = [];
const inputInDisplay = [];
const calculator = {
    storage: inputInStorage,
    display: inputInDisplay
};


// -------------------------------------- Document Objects ------------------------------------

// ---------- Display
const previousDisplay = document.getElementById("previousDisplay");
const mainDisplay = document.getElementById("mainDisplay");

// ---------- Extra Buttons
const doomButton = document.getElementById("tikTokButton");
const boomButton = document.getElementById("facebookButton");
const jamButton = document.getElementById("spotifyButton");

const darkButton = document.getElementById("darkModeButton");
const lightButton = document.getElementById("lightButton");
const screenButton = document.getElementById("screenButton");

// ---------- Number Buttons
const sevenButton = document.getElementById("sevenButton");
const eightButton = document.getElementById("eightButton");
const nineButton = document.getElementById("nineButton");

const fourButton = document.getElementById("fourButton");
const fiveButton = document.getElementById("fiveButton");
const sixButton = document.getElementById("sixButton");

const oneButton = document.getElementById("oneButton");
const twoButton = document.getElementById("twoButton");
const threeButton = document.getElementById("threeButton");

const zeroButton = document.getElementById("zeroButton");

// --------- Operation Buttons
const onClearButton = document.getElementById("onButton");
const dotButton = document.getElementById("dotButton");

const divideButton = document.getElementById("divideButton");
const multiplyButton = document.getElementById("multiplyButton");
const subtractButton = document.getElementById("subtractButton");
const addButton = document.getElementById("addButton");
const equalButton = document.getElementById("equalButton");

// --------- Button Array of Objects

const extraButtons = [
    {
        button: doomButton,
        buttonValue: "Tik Tok",
        buttonLink: "https://www.tiktok.com/",
    },
    {
        button: boomButton,
        buttonValue: "Facebook",
        buttonLink: "https://www.facebook.com/",
    },
     {
        button: jamButton,
        buttonValue: "Spotify",
        buttonLink: "https://open.spotify.com/",
    },
    {
        button: darkButton,
        buttonValue: "Dark Mode",
        buttonLink: "",
    },
    {
        button: lightButton,
        buttonValue: "Light Mode",
        buttonLink: "",
    },
    {
        button: screenButton,
        buttonValue: "Change Screen",
        buttonLink: "",
    },
];

const numberButtons = [
    {
        button: oneButton,
        buttonValue: 1,
    },
    {
        button: twoButton,
        buttonValue: 2,
    },
    {
        button: threeButton,
        buttonValue: 3,
    },
    {
        button: fourButton,
        buttonValue: 4,
    },
    {
        button: fiveButton,
        buttonValue: 5,
    },
    {
        button: sixButton,
        buttonValue: 1,
    },
    {
        button: sevenButton,
        buttonValue: 1,
    },
    {
        button: eightButton,
        buttonValue: 1,
    },
    {
        button: nineButton,
        buttonValue: 1,
    },
    {
        button: zeroButton,
        buttonValue: 1,
    },
];
const operationButtons = [
    {
        button: onClearButton,
        buttonValue: "",
    },
    {
        button: dotButton,
        buttonValue: ".",
    },
    {
        button: divideButton,
        buttonValue: "/",
    },
    {
        button: multiplyButton,
        buttonValue: "*",
    },
    {
        button: subtractButton,
        buttonValue: "-",
    },
    {
        button: addButton,
        buttonValue: "+",
    },
    {
        button: equalButton,
        buttonValue: "",
    },
];

// ------------------------------------- Core Functions ---------------------------------------
function getInputNumber() {
    input = this.textContent;
    storeInput(input);
    displayInput(input);
}

function getInputSign() {
}

function storeInput(input) {
    inputInStorage.push(input);
    previousDisplay.textContent = inputInStorage.join("");

}
function displayInput(input) {
    inputInDisplay.push(input);
    mainDisplay.textContent = inputInDisplay.join("");
    // display input
}
function evaluate() {
    // run calculation within store input
    // trigger display to reflect previous calculation and solution at same time
}
function resetCalc() {
    while (inputInStorage.length > 0){
        inputInStorage.pop();
    }
    while (inputInDisplay.length > 0){
        inputInDisplay.pop();
    }
    previousDisplay.textContent = ""
    mainDisplay.textContent = 0
    // 
}
// ---------------------------------------- The Calc ------------------------------------------

// didnt make these arrays for nothing LMAO
for (let i = 0; i <10; i++) {
    numberButtons[i].button.addEventListener("click", getInputNumber);
}

onClearButton.addEventListener("click", resetCalc);
