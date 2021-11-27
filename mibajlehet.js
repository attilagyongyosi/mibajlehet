const PROBLEMS = [
    '🌶 Hot Ones est Tsipáéknál 🔥'
];

const randomProblem = PROBLEMS[ Math.floor(Math.random() * PROBLEMS.length) ];

window.onload = function () {
    document.getElementById('mibajlehet').innerText = randomProblem;
};
