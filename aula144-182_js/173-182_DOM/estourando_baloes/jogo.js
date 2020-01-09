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
    var qtde_baloes = 10;
    cria_baloes(qtde_baloes);

    //Imprimir baloes baloes_inteiros
    document.getElementById('baloes_inteiros').innerHTML = qtde_baloes;
    document.getElementById('baloes_estourados').innerHTML = 0;
}

function cria_baloes(qtde_baloes){

  for(var i = 1; i <= qtde_baloes; i++){
    var balao = document.createElement("img");
    balao.src = 'imagens/balao_azul_pequeno.png';
    balao.style.margin = '10px';

    document.getElementById('cenario').appendChild(balao);
  }
}
