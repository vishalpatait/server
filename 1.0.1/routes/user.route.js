const express = require("express");
const router = express.Router();

const UserCtrl = require("../controllers/user.controller");

const user = new UserCtrl();

router.post("/", user.create);

router.get("/", user.getAll);

module.exports = router;
