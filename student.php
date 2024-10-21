<?php
header('Content-Type: application/json');

$students = [
    ["id" => 1, "name" => " Nency", "age" => 22],
    ["id" => 2, "name" => "Kriyan", "age" => 23]
];

echo json_encode($students);
