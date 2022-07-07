const httpMocks = require("node-mocks-http");
const assignmentHandler = require("../assignment");
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const day = new Date().getDay();
const year = new Date().getFullYear();
const resultDay = weekday[day];
const result = day === 0 || day === 6 ? true : false;
const resultYear =
  year % 4 === 0 && year % 100 !== 0 && year % 400 === 0 ? true : false;

test(`Today is ${resultDay} = ${result}`, async () => {
  const request = httpMocks.createRequest({
    method: "GET",
    url: "/is-weekend",
  });
  const response = httpMocks.createResponse();
  await assignmentHandler.isWeekend(request, response);
  expect(response.statusCode).toEqual(200);
  expect(response._getJSONData()).toEqual({
    data: result,
    error: null,
  });
});

test(`This year is ${year} = ${resultYear}`, async () => {
  const request = httpMocks.createRequest({
    method: "GET",
    url: "/is-leap-year",
  });
  const response = httpMocks.createResponse();
  await assignmentHandler.isLeapYear(request, response);
  expect(response.statusCode).toEqual(200);
  expect(response._getJSONData()).toEqual({
    data: resultYear,
    error: null,
  });
});
