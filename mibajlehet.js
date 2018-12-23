const drinks = [
    'semmi',
    'nem sok',
    'kérdezd babót',
    'hozz egy sört'
];

const randomDrink = drinks[ Math.floor(Math.random() * drinks.length) ];

window.onload = function () {
    document.getElementById('mibajlehet').innerText = randomDrink;
}
