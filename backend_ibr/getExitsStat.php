<?php  

    header('Content-Type: application/json');
     header('Access-Control-Allow-Origin: *');
     header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
     header('Access-Control-Allow-Headers: Content-Type');

     include "db.php";

     $sql = "SELECT
             COUNT(*) AS total_exits,
             SUM(CASE WHEN exit_reason = 'Death' THEN 1 ELSE 0 END) AS death,
             SUM(CASE WHEN exit_reason = 'Expired Grant' THEN 1 ELSE 0 END) AS expired_grant
             FROM beneficiaries WHERE status = 'Exit'
     ";

     $result = $conn->query($sql);
     $data = $result->fetch_assoc();
     echo json_encode($data);
     $conn->close();


?>