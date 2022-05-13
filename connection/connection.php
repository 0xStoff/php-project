<?php
// konfiguration für datenbank
$host = "127.0.0.1";
$user = "root";
$password = 'abcd1234';
$db_name = "portfolio";

// für Login
// Datenbankverbindung mit mysqli aufbauen
$con = mysqli_connect($host, $user, $password, $db_name);

// fehlermeldung bei verbindungsproblem
if (mysqli_connect_errno()) {
    die("Failed to connect with MySQL: " . mysqli_connect_error());
}

// für api endpoints portfolio und relation
/// Ausgabe-Mime-Type setzen
header("Content-Type: application/json; charset=UTF-8");

// Datenbankverbindung aufbauen
$pdo = new PDO("mysql:host=$host;dbname=$db_name;", $user, $password);
