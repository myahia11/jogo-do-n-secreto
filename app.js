let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function  mostrarNaTela (tag, texto) {
    let bglh = document.querySelector(tag);
    bglh.innerHTML = texto;
    responsiveVoice.speak( texto , 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial() {
  mostrarNaTela ('h1','jogo do numero secreto');
  mostrarNaTela ('p','escolhe um numero de 1 a 4 nessa porra');
  
}

exibirMensagemInicial();

function verificarChute () {
    let chute = document.querySelector('input').value;
    
    if (chute==numeroSecreto) {
      mostrarNaTela ('h1', ' Acertou!');
      let palavraTentativa = tentativas> 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
      mostrarNaTela ('p',mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
      if (chute > numeroSecreto){
        mostrarNaTela('p', `o numero e menor que ${chute}`);
      }else  {
        mostrarNaTela('p', `o numero secreto e maior que ${chute}`);
      } 
      tentativas++;
      limparCampo();
    }

}

function gerarNumeroAleatorio() {
  let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio(); 
    } else {
      listaDeNumerosSorteados.push(numeroEscolhido);
      console.log(listaDeNumerosSorteados);
      return numeroEscolhido;
    }
}

function limparCampo() {
  chute = document.querySelector ('input');
  chute.value = '';
  
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disable', true);
  
}