const PROBLEMS = [
    'Hozzá tudsz férni a GA fájlrendszeréhez XML injection-ön keresztül'
];

const randomProblem = PROBLEMS[ Math.floor(Math.random() * PROBLEMS.length) ];

window.onload = function () {
    document.getElementById('mibajlehet').innerText = randomProblem;
};
