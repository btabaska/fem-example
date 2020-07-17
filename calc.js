let currentNumber = 0;
const elementToChange = document.querySelector('.answer');
let savedNumber = 0;
let mathMethod = ""
let justRan = false

function main() {
    document.querySelector('.button-container').addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            if (!isNaN(event.target.innerText)) {
                if (currentNumber == "0") {
                    setZero(event.target.innerText)
                } else {
                    setNumber(event.target.innerText)
                }
            } else if (event.target.innerText === "C") {
                clear()
            } else if (event.target.innerText === "+") {
                addition()
            } else if (event.target.innerText == "-") {
                subtraction()
            } else if (event.target.innerText == "x") {
                multiplication()
            } else if (event.target.innerText == "%") {
                division()
            } else if (event.target.innerText == "=") {
                equals()
            } else if (event.target.innerText == "Del") {
                del()
            }
            
            //alert(`You clicked on button ${event.target.innerText}`);
            
        }
        //event.stopPropagation()
    });
}

function setNumber(number) {
    if (justRan) {
        currentNumber = ""
        justRan = false
    }
    currentNumber += number
    elementToChange.innerText = currentNumber;
}

function setZero(number) {
    currentNumber = number
    elementToChange.innerText = currentNumber;
}

function clear() {
    currentNumber = "0"
    elementToChange.innerText = currentNumber;
}

function addition() {
    savedNumber = currentNumber;
    currentNumber = 0;
    mathMethod = "+"

}

function subtraction() {
    savedNumber = currentNumber;
    currentNumber = 0;
    mathMethod = "-"
}

function division() {
    savedNumber = currentNumber;
    currentNumber = 0;
    mathMethod = "%"
}

function multiplication() {
    savedNumber = currentNumber;
    currentNumber = 0;
    mathMethod = "x"
}

function equals() {
    firstNum = parseInt(savedNumber)
    secondNum = parseInt(currentNumber)
    if (mathMethod == "+") {
        currentNumber = firstNum + secondNum
    } else if (mathMethod == "-") {
        currentNumber = firstNum - secondNum
    } else if (mathMethod == "%") {
        currentNumber = firstNum % secondNum
    } else if (mathMethod == "x") {
        currentNumber = firstNum * secondNum
    }
    elementToChange.innerText = currentNumber
    justRan = true
}

function del() {
    currentNumber = currentNumber.toString()
    currentNumber = currentNumber.slice(0, -1)
    elementToChange.innerText = currentNumber;
}


main()
