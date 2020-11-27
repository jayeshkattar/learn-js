// this is always a window object in where ever you access 'this' remains to window object.
// this - global scope.
var x = 1;
a();
function a() {
  var x = 2;
  console.log(x, this.x);
  var y = 4;
  b();
  function b() {
    //var x = 3;
    console.log(x, this.x, y);
    var z = 5;
    c();
    function c() {
      console.log(this.x, x, y, z);
    }
  }
}


function test() {
  if (true) {
    let name = "xyz";
  }
  console.log(name);
}
test()

function test1() {
  if (true) {
    var q = "xyz";
  }
  console.log(q);
}
test1()

