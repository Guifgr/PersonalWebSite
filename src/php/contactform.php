<?php

    
    $Nome = iconv('UTF-8', 'ISO-8859-1//TRANSLIT//IGNORE', $_POST['nome']);
    $Sobrenome = iconv('UTF-8', 'ISO-8859-1//TRANSLIT//IGNORE', $_POST['sobrenome']);
    $Email = iconv('UTF-8', 'ISO-8859-1//TRANSLIT//IGNORE', $_POST['email']);
    $Telefone = iconv('UTF-8', 'ISO-8859-1//TRANSLIT//IGNORE', $_POST['telefone']);
    $Message = iconv('UTF-8', 'ISO-8859-1//TRANSLIT//IGNORE', $_POST['message']);
    
    $mailTo = "guifgr@hotmail.com";
    $headers = "De: ".$Email;
    $subject = "Novo email recebido no seu site!";
    $txt = "Voce recebeu um email de: ".$Nome." ".$Sobrenome.".\n\nA pergunta foi:\n".$Message."\n\nSeus dados sao:\nTelefone: ".$Telefone."\nEmail:".$Email;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: https://guifgr.com/?send=1 ");
?>