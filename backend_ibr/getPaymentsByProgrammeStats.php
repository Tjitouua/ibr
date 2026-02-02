<?php

   header('Content-Type: application/json');
   header('Access-Control-Allow-Origin: *');
   header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
   header('Access-Control-Allow-Headers: Content-Type');

   include "db.php";

   $sql = "
          SELECT program,
          SUM(amount) as payments
          FROM payments
          WHERE payment_status = 'Completed'
          GROUP BY program
          ORDER BY program
   ";

   $result = $conn->query($sql);
   $data = [];

   while($row = $result->fetch_assoc()) {
        $data[] = [
            "program" => $row['program'],
            "payments" => (int)$row['payments']
        ];
   };

   echo json_encode($data);
   $conn->close();




?>