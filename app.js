let listaNumeroSorteado = [];
let numeroLimite = 100;
let secretN = gerarNumeroAleatorio()
let tentativas = 1;

function exibirNaTela(tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function exibirTextoInicial() {
exibirNaTela('h1' , 'Jogo do Número Secreto');
exibirNaTela('p' , 'Escreva um número de 0 a 100');
}

exibirTextoInicial();

function verificarChute() {
    let palpite = document.querySelector ('input').value;
    
    if(palpite == secretN){
      exibirNaTela('h1', 'Na Mosca!');
      let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativas';
      let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}.`;
      exibirNaTela('p', mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (palpite > secretN){
            exibirNaTela('p', 'O número secreto é menor');
        } else {
            exibirNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * 100 +1); 
    let quantidadeDeElementosNaLista = listaNumeroSorteado.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaNumeroSorteado = [];
    }
    if (listaNumeroSorteado.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumeroSorteado.push(numeroEscolhido);
        console.log(listaNumeroSorteado);
        return numeroEscolhido;
    }
}

function limparCampo() {
    palpite = document.querySelector ('input');
    palpite.value = '';
}

function reiniciarJogo(){
    secretN = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled');
}