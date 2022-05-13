<?php

// DB connection einbinden
include "../connection/connection.php";

// Aufrufmethode auslesen
$method = $_SERVER['REQUEST_METHOD'];

// Aufrufe abhandeln
switch ($method) {

    case "GET":
        // Header setzen
        header("HTTP/1.0 200 OK");

        // Alle Projekte und dazugehörige Relationen zu languages auslesen (Inner Join der tabelle)
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

    // Neues Projekt erstellen
    case "POST":

        if (isset($_FILES['file']['name'])) {
            // file name
            $filename = $_FILES['file']['name'];

            // Location
            $location = '../img/' . $filename;

            // file extension
            $file_extension = pathinfo($location, PATHINFO_EXTENSION);
            $file_extension = strtolower($file_extension);

            // Valid extensions
            $valid_ext = array("pdf", "doc", "docx", "jpg", "png", "jpeg");

            if (in_array($file_extension, $valid_ext)) {
                // Upload file
                if (move_uploaded_file($_FILES['file']['tmp_name'], $location)) {
                    header("HTTP/1.0 201 UPLOADED");

                } else {
                    header("HTTP/1.0 500 Internal Server Error");

                }
            }

        }
        break;
}
