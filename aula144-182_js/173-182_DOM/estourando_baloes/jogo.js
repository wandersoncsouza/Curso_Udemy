var timerId = null; //variavél que armazena a chamada timeout

function iniciaJogo(){
  //alert('Jogo Iniciado');
  var url = window.location.search;
  //alert(url);

  var nivel_jogo = url.replace("?", "");
  //alert(nivel_jogo);

  var tempo_segundos = 0;

  if(nivel_jogo == 1){
    //1 Fácil -> 120 Segundos
    tempo_segundos = 120;
  }
  if(nivel_jogo == 2){
    //2 Normal -> 60 Segundos
    tempo_segundos = 60;
  }
  if(nivel_jogo == 3){
    //3 Difícil -> 30 Segundos
    tempo_segundos = 30;
  }

    document.getElementById('cronometro').innerHTML = tempo_segundos;
    var qtde_baloes = 60;
    cria_baloes(qtde_baloes);

    //Imprimir baloes baloes_inteiros
    document.getElementById('baloes_inteiros').innerHTML = qtde_baloes;
    document.getElementById('baloes_estourados').innerHTML = 0;

    contagem_tempo(tempo_segundos + 1)

}

function contagem_tempo(segundos){  //Inicio da função de contagem regressiva

    segundos = segundos - 1;        //Decremento do segundo
    if(segundos == -1){             //condição se para limitar a contagem
      clearTimeout(timerId);        //Limpa a variavél timerId
      game_over();                  //Chamada da função game_over
      return false;                 //Condição para parar o loop
    }
    document.getElementById('cronometro').innerHTML = segundos;  //inserir os segundos na pagina HTML
    timerId = setTimeout("contagem_tempo("+segundos+")", 1000);
}

function game_over(){
    alert('Fim de jogo. Você não conseguiu estourar todos os balões a tempo');
}



function cria_baloes(qtde_baloes){

  for(var i = 1; i <= qtde_baloes; i++){
    var balao = document.createElement("img");
    balao.src = 'imagens/balao_azul_pequeno.png';
    balao.style.margin = '10px';
    balao.id = 'b'+i;
    balao.onclick = function(){ estourar(this); }  // Ao clicar chamar a função estourar
    document.getElementById('cenario').appendChild(balao);
  }
}

function estourar(e){
    var id_balao = e.id;
    document.getElementById(id_balao).src = 'imagens/balao_azul_pequeno_estourado.png';
    pontuacao(-1);
}

function pontuacao(acao){
    var baloes_inteiros = document.getElementById('baloes_inteiros').innerHTML;
    var baloes_estourados = document.getElementById('baloes_estourados').innerHTML;

    baloes_inteiros = parseInt(baloes_inteiros);
    baloes_estourados = parseInt(baloes_estourados);

    baloes_inteiros = baloes_inteiros +  acao;
    baloes_estourados = baloes_estourados - acao;

    //alert(baloes_inteiros);
    //alert(baloes_estourados);

    document.getElementById('baloes_inteiros').innerHTML = baloes_inteiros;
    document.getElementById('baloes_estourados').innerHTML = baloes_estourados;

    situacao_jogo(baloes_inteiros);
}

function situacao_jogo(baloes_inteiros){
    if(baloes_inteiros == 0){
      alert('Parabéns! Você conseguiu estourar todos os balões a tempo.');
      parar_jogo();
    }
}

function parar_jogo(){
  clearTimeout(timerId);

}
