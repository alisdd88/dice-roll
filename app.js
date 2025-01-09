// 🚩
const btn = document.getElementById('roll');
const dice1 = document.getElementById('dice-1');
const dice2 = document.getElementById('dice-2');
const title = document.getElementById('head');

function getRand() {
    // Returns a random integer from 1 to 6:
    var rand = Math.floor(Math.random() * 6) + 1;
    return rand
}

btn.onclick = ()=>{
    var rand1, rand2;
    rand1 = getRand();
    rand2 = getRand();
    dice1.src = `images/dice${rand1}.png`;
    dice2.src = `images/dice${rand2}.png`;
    checkWinner(rand1,rand2)
}


function checkWinner(p1,p2){
    if(p1 > p2){
        title.innerHTML = "🚩 Play 1 Wins!";
    } else if(p2 > p1){
        title.innerHTML = "Player 2 Wins! 🚩";
    } else if (p1 == p2){
        title.innerHTML = "Draw!";
    }
}


