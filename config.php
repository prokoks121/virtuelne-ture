<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbName = "kzs";

try {
    $conn = createPDOConnection($servername, $dbName, $username, $password);
} catch (PDOException $e) {
    if ($e->getCode() == 1049) {
        try {
            $conn = createPDOConnectionAndInitialize($servername, $dbName, $username, $password);
        } catch (PDOException $e) {
            echo $e;
            $conn = null;
            exit();
        }
    } else {
        echo $e;
        $conn = null;
        exit();
    }
}


function createPDOConnection($servername, $dbName, $username, $password)
{
    $conn = new PDO("mysql:host=$servername;dbname=$dbName", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $conn;
}

function createPDOConnectionAndInitialize($servername, $dbName, $username, $password)
{
    $conn = new PDO("mysql:host=$servername", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "CREATE DATABASE IF NOT EXISTS $dbName";
    $conn->exec($sql);
    $sql = "use $dbName";
    $conn->exec($sql);
    $sql = file_get_contents("sql/kzs-table.sql");
    $conn->exec($sql);
    return $conn;
}