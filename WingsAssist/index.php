<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "wingsassistabc123@gmail.com"; // Aquí debes colocar tu dirección de correo
    $subject = "Nuevo mensaje de formulario de contacto";
    $body = "Nombre: $name\nCorreo: $email\n\nMensaje:\n$message";

    $headers = "no-reply@tudominio.com"; // Coloca tu dominio

    if (mail($to, $subject, $body, $headers)) {
        echo "¡Gracias por tu mensaje!";
    } else {
        echo "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.";
    }
}
?>
