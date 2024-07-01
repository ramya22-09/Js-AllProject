   let imagewidth=document.getElementById("imgwidth");
 let mainimageee=document.getElementById("mainimage");
 let warningmesssage=document.getElementById("warningmessage");
 let originalimagewidth=200;
 let imagemaxwidth=300;
 let imageminwidth=100;
 let imagewidthmaxwarning="too big decrease the size";
 let imageminwidthwarning="too low increase the size";
 mainimageee.style.width= originalimagewidth+"px";
 imagewidth.textContent=originalimagewidth+"px";


function decrement(){
   if(originalimagewidth<=imageminwidth){
      warningmesssage.textContent=imageminwidthwarning;
   }
   else{

      warningmesssage.textContent=" ";
      originalimagewidth=originalimagewidth-5;
      let updatedimagewidth= originalimagewidth+"px";
      mainimageee.style.width=updatedimagewidth;
      imagewidth.textContent=updatedimagewidth;
   
   }
}
function increment(){

   if(originalimagewidth>=imagemaxwidth){
      warningmesssage.textContent=imagewidthmaxwarning;
     
   }
   else{

      warningmesssage.textContent=" ";
      originalimagewidth=originalimagewidth+5;
      let updatedimagewidth= originalimagewidth+"px";
      mainimageee.style.width=updatedimagewidth;
      imagewidth.textContent=updatedimagewidth;
   
   }
   

}