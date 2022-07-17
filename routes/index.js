var express = require("express");
var router = express.Router();
const lecture = require("../controller/lectures");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Be-wise" });
});

router.get("/lectures", function (req, res, next) {
  lecture.getAllLectures(req, res);
});
//router.get("/lectures", lecture.allLectures);

module.exports = router;
