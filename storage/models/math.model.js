function checkOddEven(num) {
  if (typeof num === "string") {
    throw new Error("n must be a number");
  }
  return num % 2 === 0 ? "even" : "odd";
}

function sum(a, b) {
  return a + b;
}

function getZero() {
  return 0;
}

function is21Century() {
  let year = new Date().getFullYear();
  return year > 2000 && year < 2100 ? true : false;
}

module.exports = {
  checkOddEven,
  sum,
  getZero,
  is21Century,
};
