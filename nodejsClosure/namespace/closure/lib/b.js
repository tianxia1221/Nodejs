function b() { 
   var i = 222;
   return function() { alert(i); };
}
var b = b();