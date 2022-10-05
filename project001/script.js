'use strict';
// document.querySelector('.message').textContent = "Correct Number,now!!";

// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 200;

const x = function(){
    console.log(23);
}

const number = Math.trunc(Math.random() * 20) +1;
document.querySelector('.number').textContent = number;



document.querySelector('.check').addEventListener('click', function(){
    const guess = document.querySelector('.guess').value;
    console.log(guess, typeof guess);
    if(!guess){
        document.querySelector('.message').textContent = 'No number!';
    }
});




