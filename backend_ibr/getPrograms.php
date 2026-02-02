<?php
    
     header('Content-Type: application/json');
     header('Access-Control-Allow-Origin: *');
     header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
     header('Access-Control-Allow-Headers: Content-Type');

     include 'db.php';

     $sql = "SELECT 
                p.id, 
                p.program, 
                p.amount AS budget, 
                COUNT(b.id) AS beneficiaries, 
                SUM(CASE WHEN b.gender = 'male' THEN 1 ELSE 0 END ) AS males, 
                SUM(CASE WHEN b.gender = 'female' THEN 1 ELSE 0 END) AS females 
                FROM programs p LEFT JOIN beneficiaries b ON p.id = b.program_id
                GROUP BY p.id, p.program, p.amount
                ORDER BY p.program";

     $result = $conn->query($sql);

     $programs = [];

     if($result->num_rows > 0) {
         while($row = $result->fetch_assoc()) {
                $programs[] = $row;
         }
     };

     echo json_encode($programs);

     $conn->close();


?>