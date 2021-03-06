<?php
try {
    $pdo = new PDO('mysql:host=localhost;dbname=video', "root", "", array(
        PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING
    ));
} catch (PDOException $e) {
    echo 'Erreur de connexion : ' . $e->getMessage();
}

//Récupérer la saisie de l'utilisateur

    $tmpYear = "%" . $_POST['tmpYear'] . "%";
    //Sélection de la date
    $rq = $pdo->prepare("SELECT DISTINCT(year) FROM movies_full WHERE year LIKE ? ORDER BY year");
    $rq->execute([$tmpYear]);
    while ($result = $rq->fetch(PDO::FETCH_ASSOC)) {
        echo "<div>" . $result['year'] . "</div>";
    }





//Sélection du titre

    $tmpCast = "%" . $_POST['tmpCast'] . "%";

    $rq = $pdo->prepare("SELECT DISTINCT (title) FROM movies_full WHERE title LIKE ? ORDER BY title");
    $rq->execute([$tmpCast]);
    while ($result = $rq->fetch(PDO::FETCH_ASSOC)) {
        echo "<div>" . $result['title'] . "</div>";
    }

