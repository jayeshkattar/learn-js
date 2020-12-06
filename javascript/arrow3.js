let obj3 = {
  myVar: "foo",

  myFunc: function () {
    console.log(this.myVar);

    setTimeout(() => {
      console.log(this.myVar); // async fn running in global scope has
    }, 1000);
  },
};
obj3.myFunc()