<?php
include("../connection/connection.php");
// Aufrufmethode auslesen
$method = $_SERVER['REQUEST_METHOD'];

// Aufrufe abhandeln
switch ($method) {


  case "GET":

    header("HTTP/1.0 200 OK");


    // Daten auslesen für Projekte
    $projects = $pdo->prepare("SELECT * FROM portfolio.projects");
    $projects->execute();
    $projectsResult = $projects->fetchAll(PDO::FETCH_ASSOC); // Nur werte auslesen


    // Alle languages auslesen
    $languages = $pdo->prepare("SELECT * FROM portfolio.languages ORDER BY languages.language_name ASC");
    $languages->execute();
    $languagesResult = $languages->fetchAll(PDO::FETCH_ASSOC); // Nur werte auslesen

    $result = array('projects' => $projectsResult, 'languages' => $languagesResult);

    // Daten als JSON zurückgeben
    $json = json_encode($result);


    echo $json;

    break;



    // Neues Auto erstellen
  case "POST":
    // JSON umwandeln
    $data = json_decode(file_get_contents('php://input'), true);

    // Werte auslesen
    $title = $data["name"];
    $languages = $data["languages"];

    // }

    // Daten speichern
    $statement = $pdo->prepare("INSERT INTO portfolio.projects(title) VALUES (?)");
    if ($statement->execute(array($title))) {
      // Erfolg: ID zurückgeben im location-Header
      $projects_id = $pdo->lastInsertId();

      for ($i = 0; $i < count($languages); $i++) {
        $statementLanguages = $pdo->prepare("INSERT INTO portfolio.projects_languages_relation VALUES ($projects_id,$languages[$i]);");
        $statementLanguages->execute();

        if ($i == count($languages)) {
          header("HTTP/1.0 201 Created");
          header("location:data/portfolio.php?id=" . $projects_id, false); // zweiter Aufruf, braucht als zweiter Parameter false
        }
      }
    } else {
      // Fehler beim Einfügen
      header("HTTP/1.0 500 Internal Server Error");
      // es sollen keine Fehlermeldungen an den User geleitet werden, daher nur Server-Logging
    }
    break;

    // Auto löschen
  case "DELETE":
    // Wurde eine ID übergeben?
    if (isset($_GET['id'])) {
      $id = $_GET['id'];
      echo $id;
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

      // Keine ID -> Nicht erlaubt
    } else {
      // Methode nicht erlaubt
      header("HTTP/1.0 405 Not Allowed");
    }

    break;



  case "PUT":
    // JSON umwandeln
    $data = json_decode(file_get_contents('php://input'), true);

    // Werte auslesen
    $title = $data["name"];
    $projects_id = $data['projects_id'];
    $languages = $data["languages"];

    // $id = 16;


    $statement = $pdo->prepare("UPDATE portfolio.projects SET title=? WHERE projects_id=$projects_id");
    $stat = $pdo->prepare("DELETE FROM portfolio.projects_languages_relation WHERE projects_id = $projects_id");
    $stat->execute();
    if ($statement->execute(array($title))) {


      // Header passend setzen
      if ($statement->rowCount() > 0 || $stat->rowCount() > 0) {

        for ($i = 0; $i < count($languages); $i++) {

          $statementLanguages = $pdo->prepare("INSERT INTO portfolio.projects_languages_relation 
          VALUES ($projects_id,$languages[$i]) 
          ON DUPLICATE KEY UPDATE projects_id=projects_id,language_id=language_id");
          $statementLanguages->execute();

          if ($i == count($languages)) {
            header("HTTP/1.0 200 OK");
          }
        }
      } else {
        header("HTTP/1.0 404 NOT FOUND");
      }
    } else {
      header("HTTP/1.0 500 Internal Server Error");
    }

    break;

  default:
    // Methode nicht erlaubt
    header("HTTP/1.0 405 Not Allowed");
}
