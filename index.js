let homeScore = document.getElementById("home-score");
let awayScore = document.getElementById("away-score");   

let home = 0;
let away = 0;

function addOneHome() {
home += 1
homeScore.textContent = home;
}

function addTwoHome() {
home += 2
homeScore.textContent = home;
}
    
function addThreeHome() {
home += 3
homeScore.textContent = home;
}

function addOneAway() {
away += 1
awayScore.textContent = away;
}

function addTwoAway() {
away += 2
awayScore.textContent = away;
}

function addThreeAway() {
away += 3
awayScore.textContent = away;
}

function reset() {
home = 0;
away = 0;
homeScore.textContent = home;
awayScore.textContent = away;
}