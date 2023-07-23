const router = require("express").Router();

const getCloths = require("../controllers/getCloths");

router.route("/getcloths").post(getCloths);

module.exports = router;
