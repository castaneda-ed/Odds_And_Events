// state
const state = {
    numbers: [],
    oddNumbers: [],
    evenNumbers: [],
    errorNumbers: []
}

// Move the numbers to the even or odd array.

function moveNumber() {
    const number = state.numbers.pop();

    if(number === 0 || number === NaN) {
        state.errorNumbers.push(number)
    }
    else if(number % 2 === 0) {
        state.evenNumbers.push(number)
    }
    else {
        state.oddNumbers.push(number)
    }

    renderInitialNumbers();
}

function moveAllNumbers() {
    while(state.numbers.length > 0) {
        const number = state.numbers.pop()
        if(number === 0 || number === !NaN) {
            state.errorNumbers.push(number)
        }
        else if(number % 2 === 0) {
             state.evenNumbers.push(number)
             }
        else  {
            state.oddNumbers.push(number)
           }
    }

    renderInitialNumbers();
}

function moveInputNumberToBank() {
    const numbersBank = document.querySelector('#numberBank output');
    numbersBank.textContent = state.numbers.join(', ');
}

function generateRandomNum(){
    const randomNumber = Math.floor(Math.random() * 101);
    return randomNumber;
}

// === Render ===

function renderInitialNumbers() {
    const evenNumbersOutput = document.querySelector('#evens output')
    evenNumbersOutput.textContent = state.evenNumbers.join(' ');

    const oddNumbersOutput = document.querySelector('#odds output')
    oddNumbersOutput.textContent = state.oddNumbers.join(' ');
}

// function renderRandomNumbers() {
 
// }

function renderBankNumbers() {
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
       event.preventDefault();
       const numberInput = document.querySelector("#number");
       state.numbers.push(Number(numberInput.value));
       moveInputNumberToBank();
      });

      const generate = document.querySelector('#randomNumber')
      generate.addEventListener('click', () => {
        const randomNumber = generateRandomNum();
        state.numbers.push(randomNumber);
        moveInputNumberToBank();
      })
  

      const sortOne = document.querySelector('#sortOne')
      sortOne.addEventListener('click', () => {
          moveNumber()
      });

      const sortAll = document.querySelector('#sortAll')
      sortAll.addEventListener('click', () => {
        moveAllNumbers()
      });
}


// === Script ===

function render(){
    renderBankNumbers()
    renderInitialNumbers()
}

//Initial render
render()




