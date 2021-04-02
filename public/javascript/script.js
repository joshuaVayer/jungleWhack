const monkeys = document.querySelectorAll('.monkey img');
const scoreBoard = document.querySelector('.score');
const start = document.querySelector('.start');
const wrapper = document.querySelector('.start-wrapper');
let lastMonkey;
let timeUp = 0;
let score = 0;

document.addEventListener('mousedown', (e) => e.preventDefault(), false);
start.addEventListener('click', () => startGame())

const randomTime = (min, max) => Math.round(Math.random() * (max - min) + min);

const startGame = () => {
    wrapper.classList.add('playing')
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 10000)
}
const randomMonkey = (monkey) => {
    const idx = Math.floor(Math.random() * monkey.length);
    const currentMonkey = monkey[idx];
    if (currentMonkey === lastMonkey) {
        return randomMonkey(monkey);
    }
    lastMonkey = currentMonkey;
    return currentMonkey;
}
const peep = () => {
    const time = randomTime(500, 1500);
    const monkey = randomMonkey(monkeys);
    monkey.style.display = 'block';
    setTimeout(() => {
        monkey.style.display = 'none';
        (!timeUp) ? peep() : wrapper.classList.remove('playing');
    }, time);
}
monkeys.forEach(monkey => monkey.addEventListener('click', 
    bonk = () => {
    monkey.style.display = 'none';
    score++;
    scoreBoard.textContent = score; 
    } 
));

