var database = require("../database/config");

function postar(pontuacao, totalPerguntas, idUsuario) {
    var instrucao = `
        INSERT INTO quiz
(pontuacao, total_perguntas, data_tentativa, fk_usuario)
VALUES
('${pontuacao}','${totalPerguntas}', NOW(), '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function listar(idUsuario) {
    var instrucaoSql2 = `
SELECT
idResultado,
pontuacao
FROM quiz
WHERE fk_usuario = '${idUsuario}'
ORDER BY idResultado;    `;
    console.log("Executando SQL: \n" + instrucaoSql2);
    return database.executar(instrucaoSql2);
}
function kpi() {
    var instrucao = `
     SELECT COUNT(*) AS quantidade
        FROM quiz
        WHERE pontuacao >= total_perguntas * 0.7;
    `;
    console.log("Executando SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {postar, listar, kpi};