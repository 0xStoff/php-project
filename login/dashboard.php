<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/styles.css">

</head>

<body>

    <?php
    // starten einer php session
    // der User erhält dabei eine einzigartige session id
    session_start();
    if (!isset($_SESSION['userid'])) {
        // ist keine Session Id vorhanden, wird der User zur Startseite weitergeleitet
        // so können nur User, die sich einloggen, das Dashboard sehen
        header("Location: /");
    } else {
        // ist eine gültige sesseion id vorhanden, wird der username und das dashboard angezeigt
        $userid = $_SESSION['userid'];
        $username = $_GET['username'];
        echo "<div class='wrapper'><h3> Eingeloggt als $username</h3>";

        // nach logout wird die session wieder beendet, der User hat keinen zugriff mehr aufs dashboard
        if (isset($_GET['logout'])) {
            session_destroy();
            header("Location: /");
        }
    }

    // logout button
    echo "<a href='/login/dashboard.php?logout=true' ><button class='button'>Logout</button></a></div>"
    ?>
    <div id="snackbar"></div>

    <div class="formWrapper">
        <form name="ProjectForm" class="form">

            <input placeholder="Project Title" type="text" class="text textInput validity blur" id="ProjectName" name="ProjectName" required />
            <textarea id="ProjectDescription" placeholder="Project Description" type="text" class="text textArea validity blur" required></textarea>
            <div class="inputWrapper">
                <input id="ProjectUrl" type="url" name="url" id="url" placeholder="https://github.com/project-name" pattern="https://.*" size="30" class="text textUrl validity blur" required>
                <input onfocus="!this.value ? this.style.color='rgba(255, 255, 255, 0.4)': this.style.color='#fff'" onblur="!this.value ? this.style.color='rgba(255, 255, 255, 0.4)': this.style.color='#fff'" id="ProjectDate" type="date" class="text textDate validity blur" required />
            </div>
            <input id="ProjectImage" class="text textImage validity" type="file" id="img" name="img" accept="image/*" required>


            <div class="select">
                <div id="ripple" class="lds-ripple">
                    <div></div>
                    <div></div>
                </div>


                <select id="select" class="selectField" multiple required>

                </select>
                <div id="selectedItems" class="selectSelected">

                </div>
            </div>

            <button class="button" type="button" id="FormularZuruecksetzen">Abbrechen</button>
            <button class="button" type="button" id="ButtonSpeichern">Einfügen</button>
        </form>
    </div>



    <div class="wrapper" id="wrapperCards">
        <div class="lds-ripple">
            <div></div>
            <div></div>
        </div>
    </div>


    <div class="wrapper" id="wrapperModal">
        <div id="modal">
            <img src=./assets/close.svg id='icon' />

            <div id="modalContent">

            </div>
        </div>
    </div>




    <script type="module" src="../js/app.js"></script>
    <script type="module" src="../js/languages.js"></script>


</body>

</html>