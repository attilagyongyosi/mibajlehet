const PROBLEMS = [
    'Bezár az Ibolya a koronavírus miatt'
];

const randomProblem = PROBLEMS[ Math.floor(Math.random() * PROBLEMS.length) ];

window.onload = function () {
    document.getElementById('mibajlehet').innerText = randomProblem;
};
