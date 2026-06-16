const rollaDie = document.getElementById("rollbtn");
const lable1 = document.getElementById("lable1");
const lable2 = document.getElementById("labl22");
const lable3 = document.getElementById("lable3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

rollbtn.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    lable1.textContent = randomNum1;
    lable2.textContent = randomNum2;
    lable3.textContent = randomNum3;
}
let username=window.prompt("this is a roll number")