<?php

require_once('db.class.php');

$usuario = $_POST['usuario'];
$email = $_POST['email'];
$senha = md5($_POST['senha']);

$objDb = new db();                      //Instancia da classe db()
$link = $objDb->conecta_mysql();        //Execução da função conecta_mysql()

// Verificar se o usuario já existe
$sql = "SELECT * FROM usuarios WHERE usuario = '$usuario'";
if($resultado_id = mysqli_query($link, $sql)){
    
    $dados_usuario = mysqli_fetch_array($resultado_id);
    
    if(isset($dados_usuario['usuario'])){
        echo '<h2>Usuário já cadastrado. Tente outro!</h2>';
    }else{
        echo '<h2>Usuário não cadastrado ainda</h2>';
    }

}else{
    echo 'Erro ao tentar localizar o registro de usuário';
}

// Verificar se e-mail já existe
$sql = "SELECT * FROM usuarios WHERE email = '$email'";
if($resultado_id = mysqli_query($link, $sql)){

    $dados_usuario = mysqli_fetch_array($resultado_id);

    if(isset($dados_usuario['email'])){
        echo '<h2>email já cadastrado</h2>';
    } else {
        echo '<h2>email não cadastrado ainda</h2>';
    }
} else {
    echo '<h2>Erro ao tentar localizar o registro de email</h2>';
}




die();

$sql = "INSERT INTO usuarios(usuario, email, senha) VALUES ('$usuario', '$email', '$senha')";
//executar a query
if(mysqli_query($link, $sql)){
    echo '<center><h2>Usuário registrado com Sucesso!</h2></center>';
} else{
    echo '<center><h2>Erro ao registrar o usuário</h2></center>';
}


?>