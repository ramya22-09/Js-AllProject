  /**console.log("hello ramya");
console.log("hello vasu");
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`);
  rl.close();
});   **/


/* printing the values one by one
let array=['orange',25,100, true,33.45];
console.log(array);
let index=0;
console.log(array[index]);
for (i=0;i<array.length;i++){
  console.log(array[index]);
  index=index+1;
}*/


/*taking index from user in node
   let array1=['ramya',23,24,false, 'hello']
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`enter index `, index => {
  console.log(parseInt(index));
  console.log(array1[index]);
  rl.close();
});  */
// update the value
/* let array2=['ramya',23,24,false, 'hello']
 array2[0]=2;
 console.log(array2);
 console.log(array2.length);
 array2.push("true");
 console.log(array2);
 const fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.push("Kiwi");
 console.log(fruits);
 fruits.pop();
 console.log(fruits);
*/

// calling a function
/*
let a=5;
let b=5;
function add(a,b){
   let add=a+b;
return add;
}
 console.log(add(a,b));

function message(){
  return "hello everyone"
  
}
 console.log(message());

let a=4;
let b=2;
function average(){
   c=(a+b)/2;
  return c;
}
console.log(average());

 let person ={
  name:"ramya",
  model:"c-class",
  manufactures:"diamler ac company",
  length:"4686mm",
  "cargo capaciity":"12.6 cublic feet"

 }
 console.log(person);
 let person={
title:"bahuballi",
director:"rajamouli",
producers:['sobhu','ragavendra','prasad'],
"leadactors with theire roles":{ 
  prabhas:'bahubali',
  anushka:'devasena',

}
 }
 console.log(person);
 console.log(person.title);
 console.log(person["director"]);
 console.log(person["producers"]);
 let name="name";
 let val="ram";
 //person["name"]=val;
 //console.log(person);
 person.name=val;
 console.log(person);
 
let array=[2,3,4];
let sum=0;
for(i=0;i<array.length;i++){
    sum=sum+array[i];
}
console.log(sum);*/
 let a=5;
 let b=3;
 let c=4;
 let array1=[a,b,c];
 console.log(array1);