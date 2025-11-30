// instead of cramming input into weird small functions...
// lets lean into javascript's internal calculation system which works fine.
// (also lets try to do this without an open invitation for XSS)

// ------------------------------------- Core Variables ---------------------------------------
let input;
// let solution;
// let previousCalculation;
let num1;
let num2;
const num2Array = [];
let sign;
let result;
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
];

// ------------------------------------- Core Functions ---------------------------------------
function getInputNumber() {
    input = this.textContent;
    storeInput(input);
    displayInput(input);
    if (num1 !== undefined) {
        num2Array.push(input);
    }
}

function getInputSign() {
    
    if ((inputInStorage.at(-1) === "/") ||
        (inputInStorage.at(-1) === "*") ||
        (inputInStorage.at(-1) === "-") ||
        (inputInStorage.at(-1) === "+")) {
        // if last entry is an input sign already in the array, do nothing.
    } else if (!inputInStorage.at(0)) {
        // if array is empty, do nothing.
    } else if (sign === undefined) {
        // input proper sign into array based on button
        switch (this.id) {
        case "divideButton":
            sign = "/";
            num1 = parseFloat(inputInStorage.join(""));
            input = operationButtons[0].buttonValue;
            storeInput(input);
            displayInput(input);
            
            break;
        case "multiplyButton":
            sign = "*";
            num1 = parseFloat(inputInStorage.join(""));
            input = operationButtons[1].buttonValue;
            storeInput(input);
            displayInput(input);
            break;
        case "subtractButton":
            sign = "-";
            num1 = parseFloat(inputInStorage.join(""));
            input = operationButtons[2].buttonValue;
            storeInput(input);
            displayInput(input);
            break;
        case "addButton":
            sign = "+";
            num1 = parseFloat(inputInStorage.join(""));
            input = operationButtons[3].buttonValue;
            storeInput(input);
            displayInput(input);
            break;
        }
    }
}


function storeInput(input) {
    if (inputInStorage.length < 30) {
        inputInStorage.push(input);
        previousDisplay.textContent = inputInStorage.join("");
    } else {
        previousDisplay.textContent = "this isnt a GOOD calculator,"
    }
}
function displayInput(input) {
    if (
        (input === "/") ||
        (input === "*") ||
        (input === "-") ||
        (input === "+")) {
        // clear display array
        while (inputInDisplay.length > 0){
            inputInDisplay.pop();
        }
    } else if (inputInDisplay.length < 10) {
        inputInDisplay.push(input);
        mainDisplay.textContent = inputInDisplay.join("");
    } else {
        mainDisplay.textContent = "bro chill"
    }
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
    while (num2Array.length > 0){
        num2Array.pop();
    }
    previousDisplay.textContent = ""
    mainDisplay.textContent = 0
    input = undefined;
    solution = undefined;
    previousCalculation = undefined;
    num1 = undefined;
    num2 = undefined;
    sign = undefined;
    result = undefined;

    // 
}
// ---------------------------------------- The Calc ------------------------------------------

// didnt make these arrays for nothing LMAO
for (let i = 0; i <10; i++) {
    numberButtons[i].button.addEventListener("click", getInputNumber);
}
for (let i = 0; i <4; i++) {
    operationButtons[i].button.addEventListener("click", getInputSign);
}
onClearButton.addEventListener("click", resetCalc);
dotButton.addEventListener("click", getInputNumber);
equalButton.addEventListener("click", evaluate); // evily mwahaha