jsondata='{"greettext":"wishing that the new year will bring joy,love, peace ,and happiness to you.","from":"rahul","to":"varakumar"}';
let greetings=JSON.parse(jsondata);
let fromele=document.getElementById("from");
let toele=document.getElementById("to");
let texxt=document.getElementById("text1");
 
fromele.textContent="From:"+greetings.from;
toele.textContent="To:"+greetings.to;
texxt.textContent=greetings.greettext;
