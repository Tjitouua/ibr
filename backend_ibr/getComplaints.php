<?php

   header('Content-Type: application/json');
   header('Access-Control-Allow-Origin: *');
   header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
   header('Access-Control-Allow-Headers: Content-Type');

   include "db.php";

   $sql = "SELECT * FROM complaints";

   $result = $conn->query($sql);

   $complaints = [];

   if($result->num_rows > 0) {
     while ($row = $result->fetch_assoc()) {
        $complaints[] = $row;
     }
   }

   echo json_encode($complaints);
   
   $conn->close();


?>