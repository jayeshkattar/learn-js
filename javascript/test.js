
function test() {
    var list = [0, 1, 2, 3, 4];
    for (i = 0; i < list.length; i++) {
      list[i] = function () {
        return i;
      };
    }
    return list;
  }
  //f = return i
  //i = 5 
  //function is invoked from this. i passed as closures
  // list = [f, f, f, f, f]
  var temp = test();
  console.dir(temp[0]());
  console.dir(temp[1]());
  
  
  
  function x() {
      if(true) {
      let  q="xyz";
      }
      console.log(q);
      }
       
  x();
  
  