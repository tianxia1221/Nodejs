//normal
//console.log("--------------non-closer---------------");
for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },100);
}
//console.log("--------------closer 1---------------");
for(var i=0;i<4;i++){
    setTimeout((function(i){
        console.log(i);
    })(i),100);
}
//console.log("--------------closer 2---------------");
for(var i=0;i<5;i++){
    setTimeout(fun(i),100);
}
function fun(i){
    console.log(i);
}