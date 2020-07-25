const PROBLEMS = [
    '2-t fizet 3-at kap Somlói Cornus pálinka'
];

const randomProblem = PROBLEMS[ Math.floor(Math.random() * PROBLEMS.length) ];

window.onload = function () {
    document.getElementById('mibajlehet').innerText = randomProblem;
};
