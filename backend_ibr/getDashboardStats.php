<?php
   
     header('Content-Type: application/json');
     header('Access-Control-Allow-Origin: *');
     header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
     header('Access-Control-Allow-Headers: Content-Type');

     include 'db.php';

     $sql = "SELECT 
                COUNT(*) AS total_enrollments, 
                SUM(CASE WHEN gender = 'male' THEN 1 ELSE 0 END) as males,
                SUM(CASE WHEN gender = 'female' THEN 1 ELSE 0 END) as females
                FROM beneficiaries
             ";
    
    $result = $conn->query($sql);
    $data = $result->fetch_assoc();
    echo json_encode($data);
    $conn->close();

?>