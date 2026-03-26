let ativo = false;
let contador = 0;

function mudarTexto() {

    const mensagem = document.getElementById("mensagem");
    const contadorTexto = document.getElementById("contador");

    // contador
    contador++;

    let textoClique;

    if (contador === 1) {
        textoClique = "Você clicou 1 vez";
    } else {
        textoClique = "Você clicou " + contador + " vezes";
    }

    contadorTexto.innerText = textoClique;

    // toggle mensagem
    if (!ativo) {
        mensagem.innerText = "Você clicou no botão!";
        ativo = true;
    } else {
        mensagem.innerText = "Futura desenvolvedora front-end";
        ativo = false;
    }
}