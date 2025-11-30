// ------------------------------------- Core Variables ---------------------------------------
let input;
// let solution;
// let previousCalculation;
let num1;
let num2;
let sign;
let result;
const inputInStorage = [];
const inputInDisplay = [];
const num2Array = [];
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
    if (sign === "=") {
        
        while (inputInDisplay > 0) {
            inputInDisplay.pop();
        };
        while (inputInStorage > 0) {
            inputInStorage.pop();
        };
        while (num2Array > 0) {
            num2Array.pop();
        };
        sign = undefined;
        result = undefined;
        num1 = undefined;
        num2 = undefined
    }
    if ((this.textContent === ".") && (mainDisplay.textContent.includes("."))) {
        // do nothing
        return;
    } 
    if ((this.textContent === ".") && (!inputInStorage.at(0))) {
        // if array is empty, do nothing.
        return;
    }
    else {
        input = this.textContent;
        storeInput(input);
        displayInput(input);
        if (num1 !== undefined) {
            num2Array.push(input);
        }
    }
}

function getInputSign() {
    
    if ((!inputInStorage.at(0))  || (inputInStorage.at(-1) === ".")){
        // if array is empty, do nothing.
        return;
    } else if ((inputInStorage.at(-1) === "/") ||
        (inputInStorage.at(-1) === "*") ||
        (inputInStorage.at(-1) === "-") ||
        (inputInStorage.at(-1) === "+")) {
        switch (this.id) {
            case "divideButton":
                sign = "/";
                input = operationButtons[0].buttonValue;
                break;
            case "multiplyButton":
                sign = "*";
                input = operationButtons[1].buttonValue;
                break;
            case "subtractButton":
                sign = "-";
                input = operationButtons[2].buttonValue;
                break;
            case "addButton":
                sign = "+";
                input = operationButtons[3].buttonValue;
                break;
        }
        inputInStorage.pop();
        inputInStorage.push(input);
        previousDisplay.textContent = inputInStorage.join("");
        return;
    } else if (sign === undefined) {
        // THIS IS WHAT HAPPENS FOR THE FIRST SIGN
        switch (this.id) {
        case "divideButton":
            sign = "/";
            num1 = parseFloat(inputInStorage.join(""));
            input = operationButtons[0].buttonValue;
            break;
        case "multiplyButton":
            sign = "*";
            num1 = parseFloat(inputInStorage.join(""));
            input = operationButtons[1].buttonValue;
            break;
        case "subtractButton":
            sign = "-";
            num1 = parseFloat(inputInStorage.join(""));
            input = operationButtons[2].buttonValue;
            break;
        case "addButton":
            sign = "+";
            num1 = parseFloat(inputInStorage.join(""));
            input = operationButtons[3].buttonValue;
            break;
        }
        storeInput(input);
        displayInput(input);
        return;
    } else {
        // FOR THE SECOND SIGN WE WILL NEED TO PERFORM THE CALCULATION for previous Sign
        num2 = parseFloat(num2Array.join(""));
        calculateResultBasedOnSign(sign)
        switch (this.id) {
            case "divideButton":
                sign = "/";
                break;
            case "multiplyButton":
                sign = "*";
                break;
            case "subtractButton":
                sign = "-";
                break;
            case "addButton":
                sign = "+";
                break;       
        }
        inputInStorage.push("=");
        inputInStorage.push(result);
        input = sign;
        storeInput(input);
        displayInput(input);
        num1 = result;
        while (num2Array.length > 0) {
            num2Array.pop();
        }
        num2 = null;
        return;

    }

}


function storeInput(input) {
    if (sign === "="){

    } else if (inputInStorage.length < 30) {
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
    if ((inputInStorage.at(-1) === "/") ||
        (inputInStorage.at(-1) === "*") ||
        (inputInStorage.at(-1) === "-") ||
        (inputInStorage.at(-1) === "+") ||
        (inputInStorage.at(-1) === ".")) {
        // if last entry is an input sign already in the array, do nothing.
    } else if (!inputInStorage.at(0)) {
        // if array is empty, do nothing.
    } else if (sign === undefined) {
        // if no operator has been entered yet, do nothing.
    } else {
        num2 = parseFloat(num2Array.join(""));
        calculateResultBasedOnSign(sign);
        inputInStorage.push("=");
        inputInStorage.push(result);
        previousDisplay.textContent = inputInStorage.join("");
        while (inputInStorage.length > 0){
            inputInStorage.pop();
        }
        while (inputInDisplay.length > 0){
            inputInDisplay.pop();
        }
        inputInStorage.push(result);
        inputInDisplay.push(result);
        mainDisplay.textContent = inputInDisplay.join("");
        sign = "=";
    }
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

// ----------- Helper Functions
function calculateResultBasedOnSign(sign) {
    num2 = parseFloat(num2);
    num1 = parseFloat(num1);
    if (sign === "/") {
        result = num1/num2;
    } else if (sign === "*"){
        result = num1*num2;
    } else if (sign === "-") {
        result = num1-num2;
    } else if (sign === "+") {
        
        result = num1+num2;
        
    } else if (sign === "=") {
        // do nothing, and keep the previous result.
    }
    // MAKE RESULT FIT IN THE SCREEN (spaghetti style ;) )
    if (result.toString().length > 10) {
        if (result > 0) {
            switch (true) {
                case (Math.abs(result) < 10):
                    result = result.toFixed(8);
                    break;
                case (Math.abs(result) < 100):
                    result = result.toFixed(7);
                    break;
                case (Math.abs(result) < 1000):
                    result = result.toFixed(6);
                    break;
                case (Math.abs(result) < 10000):
                    result = result.toFixed(5);
                    break;
                case (Math.abs(result) < 100000):
                    result = result.toFixed(4);
                    break;
                case (Math.abs(result) < 1000000):
                    result = result.toFixed(3);
                    break;
                case (Math.abs(result) < 10000000):
                    result = result.toFixed(2);
                    break;
                case (Math.abs(result) < 100000000):
                    result = result.toFixed(1);
                    break;
                case (Math.abs(result) < 10000000000):
                    result = result.toFixed(0);
                    break;
                case (Math.abs(result) >= 10000000000):
                    alert('big numbers like that are scary');
                    resetCalc();
                    break;
            }
        } else if (result < 0) {
            switch (true) {
                case (Math.abs(result) < 10):
                    result = result.toFixed(7);
                    break;
                case (Math.abs(result) < 100):
                    result = result.toFixed(6);
                    break;
                case (Math.abs(result) < 1000):
                    result = result.toFixed(5);
                    break;
                case (Math.abs(result) < 10000):
                    result = result.toFixed(4);
                    break;
                case (Math.abs(result) < 100000):
                    result = result.toFixed(3);
                    break;
                case (Math.abs(result) < 1000000):
                    result = result.toFixed(2);
                    break;
                case (Math.abs(result) < 10000000):
                    result = result.toFixed(1);
                    break;
                case (Math.abs(result) < 1000000000):
                    result = result.toFixed(0);
                    break;
                case (Math.abs(result) >= 1000000000):
                    alert('big numbers like that are scary');
                    resetCalc();
                    break;
            }
        }

    }
    if (result.toString().length > 10) {

    }
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