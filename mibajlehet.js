const PROBLEMS = [
    'PingFederate 10 upgrade az univerzum legnagyobb Navigator regressionje közben'
];

const randomProblem = PROBLEMS[ Math.floor(Math.random() * PROBLEMS.length) ];

window.onload = function () {
    document.getElementById('mibajlehet').innerText = randomProblem;
};
