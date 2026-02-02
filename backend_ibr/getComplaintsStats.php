<?php

    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');

    include "db.php";

    $sql = "SELECT
            COUNT(*) as total_cases,
            SUM(CASE WHEN status = 'Open' THEN 1 ELSE 0 END) AS open,
            SUM(CASE WHEN status = 'Resolved' THEN 1 ELSE 0 END) AS resolved
            FROM complaints
    ";

    $result = $conn->query($sql);
    $data = $result->fetch_assoc();
    echo json_encode($data);
    $conn->close();


?>