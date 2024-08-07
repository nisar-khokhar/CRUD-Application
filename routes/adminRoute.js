var routes = require("express").Router();
const {
  getAllAdmins,
  getAdmin,
  createAdmin,
  deleteAdmin,
} = require("../controllers/adminController");
const { createAdminSchema } = require("../validations/admin");

routes.get("/get-all-admins", getAllAdmins);
routes.get("/get-admin", getAdmin);
routes.post("/create-admin", createAdminSchema, createAdmin);
routes.delete("/delete-admin", deleteAdmin);

module.exports = routes;
