let ativo = false;
let contador = 0;

function mudarTexto() {
    const mensagem = document.getElementById("mensagem");
    const contadorTexto = document.getElementById("contador");
    const card = document.getElementById("card");
    const detalhes = document.getElementById("detalhes");
    const roadmap = document.getElementById("roadmap");
    const botao = document.getElementById("botaoInteracao");
    const statusTag = document.getElementById("statusTag");
    const techs = document.querySelectorAll(".techs span");

    contador++;

    if (contador === 1) {
        contadorTexto.innerText = "Você clicou 1 vez";
    } else {
        contadorTexto.innerText = "Você clicou " + contador + " vezes";
    }

    if (!ativo) {
        mensagem.innerText = "Portfólio ativado com interação real.";
        botao.innerText = "Ocultar detalhes";
        detalhes.classList.remove("oculto");
        card.classList.add("ativo");
        roadmap.classList.remove("oculto");
        statusTag.classList.add("ativo");
        statusTag.innerText = "Disponível para oportunidades";

        techs.forEach(function(tech) {
            tech.classList.add("ativo");
        });

        ativo = true;
    } else {
        mensagem.innerText = "Desenvolvedora front-end em formação";
        botao.innerText = "Ver interação";
        detalhes.classList.add("oculto");
        roadmap.classList.add("oculto");
        card.classList.remove("ativo");
        statusTag.classList.remove("ativo");
        statusTag.innerText = "Front-end Developer in Progress";

        techs.forEach(function(tech) {
            tech.classList.remove("ativo");
        });

        ativo = false;
    }
}