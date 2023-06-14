const express = require("express");
const electionModel = require("../Model/electionModel");

const getAllElects = async (req, res) => {
  try {
    const getElects = await electionModel.find();
    return res.status(200).json({
      message: "get all election successfully",
      data: getElects,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to get all Elects",
    });
  }
};

module.exports = getAllElects();

const creatingElects = async (req, res) => {
  try {
    const { party, votes, voterName, candidateName } = req.body;
    const createElects = await electionModel.create({
      party,
      votes,
      voterName,
      candidateName,
    });
    return res.status(201).json({
      message: "Created elects successfully",
      data: createElects,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to create elects",
    });
  }
};

module.exports = creatingElects();
// const express = require("express");
// const electionModel = require("../Model/electionModel");

// const getAllElects = async (req, res) => {
//   try {
//     const getElects = await electionModel.find();
//     return res.status(200).json({
//       message: "get all election successfully",
//       data: getElects,
//     });
//   } catch (error) {
//     return res.status(404).json({
//       message: "Unable to get all Elects",
//     });
//   }
// };

// module.exports = getAllElects();

// const creatingElects = async (req, res) => {
//   try {
//     const { party, votes, voterName, candidateName } = req.body;
//     const createElects = await electionModel.create({
//       party,
//       votes,
//       voterName,
//       candidateName,
//     });
//     return res.status(201).json({
//       message: "Created elects successfully",
//       data: createElects,
//     });
//   } catch (error) {
//     return res.status(404).json({
//       message: "Unable to create elects",
//     });
//   }
// };

// module.exports = creatingElects();
