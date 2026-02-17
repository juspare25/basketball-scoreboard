let homeScore = 0
let guestScore = 0
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

function add1Guest() {
    guestScore += 1;
    scoreEl2.textContent = guestScore;
}

function add2Guest() {
    guestScore += 2;
    scoreEl2.textContent = guestScore;
}

function add3Guest() {
    guestScore += 3;
    scoreEl2.textContent = guestScore;
}