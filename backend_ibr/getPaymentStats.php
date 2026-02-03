<?php

     header('Content-Type: application/json');
     header('Access-Control-Allow-Origin: *');
     header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
     header('Access-Control-Allow-Headers: Content-Type');

     include "db.php";

     $sql = "SELECT
             SUM(amount) as total_budget,
             SUM(CASE WHEN payment_status = 'Completed' THEN amount ELSE 0 END) as completed_payments,
             SUM(CASE WHEN payment_status = 'Pending' THEN amount ELSE 0 END) as pending_payments
             FROM payments
     ";

     $result = $conn->query($sql);
     $data = $result->fetch_assoc();
     echo json_encode($data);
     $conn->close();



?>