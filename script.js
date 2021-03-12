//const nameEl = document.querySelector('#name');
//const name = prompt('Hello, what is your name?');

//nameEl.innerHTML = name;

const nameEl = document.querySelector('#name');
const askEl = document.querySelector('#ask');

const askQuestions = function() {
    const name = prompt('Hello, what is your name?');

    nameEl.innerHTML = name;
}

askEl.addEventListener('click', askQuestions);


let body = document.querySelector('body');
let randomNumber = Math.round(Math.random());

if(randomNumber == 0){
    body.classList.add('original');
} else {
    body.classList.add('colorful');
}