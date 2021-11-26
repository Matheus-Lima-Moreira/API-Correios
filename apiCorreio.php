<?php

//recebendo os dados que foram digitados no formulario 

$cep = filter_input(INPUT_POST, 'cep', FILTER_SANITIZE_STRING);

$url = "http://viacep.com.br/ws/" . $cep . "/json/";

$resultado = json_decode(file_get_contents($url));

$dados = $resultado->logradouro . "," . $resultado->complemento . "," . $resultado->bairro . "," . $resultado->localidade . "," . $resultado->uf;
echo $dados;
