<?php
include('repository.php');
include('store.php');
try {
    $companyName = $_POST["company-name"];
    $fullName = $_POST["full-name"];
    $phoneNumber = $_POST["phone-number"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    if ($companyName == null || $fullName == null || $phoneNumber == null || $email == null || $message == null) {
        http_response_code(400);
        exit;
    }

    try {
        insertContact($companyName, $fullName, $phoneNumber, $email, $message);
        storeLocalAsJson($_POST);
    } catch (Exception $e) {
        echo $e;
        http_response_code(500);
        exit;
    }
    http_response_code(201);
} catch (Exception $e) {
    echo $e;
    http_response_code(500);
    exit;
}