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

// --------- Button Objects

const extraButtons = {
    doomButton: {
        button: doomButton,
        buttonValue: "Tik Tok",
        buttonLink: "https://www.tiktok.com/",
    },
    boomButton: {
        button: boomButton,
        buttonValue: "Facebook",
        buttonLink: "https://www.facebook.com/",
    },
    jamButton: {
        button: jamButton,
        buttonValue: "Spotify",
        buttonLink: "https://open.spotify.com/",
    },
    darkButton: {
        button: darkButton,
        buttonValue: "Dark Mode",
        buttonLink: "",
    },
    lightButton: {
        button: lightButton,
        buttonValue: "Light Mode",
        buttonLink: "",
    },
    screenButton: {
        button: screenButton,
        buttonValue: "Change Screen",
        buttonLink: "",
    },
}

const numberButtons = {
    oneButton: {
        button: oneButton,
        buttonValue: 1,
    },
    twoButton: {
        button: twoButton,
        buttonValue: 2,
    },
    threeButton: {
        button: threeButton,
        buttonValue: 3,
    },
    fourButton: {
        button: fourButton,
        buttonValue: 4,
    },
    fiveButton: {
        button: fiveButton,
        buttonValue: 5,
    },
    sixButton: {
        button: sixButton,
        buttonValue: 1,
    },
    sevenButton: {
        button: sevenButton,
        buttonValue: 1,
    },
    eightButton: {
        button: eightButton,
        buttonValue: 1,
    },
    nineButton: {
        button: nineButton,
        buttonValue: 1,
    },
    zeroButton: {
        button: zeroButton,
        buttonValue: 1,
    },
}
const operationButtons = {
    onClearButton: {
        button: onClearButton,
        buttonValue: "",
    },
    dotButton: {
        button: dotButton,
        buttonValue: ".",
    },
    divideButton: {
        button: divideButton,
        buttonValue: "/",
    },
    multiplyButton: {
        button: multiplyButton,
        buttonValue: "*",
    },
    subtractButton: {
        button: subtractButton,
        buttonValue: "-",
    },
    addButton: {
        button: addButton,
        buttonValue: "+",
    },
    equalButton: {
        button: equalButton,
        buttonValue: "",
    },
}

// ------------------------------------- Core Functions ---------------------------------------
function getInput() {

}
function storeInput() {
    inputInStorage.push(input);
}
function displayInput() {
    inputInDisplay.push(input);
    // display input
}
function evaluate() {
    // run calculation within store input
    // trigger display to reflect previous calculation and solution at same time
}
function resetCalc() {
    // 
}