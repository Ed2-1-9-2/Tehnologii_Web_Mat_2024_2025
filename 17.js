function f (...args){

}
a=[1,2,3]
for ( let  i = 0 ; i <a.length ; i++){
console.log(a[i]);
}
for (let element of a ){
    console.log(element);
}
a.forEach(element => {
    console.log(element);

});
let o  = {
    a: 1,
    b: 2
}
for (const property in o){
    console.log(o[property]);
}
let s4 = `
<div>
   somecontent
</div>
`;
console.log(s4);