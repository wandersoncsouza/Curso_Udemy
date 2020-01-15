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
    });
    
});