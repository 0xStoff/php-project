<?php
// DB-konfiguration laden
include '../connection/connection.php';

// übergebenen Inhalt (von Post Methode) in Variabeln speichern
$username = $_POST['user'];
$password = $_POST['pass'];

// sql querie, username und password einfügen
$sql = "INSERT INTO  Users(username,password) VALUES ('$username','$password')";

// sql querie ausführen und auf Fehler prüfen
if ($con->query($sql) === true) {
    // registrierung erfolgreich
    echo "
    Registrierung erfolgreich. Gehe zurück um dich einzuloggen.

";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// datenbankverbindung schliessen
$con->close();
