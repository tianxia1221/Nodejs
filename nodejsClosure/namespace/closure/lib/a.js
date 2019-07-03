function a() { 
   var i = 111;
   function fun1() { alert(i); }
   return {
       fun1: fun1
   };
}
a = a();

