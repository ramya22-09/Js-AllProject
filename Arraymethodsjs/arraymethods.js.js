console.log("hii");
////Array Methods///////
array1=["ram",1,2,3,4,3];
/// includes////
let val=3;
let v=array1.includes(val);
console.log(v);
////indexOf/////
let index=array1.indexOf(val);
console.log(index);

////lastIndexOf///////
let lastindex=array1.lastIndexOf(val);
console.log(lastindex);
//// Adding elements to front by using unshift method////
array1.unshift(0,1);
console.log(array1)
//// when we assign a varbile it returns length////
let vv=array1.unshift(0);
console.log(vv);
//// removing front ele by using shift////
array1.shift();
console.log(array1);
//// when we assign a varible it returns removed element////
let shiftee=array1.shift();
console.log(shiftee);
///// find////////
let strarray=[23,4.5,'asia',7,'europe'];
let varblie=strarray.find(function(item){
   if(typeof(item)===typeof("string")){
    return true
   }
   else{
    return false
   }
});
console.log(varblie)
//// concat///////
let a1=["a","b"]
let a2=[1,2,3]
let a3=a1.concat(a2);
console.log(a3);
strarray.shift();
console.log(strarray);
console.log(strarray.lastIndexOf(24));
///// sort an array (not correct)/////
let sortarr=[11,2,7,9,0,9]
function sortArray(sortarr){
     return sortarr.sort();
};
let a=sortArray(sortarr);
console.log(a);
 //let sort1=(sortarr.sort());
 //console.log(sort1)
 //console.log(sortarr.sort());

 //// join  method/////joining an array into string////
 console.log(sortarr.join("+"));
 let sttt=['ramya','lavanya','madhu']
 console.log(sttt.join(","));

//// slice for particular peice of array///
let varible1=sortarr.slice(1,5);
console.log(varible1);

/////// indexof//////
let boolarray=[1,4,true,3,false]
let valll=true;
console.log(boolarray.indexOf(valll));
///// find//////////
let boll=boolarray.find(function(i){
    if(typeof(i)===typeof(true)){
        return true;
    }
    else{
        return false;
    }
})
console.log(boll);

//// splice //////
let splicearr=[1,2,3,4]
splicearr.splice(0,2,"a","b");
console.log(splicearr)

//// tostring /////convert an array to strg with commans////
let straa=["ramya","madhu",1];
let stringarr=straa.toString();
console.log(stringarr);
console.log(straa);
///// length/////////
console.log(straa.length);
///// lopping an array/////

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;
for (let i = 0; i < fLen; i++) {
    console.log(fruits[i]);
   
}


////// for each method////

const fruits1 = ["a","b","c","d"];

fruits1.forEach(myFunction);

function myFunction(value) {
  console.log(value)
}

////// at method////// 
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let fruit3 = fruits2.at(2);
console.log(fruit3); //// similar to fruits2[2]/////
//// reverse method////////////////
console.log(straa.reverse());
////////////sort integers//////
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points)
///// max  ele of an array////
let maxv=Math.max(1,2,3);  ///for passing array values
console.log(maxv);
//// min ele of an array////
let minv=Math.min.apply(null,points);
console.log(minv);

const numbers = [45, 4, 9, 16, 25];

numbers.forEach(myFunction);

function myFunction(value) {
    let txt = "";
 console.log(txt += value );
}




