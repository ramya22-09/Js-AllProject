let clickedbtn=document.getElementById("clicckedbtn");
let count=document.getElementById("clockele");
 
function  onCount(){
    let countvalue=count.textContent;
    localStorage.setItem("counterv",countvalue); 

let getcountvalue=localStorage.getItem("counterv");
let finalv= parseInt(getcountvalue)+1;
count.textContent=finalv;
}

clickedbtn.onclick=function(){
    onCount();
}