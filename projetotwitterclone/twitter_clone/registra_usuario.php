<?php

require_once('db.class.php');

$usuario = $_POST['usuario'];
$email = $_POST['email'];
$senha = $_POST['senha'];

$objDb = new db();
$link = $objDb->conecta_mysql();

$sql = "INSERT INTO usuarios(usuario, email, senha) VALUES ('$usuario', '$email', '$senha')";
//executar a query
if(mysqli_query($link, $sql)){
    echo '<center><h2>Usuário registrado com Sucesso!</h2></center>';
} else{
    echo '<center><h2>Erro ao registrar o usuário</h2></center>';
}


?>