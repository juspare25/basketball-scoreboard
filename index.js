let homeScore = 0
let awayScore = 0
let scoreEl1 = document.getElementById("score-el1");
let scoreEl2 = document.getElementById("score-el2");

function add1Home() {
    homeScore += 1
    scoreEl1.textContent = homeScore;
}

function add2Home() {
    homeScore += 2;
    scoreEl1.textContent = homeScore;
}

function add3Home() {
    homeScore += 3;
    scoreEl1.textContent = homeScore;
}

function add1Away() {
    awayScore += 1;
    scoreEl2.textContent = awayScore;
}

function add2Away() {
    awayScore += 2;
    scoreEl2.textContent = awayScore;
}

function add3Away() {
    awayScore += 3;
    scoreEl2.textContent = awayScore;
}