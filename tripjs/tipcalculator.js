let billamount=document.getElementById("billamount");
let percentagetip=document.getElementById("percentagetip");
let amount =document.getElementById("tipamount");
let total=document.getElementById("total");
let erorr=document.getElementById("error");
let errormessagetobedisplayed="please enter a num";


function calculate(){
    
 document.getElementById("calculate").style.backgroundColor="red";
 let billinput=billamount.value;
 let perinput=percentagetip.value;
 if(billinput===" "){
    erorr.textContent=errormessagetobedisplayed;
 }
 else if(perinput===" "){
   
    erorr.textContent=errormessagetobedisplayed;
 }
 else{
   erorr.textContent="";
    let bill=parseInt(billinput);
    let percentage=parseInt( perinput);
    let tiptotal=(percentage/100)*bill;
    let total1=tiptotal+bill;
    amount.value=tiptotal;
    total.value=total1;
   
 }
 
    }
     