
let sendbtn=document.getElementById("savebutton");
let statuscode=document.getElementById("stauscode");
let responsedata=document.getElementById("data");

sendbtn.addEventListener("click",geturl);
 
function geturl(){
    let url="https://gorest.co.in/public-api/users";
    let options={
        method:"GET"
    }
    fetch(url,options)
    .then (function(response){
        return response.json();

    })
    .then(function(jsonData){

        console.log(jsonData);
        let {code,data}=jsonData;
       statuscode.textContent=code;
       responsedata.textContent=JSON.stringify(data);
       

    })   
    
}
////////////////////put method //////////////
let textarea=document.getElementById("textarea");
let postbtn=document.getElementById("postbtn");
let requeststaus=document.getElementById("requeststaus");
let responsebody=document.getElementById("responsebody");

postbtn.addEventListener("click",posturl);
 



function posturl(){
    
    let data1=textarea.value ;
    url="https://gorest.co.in/public-api/users";
    let options={
        method:"POST",
    headers:
        {
   'content-type':"application/json",
   Accept:"application/json",
   Authorization:'Bearer bee901123bb8f203410b128fadd80a5dc884f4024184efadd2d127b2ca8605ed'
        },
        body:data1

  };
    fetch(url,options)
    .then(function(response){
        return response.json();


    })
    .then(function (jsondata){
        console.log(jsondata)
        let{code, data}=jsondata;
        requeststaus.textContent=code;
        responsebody.textContent=JSON.stringify(data);

    })
}
// {
//     "name": "Ramya",
//     "email": "ramya@gmail.com",
//     "gender": "female",
//     "status": "Active",
//     }