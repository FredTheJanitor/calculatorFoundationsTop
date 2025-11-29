// instead of cramming input into weird small functions...
// lets lean into javascript's internal calculation system which works fine.

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