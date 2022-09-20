/* Imports */

/* Get DOM Elements */
const scoreboard = document.getElementById('score');
const results = document.getElementById('results');
const roachyHP = document.getElementById('roachy-hp');
const roachyPic = document.getElementById('rad');
const newOpponent = document.getElementById('add-opponent-form');
const oppList = document.getElementById('opponent list');
const sweepButton = document.getElementById('sweep');


/* State */
let player = {
    hp: 0,
    // type: roach,
};

let result = '';
let defeated = 0;

let opponents = [
    {
        name: 'Stabby',
        type: 'scorpion',
        hp: 3,
    },
    
    {
        name: 'Sheldon',
        type: 'crab',
        hp: 4,
    },
    
    {
        name: 'Skeeter',
        type: 'blood bug',
        hp: 2,
    },
];

const scorpion = {
    type: 'scorpion',
    hp: 3,
};
const crab = {
    type: 'crab',
    hp: 4,
};
const bloodBug = {
    type: 'blood bug',
    hp: 2,
};
const rat = {
    type: 'rat',
    hp: 2,
};
const ant = {
    type: 'ant',
    hp: 2,
};

const roachHit = [0,1,1,1,2,2,3,3,3,3,4];
const oppHit = [0,0,0,0,1,1,1,2,2];
const oppType = [ant, ant, ant, rat, rat, bloodBug, bloodBug, crab, crab, crab, scorpion, scorpion];

/* Events */
function displayResult() {
    results.textContent = result;
}

function displayScoreboard() {
    scoreboard.textContent = "You've squashed ${squashed} opponents. Pam will come back soon!";
}

function displayRoachy() {
    roachyHP.textContent = Math.max(0, player.hp);
    if (player.hp < 1) {
        roachyPic.src = 'assets/deadRoachy.png'
    } else {
        roachyPic.src = 'assets/roachy.png';
    }
}

function displayOpponents() {
    oppList.innerHTML = '';

}
/* Display Functions */
displayRoachy();
// (don't forget to call any display functions you want to run on page load!)
