const express = require("express");

const router = express.Router();
const patAPI = require("../../../controllers/api/v1/patient");

router.post("/register", patAPI.register);
router.get("/patients/:id/all_reports",patAPI.allReportsOfPatient)
router.get("/patients/:status",patAPI.allReportsOfStatus)


module.exports = router;
