const PROBLEMS = [
    'Fix értékű Content-Length header a requestben'
];

const randomProblem = PROBLEMS[ Math.floor(Math.random() * PROBLEMS.length) ];

window.onload = function () {
    document.getElementById('mibajlehet').innerText = randomProblem;
};
