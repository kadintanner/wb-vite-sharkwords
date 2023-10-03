let word;

function setupWord(initWord, element) {
    word = initWord
    word.split('').forEach(() => {
        element.insertAdjacentHTML('beforeend',`<div class="letter-box"></div>`)
    })
}

function isLetterInWord(letter) {
   return word.includes(letter)
}

function revealLetterInWord(letter) {
    let allBoxes = document.querySelectorAll('.letter-box')

    // word.split('')word.forEach((wordletter, index) => {
    //     if (wordLetter === letter) {
    //     allBoxes[index].innerHTML = letter 
    // }
    
    // })
}

export {setupWord, isLetterInWord, revealLetterInWord}
