
const button = document.getElementById('colourButton')
const passwordButton = document.querySelector("div.password button");
const members = document.querySelector('.members')
const password = document.querySelector('.password')
let userInput = document.querySelector('#pass');

function random() { return Math.floor(Math.random() * 256)}
    
function colourChangeClick() { 
    const randColour = `rgb(${random()}, ${random()}, ${random()})`;
    button.style.backgroundColor = randColour;
}

function recordClick() {console.log('button clicked');}

function passChecker() {
    let userInput = document.querySelector('#pass');
    console.log(userInput.value);
    if (userInput.value === 'yorkshire') { 
    password.style.display = 'none'; 
    members.style.display = 'inline';
    } 
    return `Incorrect Password` ; 
}

// function recordInput() {
//     let userInput = document.querySelector('#pass');
//     console.log(userInput.value);
//     console.log(passChecker());
//     }



// passwordButton.addEventListener("click", recordClick);
button.addEventListener("click", colourChangeClick);
passwordButton.addEventListener("click", passChecker);





// button.addEventListener("click", recordClick);

