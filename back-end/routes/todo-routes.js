import express from "express";
import Todo from "../model/Todo";

const todoRouter = express.Router();

todoRouter.post("/add", async (req, res, next) => {
  const { todoitem } = req.body;
  let todo;
  try {
    todo = new Todo({
      todoitem,
    });
    await todo.save();
  } catch (err) {
    console.log(err);
  }

  if (!todo) {
    return res.status(500).json({ message: "unable to add  data" });
  }
  return res.status(201).json({ todo });
});

todoRouter.get("/get", async (req, res, next) => {
  let todos;
  try {
    todos = await Todo.find();
  } catch (err) {
    console.log(err);
  }
  if (!todos) {
    return res.status(500).json({ message: "request failed data not found" });
  }
  return res.status(200).json({ todos });
});

todoRouter.put("/update/:id", async (req, res, next) => {
  const id = req.params.id;
  const { todoitem } = req.body;
  let todo;
  try {
    todo = await Todo.findByIdAndUpdate(id, {
      todoitem,
    });
    todo = await todo.save();
  } catch (err) {
    console.log(err);
  }
  if (!todo) {
    return res.status(404).json({ message: "unable to update" });
  } else {
    return res.status(200).json({ todo });
  }
});

todoRouter.delete("/delete/:id", async (req, res, next) => {
  const id = req.params.id;
  let todo;
  try {
    todo = await Todo.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }

  if (!todo) {
    return res
      .status(404)
      .json({ message: "unable to delete by using the id" });
  }

  return res.status(201).json({ message: "item deleted successfully" });
});

export default todoRouter;
