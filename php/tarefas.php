<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Gerenciador de tarefas</title>
</head>
<body>
    <h1>Gerenciador de tarefas</h1>
    <form action="">
        <fieldset>
            <legend>Nova tarefa</legend>
            <label>Tarefa:
            <input type="text" name="nome" />
            </label>
            <input type="submit" value="Cadastrar"/>
        </fieldset>
    </form>
    <?php
    //    if (isset($_GET['nome'])){
    //        echo "O Nome informado foi:". $_GET['nome'];
    //    }
        $lista_tarefas = array();
        if (isset($_GET['nome'])){
            $_SESSION['lista_tarefas'][] = $_GET['nome'];
        }

        $lista_tarefas = array();

        if(isset($_SESSION['lista_tarefas'])){
            $lista_tarefas = $_SESSION['lista_tarefas'];
        }
    ?>
    <table>
        <tr>
            <th>Tarefas</th>
        </tr>
        <?php foreach ($lista_tarefas as $tarefa) { ?>
            <tr>
                <td><?php echo $tarefa; ?></td>
            </tr>
        <?php } ?>
    </table>
</body>
</html>