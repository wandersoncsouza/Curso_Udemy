<?php

require_once('db.class.php');

$usuario = $_POST['usuario'];
$email = $_POST['email'];
$senha = md5($_POST['senha']);

$objDb = new db();                      //Instancia da classe db()
$link = $objDb->conecta_mysql();        //Execução da função conecta_mysql()

// Verificar se o usuario já existe
$sql = "SELECT * FROM usuarios WHERE usuario = '$usuario'";
if(mysqli_query($link, $sql)){

    mysqli_fetch_array($resultado_id);
}else{
    echo 'Erro ao tentar localizar o registro de usuário';
}





// Verificar se e-mail já existe







$sql = "INSERT INTO usuarios(usuario, email, senha) VALUES ('$usuario', '$email', '$senha')";
//executar a query
if(mysqli_query($link, $sql)){
    echo '<center><h2>Usuário registrado com Sucesso!</h2></center>';
} else{
    echo '<center><h2>Erro ao registrar o usuário</h2></center>';
}


?>