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

export { createTodo };
