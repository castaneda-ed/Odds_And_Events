// state
const state = {
    numbers: [],
    oddNumbers: [],
    evenNumbers: [],
    errorNumbers: []
}
function addToBank(num) {
    state.numbers.push(num)
}

function moveNumber() {
    const number = state.numbers.pop();

    if(number === 0 || isNaN(number)) {
        state.errorNumbers.push(number)
    }
    else if(number % 2 === 0) {
        state.evenNumbers.push(number)
    }
    else {
        state.oddNumbers.push(number)
    }
}

function moveAllNumbers() {
    while(state.numbers.length > 0) {
        const number = state.numbers.pop()
        if(number === 0 || isNaN(number)) {
            state.errorNumbers.push(number)
        }
        else if(number % 2 === 0) {
             state.evenNumbers.push(number)
             }
        else  {
            state.oddNumbers.push(number)
           }
    }
}


function generateRandomNum(){
    const randomNumber = Math.floor(Math.random() * 101);
    return randomNumber;
}

// === Render ===

function renderNumbers(numbers, sectionId) {
    const $numbers = numbers.map((num) => {
        const $number = document.createElement("span");
        $number.textContent = num;
        return $number;
    })
    const $output = document.querySelector(`#${sectionId} output`)
    $output.replaceChildren(...$numbers)
}


// === Script ===

function render(){
    renderNumbers(state.numbers, 'numberBank');
    renderNumbers(state.oddNumbers, 'odds');
    renderNumbers(state.evenNumbers, 'evens');
}


//Initial render
render();

    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
       event.preventDefault();
       const $numberInput = document.querySelector("#number");
       const input = Number($numberInput.value);

       if(input.length === 0 || isNaN(input)) {
        console.error('You must input a number');
        return;
      }

      addToBank(input)
      render()
    });

const generate = document.querySelector('#randomNumber')
generate.addEventListener('click', () => {
  const randomNumber = generateRandomNum();
  addToBank(randomNumber)
  render()
})

  

const sortOne = document.querySelector('#sortOne')
sortOne.addEventListener('click', () => {
    moveNumber()
    render()
});


const sortAll = document.querySelector('#sortAll')
sortAll.addEventListener('click', () => {
    while(state.numbers.length > 0){  
        moveAllNumbers()
}
render()
});





