// Fetch api

fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((response) => {
    if (response.status === 200) {
      console.log(response);
      return response.json();
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });


  //We cant use JSON.parse here. we have to  use promise = response.json()