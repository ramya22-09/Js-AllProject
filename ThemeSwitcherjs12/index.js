let userval=document.getElementById("uservalue");
let backcon=document.getElementById("bg-contanier");


userval.addEventListener("keydown",Enterval);
function Enterval(event){
    let val=userval.value;
    if (val==="Light" && event.key==="Enter")
        {
       backcon.style.backgroundImage="url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
        }
        else if(val==="Dark"&& event.key==="Enter"){
            backcon.style.backgroundImage="url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";

        }
        else if(event.key==="Enter"){
            alert("Enter a valid value");
        }

        }
     ///////////////////enter value///////////////
     let ele=document.getElementById("enteredvalue"); 
     let listedele=document.getElementById("listedelem");  
      
     ele.addEventListener("keydown",Values);
     function Values(event){
        let list=document.createElement("li");
        
        list.textContent=event.which;
        list.classList.add("ids");
        listedele.appendChild(list);

     }
        
    

