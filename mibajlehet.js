const problems = [
    'EU Staging Downsizing'
];

const randomProblem = problems[ Math.floor(Math.random() * problems.length) ];

window.onload = function () {
    document.getElementById('mibajlehet').innerText = randomProblem;
}
