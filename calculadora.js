// VARIABLES
let TEXTO = document.getElementById("TEXTO");

let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");



// FUNCIONES 

const Insert0 = () => {
    TEXTO.innerHTML += "0";
};

const Insert1 = () => {
    TEXTO.innerHTML += "1";
};

const Insert2 = () => {
    TEXTO.innerHTML += "2";
};

const Insert3 = () => {
    TEXTO.innerHTML += "3";
};

const Insert4 = () => {
    TEXTO.innerHTML += "4";
};

const Insert5 = () => {
    TEXTO.innerHTML += "5";
};

const Insert6 = () => {
    TEXTO.innerHTML += "6";
};

const Insert7 = () => {
    TEXTO.innerHTML += "7";
};

const Insert8 = () => {
    TEXTO.innerHTML += "8";
};

const Insert9 = () => {
    TEXTO.innerHTML += "9";
};


// EVENTOS 

btn1.onclick = function () {
    Insert1();
};
btn2.onclick = function () {
    Insert2();
};
btn3.onclick = function () {
    Insert3();
};
btn4.onclick = function () {
    Insert4();
};
btn5.onclick = function () {
    Insert5();
};
btn6.onclick = function () {
    Insert6();
};
btn7.onclick = function () {
    Insert7();
};
btn8.onclick = function () {
    Insert8();
};
btn9.onclick = function () {
    Insert9();
};
btn0.onclick = function () {
    Insert0();
};


