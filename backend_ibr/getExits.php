<?php

   header('Content-Type: application/json');
   header('Access-Control-Allow-Origin: *');
   header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
   header('Access-Control-Allow-Headers: Content-Type');

   include "db.php";

   $sql = "SELECT
           b.id, 
           b.id_number,
           CONCAT(b.first_name, ' ' ,b.last_name) AS name,
           p.program,
           b.gender,
           b.region,
           b.exit_date,
           b.exit_reason
           FROM beneficiaries b LEFT JOIN programs p ON b.program_id = p.id
           WHERE status = 'Exit'
           ";

   $result = $conn->query($sql);

   $data = [];

   if($result->num_rows > 0) {
   while($row = $result->fetch_assoc()) {
           $data[] = $row;
   }
   };

   echo json_encode($data);
   $conn->close();




?>