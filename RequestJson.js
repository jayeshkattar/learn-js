const UserTodos = (resource, callback) => {
  const xht = new XMLHttpRequest();
  xht.addEventListener("readystatechange", () => {
    // console.log(xht, xht.readyState);
    if (xht.readyState === 4 && xht.status === 200) {
      const data = JSON.parse(xht.responseText);
      callback({}, data);
    } else if (xht.readyState === 4) {
      callback({ message: "could not fetch data." }, {});
    }
  });
  xht.open("GET", resource);
  xht.send();
};

// Callback hell
UserTodos("Todos/dravit2020.json", (err, data) => {
  console.log(data);
  UserTodos("Todos/dravit2019.json", (err, data) => {
    console.log(data);
  });
});
