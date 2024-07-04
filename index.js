let colorOne = document.getElementById("color-a");
let colorTwo = document.getElementById("color-b");
let currentDirection = 'to bottom';
let outputCode = document.getElementById("code");

/**
 * Sets the direction value and updates the active button.
 * @param {string} value - The direction value.
 * @param {HTMLElement} _this - The button element.
 */
function setDirection(value, _this) {
    let direcrtions = document.querySelectorAll(".buttons button");
    for (let i of direcrtions) {
        i.classList.remove("active");
    }
    _this.classList.add("active");
    currentDirection = value;
}

/**
 * Generates the CSS code for a linear gradient background and applies it to the body element.
 */
function generateCode() {
    outputCode.value = `background-image: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
    document.getElementsByTagName("BODY")[0].style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
}

/**
 * Copies the text from the outputCode element to the clipboard.
 */
function copyText() {
    outputCode.select();
    document.execCommand('copy');
    alert("Gradient Copied!");
}


generateCode();
