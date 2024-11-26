function computerMove(){
    const randomNumber = Math.random();

    if(randomNumber <= 1/3){
        return 'rock';
    }
    else if(randomNumber <= 2/3){
        return 'paper';
    }
    else{
        return 'scissor';
    }
}
const score = {
    wins: 0,
    losses:0,
    ties:0
}

function playGame(playerMove){
const pickedcomputerMove  = computerMove();
let result='';
if(playerMove === 'rock'){
switch(pickedcomputerMove){
case 'rock':
    score.ties++;
    result='Tie';
    break;
case 'paper':
    score.losses++;
    result='You Lose';
    break;
case 'scissor':
    score.wins++;
    result='You Win';
    break;
}

}
else if(playerMove === 'paper'){
switch(pickedcomputerMove){
case 'rock':
    score.wins++;
    result='You Win';
    break;
case 'paper':
    score.ties++;
    result='Tie';
    break;
case 'scissor':
    score.losses++;
    result='You Lose';
    break;
}
}
else{
switch(pickedcomputerMove){
case 'rock':
    score.losses++;
    result='You Lose';
    break;
case 'paper':
    score.wins++;
    result='You Win';
    break;
case 'scissor':
    score.ties++;
    result='Tie';
    break;
}
}
document.querySelector('.result').innerHTML=result;
document.querySelector('.stat').innerHTML=`You
 <img src="images/${playerMove}.png" alt="">
 <img src="images/${pickedcomputerMove}.png" alt=""> 
 computer`;

document.querySelector('.status').innerHTML = `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;

console.log(score);

}


function resetCount(){
    score.wins=0;
    score.losses=0;
    score.ties=0
    document.querySelector('.status').innerHTML='Wins: 0, Losses: 0, Ties: 0'
}
// let auto
// function autoPlay(){
// au
// }