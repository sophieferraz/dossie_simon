var votoModel = require("../models/votoModel");

function votar(req, res) {
    var voto = req.body.votoServer;
    var idUsuario = req.body.idUsuarioServer;

    if (voto == undefined || idUsuario == undefined) {
        res.status(400).send("Os dados de voto ou usuário estão undefined!");
    } else {
        votoModel.votar(voto, idUsuario)
            .then(function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {votar};