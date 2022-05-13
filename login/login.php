<?php
// DB-konfiguration laden (mysqli)
include '../connection/connection.php';

// Aufrufmethode auslesen
$method = $_SERVER['REQUEST_METHOD'];

// übergebenen Inhalt (von Post Methode) in Variabeln speichern
$username = $_POST['user'];
$password = $_POST['pass'];

// um mysqli injection zu verhindern
$username = stripcslashes($username);
$password = stripcslashes($password);
$username = mysqli_real_escape_string($con, $username);
$password = mysqli_real_escape_string($con, $password);

// sql querie, suche nach username und password
$sql = "select * from users where username = '$username' and password = '$password'";
$result = mysqli_query($con, $sql);

// resultat verarbeiten
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
$count = mysqli_num_rows($result);

// bei Übereinstimmung (username und password richtig)
if ($count === 1) {
    // starten einer php session, speichern des usernamen aus sessionvariable
    session_start();
    $_SESSION['userid'] = $username;
    // weiterleitung zum Dashboard
    header("Location: ../dashboard/dashboard.php?username=" . $username);
} else {
    echo "Falsche Logindaten";
}

$con->close();
