var routes = require("express").Router();
const {
  getAllTeachers,
  getTeacher,
  createTeacher,
  deleteTeacher,
} = require("../controllers/teacherController");
const { createTeacherSchema } = require("../validations/teachers");

routes.get("/get-all-teachers", getAllTeachers);
routes.get("/get-teacher", getTeacher);
routes.post("/create-teacher", createTeacherSchema, createTeacher);
routes.delete("/delete-teacher", deleteTeacher);

module.exports = routes;
