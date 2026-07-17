var express = require("express");
var router = express.Router();
var votoController = require("../controllers/votoController");

router.post("/votar", function (req, res) {
    votoController.votar(req, res);
});
router.get("/ultimos", function (req, res) {
    votoController.buscarUltimosVotos(req, res);
});
module.exports = router;