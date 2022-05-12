let difficulty = difficultyChoice();
let memo = [];
let t = 5;
memo = getNumbers(memo, difficulty, t);
console.log(memo);
const countdown = setInterval (function(){
    console.log(t);
    t--;
    if (t == 0){
        clearInterval(countdown);
    }
}, 1000);
setTimeout(function() {
    check(memo);
}, 5000);

// FUNCTIONS //
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
function check(memo){
    let arrayToCheck = [];
    for (let i=0; i<=5; i++){
        do{
            arrayToCheck[i] = Number(prompt("Inserisci un numero"));
        } while (isNaN(arrayToCheck[i]));
        if (memo.includes(arrayToCheck[i])){
            continue;
        } else {
            alert("HAI PERSO!");
            break;
        }
    };
};