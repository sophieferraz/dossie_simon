var express = require("express");
var router = express.Router();
var quizControllerController = require("../controllers/quizController");

router.post("/pontuacao", function (req, res) {
    quizController.pontuacao(req, res);
});
// router.get("/ultimos", function (req, res) {
//     votoController.buscarUltimosVotos(req, res);
// });
module.exports = router;