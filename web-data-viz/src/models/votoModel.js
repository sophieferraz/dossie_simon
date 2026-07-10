var database = require("../database/config");

function votar(personagem, idUsuario) {
    var instrucao = `
        INSERT INTO voto (personagem, fk_usuario) VALUES ('${personagem}', ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = { votar};