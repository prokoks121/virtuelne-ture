<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/new-file.json';
function storeLocalAsJson($data)
{
    global $path;
    $jsonString = json_encode($data, JSON_PRETTY_PRINT);
    $fp = fopen($path, 'w');
    fwrite($fp, $jsonString);
    fclose($fp);
}