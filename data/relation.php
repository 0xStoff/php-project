<?php
include("../connection/connection.php");

// Aufrufmethode auslesen
$method = $_SERVER['REQUEST_METHOD'];

// Aufrufe abhandeln
switch ($method) {

    case "GET":

        header("HTTP/1.0 200 OK");

        // JSON umwandeln
        // $data = json_decode(file_get_contents('php://input'), true);

        // Werte auslesen
        // $id = $data["id"];

        // $id = 1;
        // Alle languages auslesen
        $languages = $pdo->prepare("SELECT projects_id, languages.language_id,language_name 
        FROM portfolio.projects_languages_relation 
        INNER JOIN portfolio.languages
        ON projects_languages_relation.language_id = languages.language_id");
        $languages->execute();
        $languagesResult = $languages->fetchAll(PDO::FETCH_ASSOC); // Nur werte auslesen


        // Daten als JSON zurückgeben
        $json = json_encode($languagesResult);


        echo $json;

        break;

        // Methode nicht erlaubt
        header("HTTP/1.0 405 Not Allowed");
}
