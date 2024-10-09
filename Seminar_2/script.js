// var , const , int


var x= 0;
const y= 6;
let z = 7;
//x="Ionut";

//console.log(x);
//console.log(y);
//console.log(z);

//y=7;

if(1 != 1 ){
    var a = 0;
    let b = 5;
    console.log(b);


}
//console.log(a);
//console.log(b);


//Operators 

// &
console.log(3+3);
console.log(3-3);
console.log(3+"3");
console.log(3-"3");

console.log(3%3);
console.log(3&3);
console.log(3^3);
// % 
console.log(3+"Ana");
console.log(3-"Ana");

console.log(1+2+3);
console.log(1+"2"+3);
console.log(1+ +"2"+3);

console.log(typeof("2"));
console.log(typeof(+"2"));

let  c = 5;
let d = "5";
if ( c== d ) // Comparatie doar pe valoare
    console.log("Am intrat");
else 
console.log("Nu am intrat")


if ( c=== d ) // Comparatie pe tip si valoare
    console.log("Am intrat");
else 
console.log("Nu am intrat")


let h = false;
if (!h)
 console.log("Fals");

 let e  = null;
 if (!e)
  console.log("Fals");


  let i = "    ".replace;
  if(!i)
     console.log("Fals");

if(null == undefined)
   console.log("egalitate");


// for in = similar cu for clasic
let arr = ["Ionut", "Alex","Mihai"];
for (let i in arr)
  console.log(i);
  console.log(arr)
  console.log(arr[i])
// foreach ( for ( of )) - foreach de js
for(let i of arr)
  console.log(i);
  console.log(arr)
  console.log(arr[i])

let ob = {
    x: 0,
    y: 1
}


arr.push("Octavian");
console.log(arr);
arr.pop("Octavian");
console.log(arr);
arr.push("Octavian");
console.log(arr);
console.log(arr.length);
console.log(arr.concat());

// push - adauga unul sau mai multe elemente intr-un array la final
arr.push("Odie","Keyper");
console.log(arr);
// pop = scoate ultimul element din array
arr.pop();
console.log(arr);

//arr.push("Octavian");
// unshift - adauga unul sau mai multe elemente intr-un array la inceput
arr.unshift("aaaa");
console.log(arr);

// shift - scoate primul element din array
arr.shift();
console.log(arr);

arr.splice(2,0,"Ana");
console.log(arr);

arr.splice(2,3,"Costin","Ioan");
console.log(arr);

arr.forEach((item,index) =>{
 console.log(item + " " + index);
});


//console.log(typeof(2));

//console.log("1"+"2"+"3");
