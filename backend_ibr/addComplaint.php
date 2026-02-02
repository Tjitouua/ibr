<?php
    
    ini_set('display_errors', 0);
    error_reporting(0);

     header('Content-Type: application/json');
     header('Access-Control-Allow-Origin: *');
     header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
     header('Access-Control-Allow-Headers: Content-Type');

     include "db.php";


     if($_SERVER["REQUEST_METHOD"] === 'OPTIONS') {
        http_response_code(200);
        exit();
     }


     $data = json_decode(file_get_contents("php://input"), true);

     $required = [
        'name',
        'id_number',
        'phone_number',
        'email',
        'region',
        'complaint_category',
        'subject',
        'message'
     ];

     foreach($required as $field) {
        if(empty($data[$field])) {
            http_response_code(400);
            echo json_encode(["error" => "$field is required"]);
            exit();
        }
     }


     $sql = "INSERT INTO complaints (name, id_number, phone_number, email, region, complaint_category, subject, message, status) 
                      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

     $stmt = $conn->prepare($sql);

     if(!$stmt) {
        http_response_code(500);
        echo json_encode(["Error " => "SQL prepare failed"]);
        exit();
     }

     $status = 'Open';

     $stmt->bind_param("sssssssss", $data['name'], $data['id_number'], $data['phone_number'], $data['email'], $data['region'], $data['complaint_category'], $data['subject'], $data['message'], $status);

     if($stmt->execute()) {
        echo json_encode([
            "success" => true,
            "message" => "Complaint submitted successfully"
        ]);
     } else {
        http_response_code(500);
        echo json_encode(["error" => "Failed to submit complaint"]);
     }

     $stmt->close();
     $conn->close();




?>