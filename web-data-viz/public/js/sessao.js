// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

function info_b(){
    info_bronwyn.innerHTML = `<span><p>É a aluna perfeita e o orgulho do colégio Bayview High, focada obsessivamente em manter notas impecáveis e construir o currículo ideal para entrar numa universidade de prestígio. No entanto, por trás da fachada de estudante exemplar, ela carrega a enorme pressão das expectativas familiares e esconde um segredo académico que poderia arruinar todo o seu futuro promissor.</p></span>`
}
function info_n(){
    info_nate.innerHTML = `<span><p>É o clássico "garoto problema" da escola, conhecido por todos pela sua má reputação e por estar atualmente em liberdade condicional devido ao envolvimento com o tráfico de substâncias ilícitas. Vindo de um contexto familiar completamente desestruturado e marcado pelo abandono, ele vive à margem das regras do colégio e lida diariamente com os preconceitos e a desconfiança de toda a comunidade escolar.</p> </span>`
}
function info_a(){
    info_addy.innerHTML = `<span><p>É a garota popular, bonita e invejada do colégio, cuja vida social e identidade parecem girar inteiramente em torno do seu namoro com o atleta mais popular da escola. Contudo, esta imagem de "vida perfeita" esconde uma profunda dependência emocional e um segredo pessoal que, caso venha a público, destruirá por completo o seu estatuto social e o seu círculo de amizades.</p></span>`
}
function info_c(){
    info_cooper.innerHTML = `<span><p>É o astro da equipa de beisebol da escola, um talento nato que atrai os olhares de grandes olheiros e tem uma carreira desportiva multimilionária quase garantida. Pressionado constantemente pelo pai para ser o melhor em tudo, ele vive sufocado por ter de esconder uma parte profundamente íntima e pessoal da sua vida, temendo que a verdade destrua o seu futuro no desporto e a relação com a família.</p></span>`
}
function info_s(){
    info_simon.innerHTML = `<span><p>Dotado de uma capacidade de observação afiada e um humor ácido, ele canaliza a sua frustração criando um aplicativo voltado para expor a vida íntima e as falhas dos estudantes mais populares. Simon posiciona-se como um crítico da hipocrisia escolar, orgulhando-se de ser aquele que enxerga as verdades por trás das aparências e das reputações perfeitas que os seus colegas tentam manter a todo o custo.</p></span>`
}


