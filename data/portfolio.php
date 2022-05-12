<?php
// DB connection einbinden
include "../connection/connection.php";
// Aufrufmethode auslesen
$method = $_SERVER['REQUEST_METHOD'];

function uploadImgFile()
{
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

        $response = 0;
        if (in_array($file_extension, $valid_ext)) {
            // Upload file
            if (move_uploaded_file($_FILES['file']['tmp_name'], $location)) {
                $response = 1;
            }
        }

        echo $response;
        exit;

    }
}

// Aufrufe abhandeln
switch ($method) {

    case "GET":
        // Header setzen
        header("HTTP/1.0 200 OK");

        // Daten auslesen für Projekte
        $projects = $pdo->prepare("SELECT * FROM portfolio.projects");
        $projects->execute();
        $projectsResult = $projects->fetchAll(PDO::FETCH_ASSOC); // Nur werte auslesen

        // Alle languages auslesen
        $languages = $pdo->prepare("SELECT * FROM portfolio.languages ORDER BY languages.language_name ASC");
        $languages->execute();
        $languagesResult = $languages->fetchAll(PDO::FETCH_ASSOC); // Nur werte auslesen

        // Resultate in array speichern
        $result = array('projects' => $projectsResult, 'languages' => $languagesResult);

        // Daten als JSON zurückgeben
        $json = json_encode($result);

        echo $json;

        break;

    // Neues Projekt erstellen
    case "POST":

        // JSON umwandeln
        $data = json_decode(file_get_contents('php://input'), true);

        // Werte auslesen
        $title = $data["title"];
        $languages = $data["languages"];
        $creation_date = $data["creation_date"];
        $description = $data["description"];
        $url = $data["url"];
        $picture_path = $data["picture_path"];

        // Daten speichern
        $statement = $pdo->prepare("INSERT INTO portfolio.projects(creation_date, description, title, url,picture_path) VALUES (?, ?, ?, ?,?)");
        if ($statement->execute(array($creation_date, $description, $title, $url, $picture_path))) {
            // Erfolg: ID zurückgeben im location-Header
            $projects_id = $pdo->lastInsertId();

            // Daten zu Relationen in der Datenbank speichern (Many-to-Many Relation, wird in Zwischentabelle gespeichert)
            for ($i = 0; $i < count($languages); $i++) {
                $statementLanguages = $pdo->prepare("INSERT INTO portfolio.projects_languages_relation VALUES ($projects_id,$languages[$i]);");
                $statementLanguages->execute();
            }

            // Header setzen
            header("HTTP/1.0 201 Created");
        } else {
            // Fehler beim Einfügen
            header("HTTP/1.0 500 Internal Server Error");
            // es sollen keine Fehlermeldungen an den User geleitet werden, daher nur Server-Logging
        }
        break;

    // Projekt löschen
    case "DELETE":
        // Wurde eine ID übergeben?
        if (isset($_GET['id'])) {
            // id holen und zurückgeben
            $id = $_GET['id'];
            echo $id;

            // Projekt und dazugehörige Relationen mit Languages löschen
            $statement = $pdo->prepare("DELETE FROM portfolio.projects WHERE projects_id = ?");
            $stat = $pdo->prepare("DELETE FROM portfolio.projects_languages_relation WHERE projects_id = ?");
            $stat->execute(array($id));
            $statement->execute(array($id)); // Parameter werden als Array erwartet

            // Header passend setzten
            if ($statement->rowCount() > 0) { // Anz. gelöschte Datensätze prüfen
                header("HTTP/1.0 200 OK");
            } else {
                // es wurde nichts gelöscht. Ungültige ID
                header("HTTP/1.0 404 NOT FOUND");
            }

        } else {
            // Methode nicht erlaubt
            header("HTTP/1.0 405 Not Allowed");
        }

        break;

    case "PUT":

        // JSON umwandeln
        $data = json_decode(file_get_contents('php://input'), true);

        // Werte auslesen
        $title = $data["title"];
        $projects_id = $data['projects_id'];
        $languages = $data["languages"];
        $description = $data["description"];
        $creation_date = $data["creation_date"];
        $url = $data["url"];
        $picture_path = $data["picture_path"];

        // Daten speichern
        $statement = $pdo->prepare("UPDATE portfolio.projects SET title=?, description=?,creation_date=?,url=?, picture_path=? WHERE projects_id=$projects_id");

        // Relationen zu Languages löschen
        $stat = $pdo->prepare("DELETE FROM portfolio.projects_languages_relation WHERE projects_id = $projects_id");
        $stat->execute();
        if ($statement->execute(array($title, $description, $creation_date, $url, $picture_path))) {

            // Header passend setzen
            if ($statement->rowCount() > 0 || $stat->rowCount() > 0) {
                // Neue Relationen speichern
                for ($i = 0; $i < count($languages); $i++) {
                    $statementLanguages = $pdo->prepare("INSERT INTO portfolio.projects_languages_relation
          VALUES ($projects_id,$languages[$i])
          ON DUPLICATE KEY UPDATE projects_id=projects_id,language_id=language_id");
                    $statementLanguages->execute();
                }
                // Header setzen
                header("HTTP/1.0 200 OK");
            } else {
                // Projekt nicht gefunden
                header("HTTP/1.0 404 NOT FOUND");
            }
        } else {
            // Server error
            header("HTTP/1.0 500 Internal Server Error");
        }

        break;

    default:
        // Methode nicht erlaubt
        header("HTTP/1.0 405 Not Allowed");
}
