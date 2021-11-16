const PROBLEMS = [
    'A WK felveszi Thanost a GBS-hez.'
];

const randomProblem = PROBLEMS[ Math.floor(Math.random() * PROBLEMS.length) ];

window.onload = function () {
    document.getElementById('mibajlehet').innerText = randomProblem;
};
