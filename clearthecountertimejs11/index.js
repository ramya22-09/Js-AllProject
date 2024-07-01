let countervalue=document.getElementById("counterrval");
let btttn=document.getElementById("btn");
let value=0;
let uniqueId= setInterval(function(){
    countervalue.textContent=value;
    value=value+1;

},1000);
 btttn.addEventListener("click",function(){
    countervalue.textContent="";
    clearInterval(uniqueId);

 })

 /////////////custom range counter//////
 let fromvalue=document.getElementById("fromvalue");
 let tovalue=document.getElementById("tovalue");
 let output=document.getElementById("output");
 let buttonn=document.getElementById("start");
     buttonn.addEventListener("click",function(){
        let i=parseInt(fromvalue.value);
        let t=parseInt(tovalue.value);
        if(i===""||t===""){
     alert("please enter value");
        }

        let unq= setInterval(function(){
                if(i<=t){
                output.textContent=i; 
                   i=i+1;
                }
                else{
                    clearInterval(unq);
                }
                
    
            },1000);
        
        
            
        }
     );
/////////////////////////peace timer///////////////////
let twentybtn=document.getElementById("twentyseconbtn");
let thertyseconbtn=document.getElementById("thertyseconbtn");
let fortyseconbtn=document.getElementById("fortyseconbtn");
let onesecbtn=document.getElementById("onesecbtn");
let text=document.getElementById("text");
let timerId;

function clearPriviousTime(){
    clearInterval(timerId);
}


twentybtn.addEventListener("click",function(){
    secondsleft=20;
    clearPriviousTime();
    setTimerAndshow();
});

thertyseconbtn.addEventListener("click",function(){
    secondsleft=30;
    clearPriviousTime();
    setTimerAndshow();
});
 
fortyseconbtn.addEventListener("click",function(){
    secondsleft=40;
    clearPriviousTime();
    setTimerAndshow();
});

onesecbtn.addEventListener("click",function(){
    secondsleft=60;
    clearPriviousTime();
    setTimerAndshow();
});
function setTimerAndshow(){
    //text.textContent=secondsleft+"seconds left";
    timerId=setInterval(counting,1000)
    
}
function counting(){
    if(secondsleft === 0){
        clearPriviousTime();
        text.textContent="your moment is complete";

    }else{
        text.textContent=secondsleft+"seconds left";
        secondsleft=secondsleft-1;
    }
}

////////////get user by using js////////////http requst/////
