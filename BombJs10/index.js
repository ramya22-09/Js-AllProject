let enteredvalu=document.getElementById("entervalue");
let countedvalu=document.getElementById("number");
let value=10;
 let uniqueId=setInterval(function(){
        value=value-1; 
    countedvalu.textContent=value;
    if(value===0){
        countedvalu.textContent="Bomb!!";
        clearInterval(uniqueId);
    }


},1000)

function defuse(event){
    let defusetext=enteredvalu.value;
    //console.log(defusetext);
    //console.log(event.key);
    if( event.key==="Enter"&& defusetext==="defuse"  && value!==0){
          
     countedvalu.textContent="you did it"
     clearInterval(uniqueId);
    }
}


 enteredvalu.addEventListener("keydown",defuse);
