const express = require("express");
const todoModel = require("../Model/todoModel");

const getAllTask = async (req, res) => {
  try {
    const getTask = await todoModel.find();
    return res.status(200).json({
      message: "Task successfully retrieved",
      data: getTask,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to get all tasks",
    });
  }
};

module.exports = getAllTask();

const creatingTask = async (req, res) => {
  try {
    const { title, description, date, complete } = req.body;
    const createTask = await todoModel.create({
      title,
      description,
      date,
      complete,
    });
    return res.status(201).json({
      message: "Task created successfully",
      data: createTask,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to create tasks",
    });
  }
};

module.exports = creatingTask();
// const express = require("express");
// const todoModel = require("../Model/todoModel");

// const getAllTask = async (req, res) => {
//   try {
//     const getTask = await todoModel.find();
//     return res.status(200).json({
//       message: "Task successfully retrieved",
//       data: getTask,
//     });
//   } catch (error) {
//     return res.status(404).json({
//       message: "Unable to get all tasks",
//     });
//   }
// };

// module.exports = getAllTask();

// const creatingTask = async (req, res) => {
//   try {
//     const { title, description, date, complete } = req.body;
//     const createTask = await todoModel.create({
//       title,
//       description,
//       date,
//       complete,
//     });
//     return res.status(201).json({
//       message: "Task created successfully",
//       data: createTask,
//     });
//   } catch (error) {
//     return res.status(404).json({
//       message: "Unable to create tasks",
//     });
//   }
// };

// module.exports = creatingTask();
