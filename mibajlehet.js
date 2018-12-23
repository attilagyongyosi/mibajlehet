const drinks = [
    'semmi'
];

const randomDrink = drinks[ Math.floor(Math.random() * drinks.length) ];

window.onload = function () {
    document.getElementById('mibajlehet').innerText = randomDrink;
}
