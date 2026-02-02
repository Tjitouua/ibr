<?php

  header('Content-Type: application/json');
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type');

  include "db.php";

  $input = json_decode(file_get_contents("php://input"), true);
  $search = trim($input['search'] ?? '');

  if ($search === '') {
      echo json_encode([
          "found" => false,
          "message" => "Search value required"
      ]);
      exit();
  }


  $sql = "
          SELECT
          b.first_name,
          b.last_name,
          b.id_number,
          b.dob,
          b.gender,
          b.status,
          b.region,
          b.town,
          p.program 
          FROM beneficiaries b LEFT JOIN programs p ON b.program_id = p.id 
          WHERE b.id_number = ?
  ";

  $stmt = $conn->prepare($sql);
  $stmt->bind_param("s", $search);
  $stmt->execute();

  $result = $stmt->get_result();

  if ($row = $result->fetch_assoc()) {
     echo json_encode([
        "found" => true,
        "data" => [
            "name" => $row['first_name'] . " " . $row['last_name'],
            "id_number" => $row['id_number'],
            "program" => $row['program'],
            "dob" => $row['dob'],
            "gender" => $row['gender'],
            "status" => $row['status'],
            "region" => $row['region'],
            "town" => $row['town']
        ]
     ]);
  } else {
     echo json_encode([
        "found" => false,
        "message" => "Beneficiary not found"
     ]);
  }


  $stmt->close();
  $conn->close();



?>