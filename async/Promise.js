//Promise is an object gives result of asynchronous op - either success or failure
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("got a user")
    resolve({user: 'dravit'})
    reject(new Error("user not logged in"));
  }, 2000);
});

promise
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err.message);
  });
