var routes = require("express").Router();
const {
  getAllStudents,
  getStudent,
  createStudent,
  deleteStudent,
} = require("../controllers/studentController");
const { createStudentSchema } = require("../validations/students");

routes.get("/get-all-students", getAllStudents);
routes.get("/get-student", getStudent);
routes.post("/create-student", createStudentSchema, createStudent);
routes.delete("/delete-student", deleteStudent);

module.exports = routes;
