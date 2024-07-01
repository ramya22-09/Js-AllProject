let counterElement = document.getElementById("counterValue");
 
function decrease(){
let previousElement =counterElement.textContent;
let updatedElement  = parseInt(previousElement)-1;
counterElement.textContent =updatedElement ;
if(updatedElement<0){
document.getElementById("counterValue").style.color="red";
    
}
else if(updatedElement>0){
    document.getElementById("counterValue").style.color="green";
    
}
else{
    document.getElementById("counterValue").style.color="black";
     
}
}
function onIncrement(){
    let previousElement =counterElement.textContent;
    let updatedElement  = parseInt(previousElement)+1;
    counterElement.textContent =updatedElement ;
    document.getElementById("counterValue").style.color="green";
    if(updatedElement<0){
        document.getElementById("counterValue").style.color="red";
            
        }
        else if(updatedElement>0){
            document.getElementById("counterValue").style.color="green";
            
        }
        else{
            document.getElementById("counterValue").style.color="black";
             
        }
    
}
function reset(){
    let updatedElement=0;
    counterElement.textContent =updatedElement ;
    document.getElementById("counterValue").style.color="black";
    if(updatedElement<0){
        document.getElementById("counterValue").style.color="red";
            
        }
        else if(updatedElement>0){
            document.getElementById("counterValue").style.color="green";
            
        }
        else{
            document.getElementById("counterValue").style.color="black";
             
        }


}