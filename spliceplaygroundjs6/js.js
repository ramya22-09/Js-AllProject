let text1=document.getElementById("text1");
 let text2=document.getElementById("text2");
 let text3=document.getElementById("text3");

 let mainarry=document.getElementById("array1");
 let array=[1,2,3,4,5]
 let jsarray=JSON.stringify(array);
 
 let parsearray=JSON.parse(jsarray);
  mainarry.textContent=jsarray;
 


 let savebtn=document.getElementById("savebtn");

    function  savebtnchange(){
        let stindex= (text1.value);
        console.log(stindex);
        let deletec= (text2.value);
        let itemadd= text3.value;
    //let modifearr=mainarry.value;
     // let vasu= modifearr.splice(stindex,deletec,itemadd);
     array.splice(stindex,deletec,itemadd);
    //array[stindex]=itemadd;
    mainarry.textContent=JSON.stringify(array);
    

        }

savebtn.onclick=function(){
    savebtnchange();
}
 

