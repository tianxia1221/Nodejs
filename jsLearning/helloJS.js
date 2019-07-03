/**
 * Created by tiaxia on 12/6/2016.
 */
function fn(x,y){
    return x+y;
}

var fn1 = new Function("x", "y", "return x+y;");
console.log(fn1(5,6));

//test webstrom git




