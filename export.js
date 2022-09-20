export function getRandomItem(array) {
    const random = getRandomNumber(array.length);
    const item = array[random];
    return item;
}

export function getRandomNumber(choices) {
    return Math.floor(Math.random() * choices);
}

export function renderOpp(opponent) {
    const li = document.createElement('li');
    li.classList.add('opp-card');

    const hp = document.createElement('span');
    hp.classList.add('stat');
    hp.textContent = opponent.hp;

    const image = document.createElement('img');
    image.alt = opponent.type;
    if (opponent.hp < 1) {
        image.src = `assets/splat.png`;
    } else {
        image.src = `assets/${opponent.type}.png`;
    }

    const name = document.createElement('span');
    name.classList.add('name');
    name.textContent = opponent.name;

    li.append(hp, image, name);

    return li;
}
