const httpMocks = require("node-mocks-http");
const assignmentHandler = require("../assignment");
const assignmentModel = require("../../../storage/models/assignment.model");
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
const resultYear = year % 4 === 0 && year % 100 !== 0 && year % 400 === 0 ? true : false;

jest.mock("../../../storage/models/assignment.model", () => {
  return {
    isWeekend: jest.fn(),
    isLeapYear: jest.fn(),
  };
});

test(`[mock] Today is ${resultDay} = true`, async () => {
  const request = httpMocks.createRequest({
    method: "GET",
    url: "/is-weekend",
  });
  const response = httpMocks.createResponse();
  assignmentModel.isWeekend.mockResolvedValue('Nothing');
  await assignmentHandler.isWeekend(request, response);
  expect(response.statusCode).toEqual(200);
  expect(response._getJSONData()).toEqual({
    data: 'Nothing',
    error: null,
  });
});

test(`[mock] This year is ${year} = true`, async () => {
  const request = httpMocks.createRequest({
    method: "GET",
    url: "/is-leap-year",
  });
  const response = httpMocks.createResponse();
  assignmentModel.isLeapYear.mockResolvedValue('Not found');
  await assignmentHandler.isLeapYear(request, response);
  expect(response.statusCode).toEqual(200);
  expect(response._getJSONData()).toEqual({
    data: 'Not found',
    error: null,
  });
});
