<?php

  header('Content-Type: application/json');
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type');

  include 'db.php';

  $sql = "SELECT 
            region,
            COUNT(*) AS beneficiaries
            FROM beneficiaries
            GROUP BY region
            ORDER BY region";

  $result = $conn->query($sql);

  $data = [];

  while ($row = $result->fetch_assoc()) {
    $data[] = [
        "region" => $row['region'],
        "beneficiaries" => (int)$row['beneficiaries']
    ];
  }

  echo json_encode($data);
  $conn->close();


?>