function ParentType(a){
    this.a=a
    this.doParent = function(){
        console.log('doing parent stuff with a ' + this.a);
    } 
}
function ChildType(b){
    this.b=b
    this.doChild = function(){
        console.log('doing child stuff with b' + this.b);

    }
}

ChildType.prototype = new ParentType();

o1.ParentType();
o2.ChildType();