const getUserTodo = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todo/1/");
  if (response.status === 404) {
    throw new Error("Not found");
  } else if (response.status === 200) {
    const data = await response.json();
    return data;
  }
};

getUserTodo()
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));
