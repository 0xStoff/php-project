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
// DB-konfiguration laden (mysqli)
include '../connection/connection.php';

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
    header("Location: /php-project/dashboard/dashboard.php?username=" . $username);
} else {
    // fehlermeldung da kein User mit entsprechender username/passwort kombination gefunden wurde
    echo "
                <h1> Falsche Logindaten, bitte versuche es erneut oder regstriere dich. </h1>
                    <button onclick='history.back()' class='button'>Zurück</button>
           ";
}

// datenbankverbindung schliessen
$con->close();
?>
</body>

<script type="module" src="js/app.js"></script>

</html>