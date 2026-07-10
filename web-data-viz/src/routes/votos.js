var express = require("express");
var router = express.Router();
var votoController = require("../controllers/votoController");

router.post("/votar", function (req, res) {
    votoController.votar(req, res);
});
module.exports = router;