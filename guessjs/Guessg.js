 
 
 let inputvalue=document.getElementById("inputtext");
 let gameresult=document.getElementById("gameresult");
 let randomnum=Math.ceil(Math.random()*100);
 
 
 function onCheck(){
   let guessnum = parseInt(inputvalue.value);
   
if(guessnum>randomnum){
    gameresult.textContent = "Too High! Try Again";
    gameresult.style.backgroundColor="#1e217c";

}
else if(guessnum<randomnum){
    gameresult.textContent = "Too Low! Try Again";
    gameresult.style.backgroundColor="black";

}
else if(guessnum==randomnum){


    gameresult.textContent = "Congrats you win the game";
    gameresult.style.backgroundColor="green";

}
else{
    gameresult.textContent = "pls enter a proper num";
    gameresult.style.backgroundColor="#1e217c";

}
}

