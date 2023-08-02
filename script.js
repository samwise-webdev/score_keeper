const matches = document.querySelector('#matches');
const btnP1 = document.querySelector('#btnP1');
const btnP2 = document.querySelector('#btnP2');
const score1 = document.querySelector('#p1');
const score2 = document.querySelector('#p2');
const reset = document.querySelector('#reset');

let winningScore = 5;

btnP1.addEventListener('click', function p1Point() {
    score1.innerText = Number(score1.innerText) + 1;
}); //add a point to player 1

btnP2.addEventListener('click', function p2Point() {
    score2.innerText = Number(score2.innerText) + 1;
}); //add a point to player 2

reset.addEventListener('click', function (e) {
    score1.innerText = 0;
    score2.innerText = 0;
}) //reset the scores to 0

//Colt's Way:

// let p1Score = 0;
// btnP1.addEventListener('click', function () {
//     p1Score += 1;
//     p1.textContent = p1Score;
// })
// let p2Score = 0;
// btnP2.addEventListener('click', function () {
//     p2Score += 1;
//     p2.textContent = p2Score;
// })