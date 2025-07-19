import todoModel from "../../models/todoModel.js";

const createTodo = async (req, res) => {
  try {
    // Return early if no token user
    const user = req.decodedToken
    //accept todoso
    const { title, description, completed } = req.body;
    //varify totods data
    if (!title || !description) {
      return res.status(400).json({
        status: "fail",
        message: "Title and description are required",
      });
    }
    //varify the completed boolean or not
    if (completed !== undefined && typeof completed !== "boolean") {
      return res.status(400).json({
        status: "fail",
        message: "Completed must be a boolean value",
      });
    }
    //create todo
    const todo = await todoModel.create({
      title,
      description,
      completed,
      user: user.id,
    });
    //send response
    res.status(201).json({
      status: "success",
      message: "Todo created successfully",
      data: todo,
    });



  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

const getTodos = async (req, res) => {
  const user = req.decodedToken;

  try {
    const todos = await todoModel.find({ user: user.id });
    res.status(200).json({
      status: "success",
      data: todos
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message
    });
  }
}

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    //varify the todos data
    if (!title || !description) {
      return res.status(400).json({
        status: "fail",
        message: "Title and description are required",
      });
    }
    //varify the completed boolean or not
    if (completed !== undefined && typeof completed !== "boolean") {
      return res.status(400).json({
        status: "fail",
        message: "Completed must be a boolean value",
      });
    }
    //update the todo
    const todo = await todoModel.findByIdAndUpdate(id, {
      title,
      description,
      completed,
    }, {
      new: true,
      runValidators: true,
    });
    //send response
    res.status(200).json({
      status: "success",
      message: "Todo updated successfully",
      data: todo,
    });

  } catch (error) {
    res.json({
      success: false,
      message: error.message
    })
  }
}

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await todoModel.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).json({
        status: "fail",
        message: "Todo not found",
      });
    }
    res.status(200).json({
      status: "success", 
      message: "Todo deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message
    });
  }
};

    export { createTodo, getTodos, updateTodo, deleteTodo };
