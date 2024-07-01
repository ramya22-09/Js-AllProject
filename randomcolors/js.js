 
let bgarray=["red","blue","green" ,"yellow" ,"pink", "white","brown","orange"];
let backgroundcolor=document.getElementById("bgcolor");
backgroundcolor.style.backgroundColor=bgarray[0];
a=Math.ceil(Math.random());

function click1(){
    if(a<=bgarray.length){
        backgroundcolor.style.backgroundColor=bgarray[a];
        a=a+1;
    }
    else{
        backgroundcolor.style.backgroundColor=bgarray[0];
    }
    
}
