'use strict';
// document.querySelector('.message').textContent = "Correct Number,now!!";

// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 200;

const x = function(){
    console.log(23);
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = document.querySelector('.guess').value;

    if(!guess){
        document.querySelector('.message').textContent = 'No number!';
    }
});



