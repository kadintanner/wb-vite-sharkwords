
import './style.css';
import getRandomWord from './src/randomWord';
import setSharkImage from './src/sharkImage';
import {setupWord, isLetterInWord, revealLetterInWord} from './src/word';


document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

const initSharkwords = () => {
  let numWrong = 0;
  const word = getRandomWord();
  revealLetterInWord(word[0])
  setupWord(word, document.querySelector('#word-container'));
  setSharkImage(document.getElementById('shark-img'), numWrong)
  // for debugging:
  console.log(document.getElementById('shark-img'))
  console.log(`[INFO] Correct word is: ${word}`);
  console.log(isLetterInWord(word[0]), '(should be true)');
  console.log(isLetterInWord('1'), '(should be false)');
};


initSharkwords();


