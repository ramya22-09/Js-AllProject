let array=[17,31,77,20,63]
let mainarray=document.getElementById("mainarray");
let jsarray=JSON.stringify(array);
mainarray.textContent=jsarray;

let data=document.getElementById("enternum");
let save=document.getElementById("savebtn");
let finaldata=document.getElementById("finaldata");

//   function savechange(){
//     let enterdat= data.value;
    
//     console.log(enterdat);
//        array.findIndex(function checking(enterdat){
//       let b=false;
//         for(i=0;i<array.length;i++){
            
//            if( array[i]=== parseInt(enterdat)){
                  
//             finaldata.textContent=i;
//            }
//            else{
//             return false;
//            }
//         }
//     })
//     // finaldata.textContent=indexe


   
//  save.onclick=function(){
//     savechange();
//  }

//////////////////////////////////////////////////////
function savechanges(){
    let uservalue=data.value ;
    let itemindex=array.findIndex(function(eachItem){
        if(eachItem === parseInt(uservalue)){
            return true;
        }
        else{
            return false;
        }
    }); 
    ///////////for find method//////////////////////
    if(itemindex===undefined){
        finaldata.textContent="not found";
    }
    else{
    
    finaldata.textContent=itemindex;
    }
}
save.onclick=function(){
    savechanges();
}


 

   
     
