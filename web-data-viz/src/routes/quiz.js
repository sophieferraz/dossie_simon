var express = require("express");
var router = express.Router();
var quizController = require("../controllers/quizController");

router.post("/postar", function (req, res) {
    quizController.postar(req, res);
});
router.get("/listar/:idUsuario", function (req, res) {
    quizController.listar(req, res);
});
router.get("/kpi", function(req,res){
    quizController.kpi(req,res);
});
module.exports = router;