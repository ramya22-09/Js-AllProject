let firstnumber=document.getElementById("firstnum");
let secoundnumber=document.getElementById("secoundnum");
let add=document.getElementById("addition");

 let finalresult=document.getElementById("result");

 
function restart(){
    let a= parseInt( Math.ceil(Math.random()*100));
let b= Math.ceil(Math.random()*100);
addition=a+b;
add.value="";
firstnumber.textContent=a;
secoundnumber.textContent=b;
   
finalresult.textContent="";
  
}
function check(){

    let userinput=add.value;
    if(addition==userinput){
        finalresult.textContent="Congrats";
        finalresult.style.backgroundColor="green";
    }
    else{
        finalresult.textContent="Please try again";
        finalresult.style.backgroundColor="red";
    }
}