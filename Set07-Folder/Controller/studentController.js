const express = require("express");
const studentModel = require("../Model/studentModel");

const getAllStudent = async (req, res) => {
  try {
    const getStudents = await studentModel.find();
    return res.status(200).json({
      message: "Get students successfully",
      data: getStudents,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Could not get all students data",
    });
  }
};

module.exports = getAllStudent();

const creatingStudent = async (req, res) => {
  try {
    const { name, age, isMale, course } = req.body;
    const createStudent = await studentModel.create({
      name,
      age,
      isMale,
      course,
    });
    return res.status(201).json({
      message: "Student created successfully",
      data: createStudent,
    });
  } catch (error) {
    return res.status(404).json({
      message: "could not create student data",
    });
  }
};

module.exports = creatingStudent();
// const express = require("express");
// const studentModel = require("../Model/studentModel");

// const getAllStudent = async (req, res) => {
//   try {
//     const getStudents = await studentModel.find();
//     return res.status(200).json({
//       message: "Get students successfully",
//       data: getStudents,
//     });
//   } catch (error) {
//     return res.status(404).json({
//       message: "Could not get all students data",
//     });
//   }
// };

// module.exports = getAllStudent();

// const creatingStudent = async (req, res) => {
//   try {
//     const { name, age, isMale, course } = req.body;
//     const createStudent = await studentModel.create({
//       name,
//       age,
//       isMale,
//       course,
//     });
//     return res.status(201).json({
//       message: "Student created successfully",
//       data: createStudent,
//     });
//   } catch (error) {
//     return res.status(404).json({
//       message: "could not create student data",
//     });
//   }
// };

// module.exports = creatingStudent();
