import './style.css';
import Game from './score.js';

const newGame = new Game();

const scoreContainer = document.querySelector('.list');
const refresh = document.querySelector('.refresh');
const submit = document.querySelector('.submit');
const name = document.querySelector('#name');
const score = document.querySelector('#score');

const showScores = async () => {
  const data = await newGame.AllScore();
  for (let i = 0; i < data.length; i += 1) {
    const scoreList = document.createElement('li');
    scoreList.classList.add('list0');
    scoreList.innerHTML = `${data[i].user}: ${data[i].score}`;
    scoreContainer.appendChild(scoreList);
  }
};

refresh.addEventListener('click', () => {
  scoreContainer.innerHTML = '';
  showScores();
});

submit.addEventListener('click', () => {
  newGame.AddScore({ user: name.value, score: score.value });
  name.value = '';
  score.value = '';
});

window.addEventListener('load', () => {
  showScores();
});
