import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    todoitem: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Todo", todoSchema);
