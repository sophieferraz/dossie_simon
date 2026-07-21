var quizModel = require("../models/quizModel");

function postar(req, res) {
    var pontuacao = req.body.pontuacaoServer;
    var totalPerguntas = req.body.totalPerguntasServer;
    var idUsuario = req.body.idUsuarioServer;

    if (pontuacao == undefined || totalPerguntas == undefined|| idUsuario == undefined) {
        res.status(400).send("Os dados de pontuação, total de perguntas ou usuário estão undefined!");
    } else {
        quizModel.postar(pontuacao, totalPerguntas, idUsuario)
            .then(function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}
function listar(req, res) {
    var idUsuario = req.params.idUsuario;

    quizModel.listar(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma pontuação encontrada!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}
function kpi(req, res){

    quizModel.kpi()
    .then(function(resultado){
        res.json(resultado);
    }).catch(function(erro){
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}
module.exports = {postar, listar, kpi};