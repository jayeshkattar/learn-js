const GetUserToDo = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("could not find resource: " + resource);
      }
    });
    request.open("GET", resource);
    request.send();
  });
};

// GetUserToDo("Todos/dravit2020.json").then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

//Chain promises Method1
GetUserToDo("Todos/dravit2019.json")
  .then((data) => {
    console.log("Promise 1 resolve: ", data);
    return GetUserToDo("Todos/dravit2020.json");
  })
  .then((data) => {
    console.log("Promise 2 resolve: ", data);
  })
  .catch((err) => {
    console.log(err);
  });

// Using promise.all
const promise1 = GetUserToDo("Todos/dravit2019.json");
const promise2 = GetUserToDo("Todos/dravit2020.json");

Promise.all([promise1, promise2])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
