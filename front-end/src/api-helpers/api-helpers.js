import axios from "axios";

export const getAllTodos = async () => {
  const res = await axios
    .get("http://localhost:3000/todo/get")
    .catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("no data");
  }
  const data = await res.data;
  return data;
};

export const addTodo = async () => {
  const res = await axios
    .post("http://localhost:3000/todo/post")
    .catch((err) => console.log(err));

    if(res.status !==201){
      return console.log("unable to add task")
    }

    const data = await res.data;
    return data;
};
