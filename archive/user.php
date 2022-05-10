<?php
// header("HTTP/1.0 405 Not Allowed");
header("Content-Type: application/json; charset=UTF-8");

// header("content-type: application/json"); //return json data

// header("Access-Control-Allow-Origin: *");  


$pdo = new PDO('mysql:host=localhost;dbname=ict_dashboard;charset=utf8', 'root', 'abcd1234');
$statement = $pdo -> prepare("SELECT * FROM ict_dashboard.users");
$statement -> execute();
$result = $statement -> fetchAll(PDO::FETCH_ASSOC);

echo json_encode($result);



?>