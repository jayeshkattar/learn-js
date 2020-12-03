for (var i = 0; i <= 10; i++){
    print(i);
}

function print(i) {
    setTimeout(function(){
        console.log(i)
    },2000);
}

function printNumbersForEvery2Sec(n) {
  for (let i = 1; i <= n; i++) {
      setTimeout( () =>{
        console.log(i)
      }, i * 2000)
    }
}
printNumbersForEvery2Sec(10);


