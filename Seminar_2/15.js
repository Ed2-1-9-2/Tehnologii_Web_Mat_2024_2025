let o = {
name: "Jim",
age: 21 + 1 ,
introduce: function(){
console.log('Hello ! I am '+this.name)
}
}

o.introduce()