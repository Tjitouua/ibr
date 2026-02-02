<?php

  header('Content-Type: application/json');
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type');

  include "db.php";

  $sql = "SELECT 
          p.program AS name,
          COUNT(b.id) AS value
          FROM programs p LEFT JOIN beneficiaries b ON b.program_id = p.id
          WHERE status = 'Exit'
          GROUP BY p.id, p.program
          ORDER BY p.program
  ";

  $result = $conn->query($sql);

  $data = [];

  if($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = [
            "name" => $row['name'],
            "value" => (int)$row['value']
        ];
    }
  };

  echo json_encode($data);

  $conn->close();





?>