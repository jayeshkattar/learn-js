//Shadowing concept explained below - 
var a = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a, b, c);  // 10 20 30

}
console.log(a); // 10 here also 10 as a is pointing to same global memory space.
// ===============================================================================
let b = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a, b, c); //10 20 30

}
console.log(b); // 100  as both b are in different scope. uses different memory sapce in different EC
// ===============================================================================
//Illegal shawdow - 
let d = 40;
{
  //var d = 50;  //syntax error ; can't do this
}
// ===============================================================================
let e = 40;
{
  let e = 50;  //correct
  console.log(e)
}
console.log(e);
// ===============================================================================
var f = 40;
{
  let f = 50;
  console.log(f);
}
console.log(f);
// ===============================================================================
let g = 40;
function x() {
  var g = 50;  //correct;  since var is function scope
}