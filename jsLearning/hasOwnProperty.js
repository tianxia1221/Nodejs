function Foo() {}
var f1 = new Foo();
f1.a = 10;
Foo.prototype.a = 100;
Foo.prototype.b = 200;
console.log("a:"+ f1.a);
console.log("b:"+ f1.b);
for(var item in f1){
    console.log(item);
}
console.log("hasOwnProperty below:");
for(var item in f1){
    if(f1.hasOwnProperty(item)) {
        console.log(item);
    }
}

//OUTPUT:
// a:10
// b:200
// a
// b
// hasOwnProperty below:
// a