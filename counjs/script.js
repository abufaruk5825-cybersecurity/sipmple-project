const countlable=document.getElementById("countlable");
const rest=document.getElementById("resetbtn");
const decrease=document.getElementById("decbtn");
const increase=document.getElementById("incbtn");
let count=0;

incbtn.onclick=function(){
    count++;
    countlable.textContent=count;
}
decbtn.onclick=function(){
    count--;
    countlable.textContent=count;
}
resetbtn.onclick=function(){
    count=0;
    countlable.textContent=count;
}