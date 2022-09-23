/* Imports */
import { getRandomItem } from './export.js';
import { renderOpp } from './export.js';
/* Get DOM Elements */
const scoreboard = document.getElementById('score');
const results = document.getElementById('results');
const roachyHP = document.getElementById('roachy-hp');
const roachyPic = document.getElementById('rad');
const newOpponent = document.getElementById('add-opponent-form');
const oppList = document.getElementById('opponent-list');
const sweepButton = document.getElementById('sweep');


/* State */
let player = {
    hp: 20,
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
        name: 'Jarf',
        type: 'crab',
        hp: 6,
    },
    
];

const scorpion = {
    type: 'scorpion',
    hp: 3,
};
const crab = {
    type: 'crab',
    hp: 6,
};
const bloodBug = {
    type: 'blood-bug',
    hp: 2,
};
const rat = {
    type: 'rat',
    hp: 3, 
};
const ant = {
    type: 'ant',
    hp: 2,
};

const roachHit = [0, 1, 1, 1, 2, 2, 3, 3, 3, 3, 4];
const oppHit = [0, 0, 0, 0, 1, 1, 1, 2, 2];
const oppTypes = [ant, ant, ant, rat, rat, bloodBug, bloodBug, crab, crab, crab, scorpion, scorpion];

/* Events */
newOpponent.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(newOpponent);
    const oppType = getRandomItem(oppTypes);

    const opponent = {
        name: formData.get('name'),
        type: oppType.type,
        hp: oppType.hp,
    };
    opponents.push(opponent);

    result = `${opponent.name} the ${opponent.type} is here for violence!`;

    displayOpponents();
    displayResult();

    newOpponent.reset(); 
});

sweepButton.addEventListener('click', () => {
    const alive = [];
    for (const opponent of opponents) {
        if (opponent.hp > 0) {
            alive.push(opponent);
        }
    }
    opponents = alive;
    displayOpponents();
});

function displayResult() {
    results.textContent = result;
}

function displayScoreboard() {
    if (player.hp > 0){
        scoreboard.textContent = `You've squashed ${defeated} opponents. Pam will come back soon!`;
    } else {scoreboard.textContent = 'Final Pam can never die!!!';}
}

function displayRoachy() {
    roachyHP.textContent = Math.max(0, player.hp);
    if (player.hp < 1) {
        roachyPic.src = 'assets/FinalPam.png';
    } else {
        roachyPic.src = 'assets/roachy.png';
    }
}

function displayOpponents() {
    oppList.innerHTML = '';

    for (const opponent of opponents) {
        const opponentEl = renderOpp(opponent);
        oppList.append(opponentEl);

        opponentEl.addEventListener('click', () => {
            if (opponent.hp < 1) {
                result = `You're wasting your energy on that one, Roachy.`;
                displayResult();
                return;
            }
            const roachAttack = getRandomItem(roachHit);
            const oppAttack = getRandomItem(oppHit);
            
            player.hp = Math.max(0, player.hp - oppAttack);
            opponent.hp = Math.max(0, opponent.hp - roachAttack);
            
            result = '';

            if (roachyHP < 1) {
                result += "Pam's Here! ";
                roachyPic.src = 'assets/FinalPam.png';
            }

            if (roachAttack === 0) {
                result += 'Whiffed it, bud. ';
            } else {
                result += `Bonked ${opponent.name} and did ${roachAttack} damage! `;
            }

            if (oppAttack === 0) {
                result += `You dodged ${opponent.name}. Smooth moves Roachy! `;
            } else {
                result += `Watch out! ${opponent.name} got you for ${oppAttack} damage. `;
            }
            if (opponent.hp < 1) {
                defeated++;
                displayScoreboard();
                displayOpponents();
            }

            displayResult();
            displayRoachy();
            displayOpponents();
        });
    }
}
/* Display Functions */
displayRoachy();
displayScoreboard();
displayResult();
displayOpponents();
// (don't forget to call any display functions you want to run on page load!)
