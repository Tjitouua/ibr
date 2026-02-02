<?php

  error_reporting(E_ALL);
  ini_set('display_errors', 1);


  header('Content-Type: application/json');
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type');

  include 'db.php';

  $sql = "SELECT 
              b.id, 
              b.id_number, 
              CONCAT(b.first_name, ' ' , b.last_name) AS name, 
              TIMESTAMPDIFF(YEAR, b.dob, CURDATE()) AS age, 
              b.gender, 
              b.region, 
              p.program, 
              b.status 
              FROM beneficiaries b LEFT JOIN programs p ON b.program_id = p.id";

  $result = $conn->query($sql);

  $beneficiaries = [];

  if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $beneficiaries[] = $row;
        }
  }

  echo json_encode($beneficiaries);

  $conn->close();

?>