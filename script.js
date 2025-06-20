console.log("Welcome to Tic Tac Toe");

let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isGameOver = false;

let reset = document.getElementById('reset');

const changeTurn = () => {
    return turn === "X" ? "0" : "X";
};

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ];

    wins.forEach(e => {
        if (
            boxtext[e[0]].innerText !== '' &&
            boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[1]].innerText === boxtext[e[2]].innerText
        ) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won";
            isGameOver = true;
            gameover.play();

            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px';
            const line = document.querySelector(".line");
            line.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            line.style.width = "20vw";
            line.style.display = "block";
        }
    });
};

music.play();

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !isGameOver) {
            boxtext.innerText = turn;
            audioTurn.play();
            checkWin();
            if (!isGameOver) {
                turn = changeTurn();
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });
});

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isGameOver = false;
    document.querySelector('.info').innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px';

    // Properly reset the line
    const line = document.querySelector(".line");
line.style.display = "none";
line.style.width = "0";
line.style.transform = "none";
line.style.left = "0";
line.style.top = "0";

});
