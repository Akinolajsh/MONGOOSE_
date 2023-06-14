const express = require("express");
const carModel = require("../Model/carModel");

const getAllCars = async (req, res) => {
  try {
    const getCars = await carModel.find();
    return res.status(200).json({
      message: "Cars found successfully",
      data: getCars,
    });
  } catch (error) {
    res.status(404).json({
      message: "unable to get all cars",
    });
  }
};
module.exports = getAllCars();

const creatingCars = async (req, res) => {
  try {
    const { model, year, color, make, speed } = req.body;
    const createCars = await carModel.create({
      model,
      year,
      color,
      make,
      speed,
    });
    return res.status(201).json({
      message: "Created car successfully",
      data: createCars,
    });
  } catch (error) {
    res.status(404).json({
      message: "unable to create",
    });
  }
};

module.exports = creatingCars();
// const express = require("express");
// const carModel = require("../Model/carModel");

// const getAllCars = async (req, res) => {
//   try {
//     const getCars = await carModel.find();
//     return res.status(200).json({
//       message: "Cars found successfully",
//       data: getCars,
//     });
//   } catch (error) {
//     res.status(404).json({
//       message: "unable to get all cars",
//     });
//   }
// };
// module.exports = getAllCars();

// const creatingCars = async (req, res) => {
//   try {
//     const { model, year, color, make, speed } = req.body;
//     const createCars = await carModel.create({
//       model,
//       year,
//       color,
//       make,
//       speed,
//     });
//     return res.status(201).json({
//       message: "Created car successfully",
//       data: createCars,
//     });
//   } catch (error) {
//     res.status(404).json({
//       message: "unable to create",
//     });
//   }
// };

// module.exports = creatingCars();
