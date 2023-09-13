<?php
include('../config.php');

function insertContact($companyName, $fullName, $phoneNumber, $email, $message)
{
    global $conn;
    $sql = "INSERT INTO `kzs`(`company_name`, `full_name`, `phone_number`, `email`, `message`) VALUES (?,?,?,?,?)";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$companyName, $fullName, $phoneNumber, $email, $message]);
}