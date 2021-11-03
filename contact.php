<?php
if (isset($_POST['Email'])) {

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "antiquita@gmail.com";
    $email_subject = "Messaggio da Sito Antiquita";

    function problem($error)
    {
        echo "E' stato riscontrato un errore nel form che hai compilato. ";
        echo "L'errore è:<br><br>";
        echo $error . "<br><br>";
        echo "Torna indietro e modifica l'errore.<br><br>";
        die();
    }

    // validation expected data exists
    if (
        !isset($_POST['Name']) ||
        !isset($_POST['Email']) ||
        !isset($_POST['Tel']) ||
        !isset($_POST['Message'])
    ) {
        problem('Ci sono dei problemi:');
    }

    $name = $_POST['Name']; // required
    $email = $_POST['Email']; // required
    $tel = $_POST['Tel']; // required
    $message = $_POST['Message']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email)) {
        $error_message .= "L'indirizzo mail che hai inserito non è valido.<br>";
    }

    $string_exp = "/^[A-Za-z .'-]+$/";

    if (!preg_match($string_exp, $name)) {
        $error_message .= 'Il nome che hai inserito non è valido.<br>';
    }

    if (strlen($message) < 2) {
        $error_message .= 'Il messaggio che hai inserito non è valido.<br>';
    }

    if (strlen($error_message) > 0) {
        problem($error_message);
    }

    $email_message = "Messaggio per Antiquita.\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "Nome: " . clean_string($name) . "\n";
    $email_message .= "Email: " . clean_string($email) . "\n";
    $email_message .= "Telefono: " . clean_string($tel) . "\n";
    $email_message .= "Messaggio: " . clean_string($message) . "\n";

    // create email headers
    $headers = 
        'From: ' . $name . '<antiquita@gmail.com/>' . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
?>

    <!-- include your success message below -->

    Grazie per averci contattato. Vi risponderemo al più presto. Antiquita

<?php
}
?>