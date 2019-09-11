const drinks = [	const problems = [
    'semmi',	    'EU Staging Downsizing'
    'nem sok',	
    'kérdezd babót',	
    'hozz egy sört'	
];	];


const randomDrink = drinks[ Math.floor(Math.random() * drinks.length) ];	const randomProblem = problems[ Math.floor(Math.random() * problems.length) ];

window.onload = function () {	window.onload = function () {
    document.getElementById('mibajlehet').innerText = randomDrink;	    document.getElementById('mibajlehet').innerText = randomProblem;
}
