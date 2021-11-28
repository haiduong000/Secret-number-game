'use strict';

/* Lesson 1 : What is DOM ? and DOM manipulation ?
DOM là sự kết nối giữa Javascript và HTML and CSS,
DOM dùng để liên kết các attribute của HTML and CSS 
- Document như là một cánh cửa đầu vào dẫn đến => DOM dùng để lựa chọn phần tử của HTML,
- DOM là một phiên bản hoàn thiện nhất của HTML 

// Chọn một element trong js cũng giống như trong css
console.log(document.querySelector('.message').textContent);
// thay thế text content
document.querySelector('.message').textContent = 'Correct number !';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '10';
// input thì dùng value
document.querySelector('.guess').value = 19;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
// lắng nghe action : click
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
        //When there is no input
    if(!guess) {
        // document.querySelector('.message').textContent = 'No number!';
       displayMessage('No number!');
        //When player wins
    } else if(guess === secretNumber) {
        displayMessage('Yes,you are right!');
        // change CSS style 
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if(score > hightScore) {
            hightScore = score;
            document.querySelector('.highscore').textContent = hightScore;
        }
    } 
     // When guess is wrong
    else if(guess !== secretNumber) {
        if(score > 1) {
            displayMessage(guess < secretNumber ? 'Too low!' :'too high!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
    // When guess is too low
    // else if(guess < secretNumber) {
    //     if(score > 1) {
    //         document.querySelector('.message').textContent = 'Too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game!'
    //         document.querySelector('.score').textContent = 0;
    //     }
    //     // When guess is too high
    // }else if(guess > secretNumber){
    //     if(score > 1) {
    //         document.querySelector('.message').textContent = 'too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = 'You lost the game!'
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

document.querySelector('.again').addEventListener('click', function() {
   let score = 20;
   displayMessage('Start guessing...');
   document.querySelector('.score').textContent = score;
   secretNumber = Math.trunc(Math.random() * 20) + 1;
   document.querySelector('.guess').value = '';
   document.querySelector('.number').textContent = '?';
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.width = '15rem';
})

