<?php

   header('Content-Type: application/json');
   header('Access-Control-Allow-Origin: *');
   header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
   header('Access-Control-Allow-Headers: Content-Type');

   include "db.php";

   $sql = "SELECT * FROM payments";

   $result = $conn->query($sql);
   
   $payments = [];

   if($result->num_rows > 0) {
      while($row = $result->fetch_assoc()) {
        $payments[] = $row;
      }
   }

   echo json_encode($payments);

   $conn->close();




?>