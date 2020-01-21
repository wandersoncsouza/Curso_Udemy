var rodada = 1;
var matriz_jogo = Array(3);

//matriz para controle do jogo

matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;

// fim da matriz de controle

$(document).ready( function(){

    $('#btn_iniciar_jogo').click( function(){
        
        if ($('#entrada_apelido_jogador1').val() == ''){
            alert('O apelido do primeiro jogador não foi informado.');
            return false;
        }
        if ($('#entrada_apelido_jogador2').val() == ''){
            alert('O apelido do segundo jogador não foi informado.');
            return false;
        }


        //exibir nomes infomados
        $('#nome_jogador1').html($('#entrada_apelido_jogador1').val());
        $('#nome_jogador2').html($('#entrada_apelido_jogador2').val());

        $('#pagina_inicial').hide();
        $('#palco_jogo').show();

        var njogador1 = $('#entrada_apelido_jogador1').val();
        alert('O jogador '+njogador1+' deve começar a partida.');


    });


    $('.jogada').click( function(){
    
        var id_campo_clicado = this.id;
        $('#'+id_campo_clicado).off();
        jogada(id_campo_clicado);
    });

    function jogada(id){
        var icone = '';
        var ponto = 0;

        if ((rodada % 2) == 1) {
            icone = 'url("imagens/marcacao_1.png")';
            ponto = -1;
        } else {
            icone = 'url("imagens/marcacao_2.png")';
            ponto = 1;
        }
        rodada++;

        $('#'+id).css('background-image', icone);

        var linha_coluna = id.split('');

        matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;

        verifica_combinacao();
    }

   function verifica_combinacao(){
       var pontos = 0;
       for (var i = 1; i <= 3; i++){
           pontos = pontos + matriz_jogo['a'][i];
       }
       ganhador(pontos);

       pontos = 0;
       for (var i = 1; i <= 3; i++) {
           pontos = pontos + matriz_jogo['b'][i];
       }
       ganhador(pontos);

       pontos = 0;
       for (var i = 1; i <= 3; i++) {
           pontos = pontos + matriz_jogo['c'][i];
       }
       ganhador(pontos);

       //verifica na vertical

       for(var l = 1; l <= 3; l++){
           pontos = 0;
           pontos += matriz_jogo['a'][1];
           pontos += matriz_jogo['b'][1];
           pontos += matriz_jogo['c'][1];

           ganhador(pontos);
       }

       // verifica na diagonal

       pontos = 0;
       pontos = matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3];
       ganhador(pontos);

       pontos = 0;
       pontos = matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1];
       ganhador(pontos);

   }

   function ganhador(pontos){
       if(pontos == -3){
           var namejogador1 = $('#entrada_apelido_jogador1').val();
           alert('O jogador ' + namejogador1 + ' é o vencedor.');
           $('.jogada').off();

       } else if(pontos == 3){
           var namejogador2 = $('#entrada_apelido_jogador2').val();
           alert('O jogador ' + namejogador2 + ' é o vencedor.');
           $('.jogada').off();
       }
   }
    
});