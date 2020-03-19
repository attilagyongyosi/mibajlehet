const PROBLEMS = [
    'Bezár az Ibolya a koronavírus miatt',
    'Bangladesben tömeges imádkozást szerveznek a koronavírus ellen'
];

const randomProblem = PROBLEMS[ Math.floor(Math.random() * PROBLEMS.length) ];

window.onload = function () {
    document.getElementById('mibajlehet').innerText = randomProblem;
};
