const matches = document.querySelector('#matches');
const btnP1 = document.querySelector('#btnP1');
const btnP2 = document.querySelector('#btnP2');
const score1 = document.querySelector('#p1');
const score2 = document.querySelector('#p2');
const reset = document.querySelector('#reset');

let winningScore = 5;

btnP1.addEventListener('click', function p1Point() {
    let currentScore1 = parseInt(score1.innerText);  //making sure score1 is a number
    if (currentScore1 !== winningScore) {
    score1.innerText = currentScore1 + 1;
    }
}); //add a point to player 1

btnP2.addEventListener('click', function p2Point() {
    let currentScore2 = parseInt(score2.innerText); //making sure score2 is a number
    if (currentScore2 !== winningScore) {
    score2.innerText = currentScore2 + 1;
    }
}); //add a point to player 2

reset.addEventListener('click', function (e) {
    score1.innerText = 0;
    score2.innerText = 0;
}) //reset the scores to 0

//Colt's Way:

        // let p1Score = 0;
        // let p2Score = 0;

        // btnP1.addEventListener('click', function () {
        //     if (p1Score !== winningScore) {
        //         p1Score += 1;
        //         p1.textContent = p1Score;
        //     }
        // })

        // btnP2.addEventListener('click', function () {
        //     if (p2Score !== winningScore) {
        //         p2Score += 1;
        //         p2.textContent = p2Score;
        //     }
        // })