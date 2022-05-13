let difficulty = difficultyChoice();
let memo = [];
let t = 30;
memo = getNumbers(memo, difficulty, t);
let numberOfCards = difficultyChoice2(difficulty);
populateDom(numberOfCards, memo);
const timer = document.getElementById('timer');
const countdown = setInterval (function(){
    timer.innerHTML = `TIMER: ${t}s`;
    t--;
    if (t == 0){
        timer.innerHTML = "";
        clearInterval(countdown);
    }
}, 1000);
setTimeout(function() {
    hideNumbers();
}, 29000);
setTimeout(function() {
    check(memo, numberOfCards);
}, 30000);

// FUNCTIONS //
function populateDom(number, memo){
    for (let i=0; i<number; i++){
        let cont = document.getElementById('container');
        let card = document.createElement('div');
        card.innerHTML = memo[i];
        card.classList.add('card');
        cont.appendChild(card);
    }
}
function getNumbers(array, max ,t){
    while (array.length < t) {
        const randomNumber = Math.floor(Math.random() * max) + 1;
        if (!(array.includes(randomNumber))){
            array.push(randomNumber);
        }
    };
    return array;
};
function difficultyChoice(){
    let level = 0;
    do {
        level = prompt("Seleziona difficoltà: 1 -> Facile; 2 -> Intermedio; 3 -> Difficile");
    } while (isNaN(level) || (!(level == 1) && !(level == 2) && !(level == 3)));
    if (level == 1){
        return 50;
    } else if (level == 2){
        return 80;
    } else if (level == 3){
        return 100;
    }
}
function difficultyChoice2(level){
    if (level == 50){
        return 5;
    } else if (level == 80){
        return 7;
    } else if (level == 100){
        return 10;
    }
}
function check(memo, difficulty){
    let arrayToCheck = [];
    for (let i=0; i<difficulty; i++){
        do{
            arrayToCheck[i] = Number(prompt("Inserisci un numero"));
        } while (isNaN(arrayToCheck[i]));
    };
    let guessedNumbers = [];
    for (let i=0; i<5; i++){
        if (memo.includes(arrayToCheck[i]) && !(guessedNumbers.includes(arrayToCheck[i]))){
            guessedNumbers.push(arrayToCheck[i]);
        }
    }
    alert(`HAI INDOVINATO I SEGUENTI NUMERI: ${guessedNumbers} PER UN PUNTEGGIO DI ${guessedNumbers.length}`);
};
function hideNumbers(){
    document.querySelectorAll('.card').forEach((card) => card.innerHTML = "#?");
};