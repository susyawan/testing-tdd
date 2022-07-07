const assignments = require("../../storage/models/assignment.model");

const isWeekend = async (req, res) => {
  const result = await assignments.isWeekend();
  res.json({
    data: result,
    error: null,
  });
  res.end();
};

const isLeapYear = async (req, res) => {
  const result = await assignments.isLeapYear();
  res.json({
    data: result,
    error: null,
  });
  res.end();
};

module.exports = {
  isWeekend,
  isLeapYear,
};
