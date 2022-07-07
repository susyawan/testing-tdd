function isWeekend() {
  let days = new Date().getDay();
  return days === 0 || days === 6;
}

function isLeapYear() {
  let year = new Date().getFullYear();
  return year % 4 === 0 || (year % 100 !== 0 && year % 400 === 0);
}

module.exports = {
  isWeekend,
  isLeapYear,
};
