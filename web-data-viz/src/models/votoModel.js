var database = require("../database/config");

function votar(personagem, idUsuario) {
    var instrucao = `
        INSERT INTO voto (personagem, fk_usuario) VALUES ('${personagem}', ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarUltimosVotos(resposta) {
    var instrucaoSql = `
        SELECT personagem, COUNT(idVoto) as votos FROM voto GROUP BY personagem;
    `;
    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = { votar, buscarUltimosVotos };