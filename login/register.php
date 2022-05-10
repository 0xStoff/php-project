<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>
    <link href="../css/styles.css" rel="stylesheet" />

</head>

<body>
    <?php
    // DB-konfiguration laden
    include('../connection/connection.php');

    // übergebenen Inhalt (von Post Methode) in Variabeln speichern
    $username = $_POST['user'];
    $password = $_POST['pass'];

    // sql querie, username und password einfügen
    $sql = "INSERT INTO  Users(username,password) VALUES ('$username','$password')";

    // sql querie ausführen und auf Fehler prüfen
    if ($con->query($sql) === TRUE) {
        // registrierung erfolgreich
        echo "
   <h1> Registrierung erfolgreich. Gehe zurück um dich einzuloggen. </h1> 		
       <button onclick='history.back()' class='button'>Zurück</button>
";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // datenbankverbindung schliessen
    $con->close();
    ?>
</body>

</html>