<?php

   header('Access-Control-Allow-Origin: *');
   header('Access-Control-Allow-Origin: *');
   header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
   header('Access-Control-Allow-Headers: Content-Type, Authorization');


   if($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
       http_response_code(200);
       exit();
   }

   header('Content-Type: application/json');



   include "db.php";

   $data = json_decode(file_get_contents("php://input"), true);

   if(!$data) {
      http_response_code(400);
      echo json_encode(["Error" => "Invalid input"]);
      exit;
   }


   $programName = $data['program'];

   $programStmt = $conn->prepare("SELECT id FROM programs WHERE program = ?");
   $programStmt->bind_param("s", $programName);
   $programStmt->execute();

   $programResult = $programStmt->get_result();

   if ($programResult->num_rows === 0) {
      http_response_code(400);
      echo json_encode(["Error" => "Program not found"]);
      Exit();
   }

   $programRow = $programResult->fetch_assoc();
   $programId = $programRow['id'];



   $sql = "INSERT INTO beneficiaries (
                                 first_name,
                                 last_name, 
                                 id_number, 
                                 dob, 
                                 gender, 
                                 marital_status, 
                                 phone_number, 
                                 email, 
                                 physical_address, 
                                 region, 
                                 town, 
                                 status, 
                                 bank_name, 
                                 account_number, 
                                 branch_code, 
                                 account_type, 
                                 program_id
                                 ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssssssssssssssi", 
                       $data['firstName'],
                       $data['lastName'],
                       $data['id'],
                       $data['dob'],
                       $data['gender'],
                       $data['maritalStatus'],
                       $data['phoneNumber'],
                       $data['email'],
                       $data['physicalAddress'],
                       $data['region'],
                       $data['town'],
                       $data['status'],
                       $data['bankName'],
                       $data['accountNumber'],
                       $data['branchCode'],
                       $data['accountType'],
                       $programId);
    
    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Beneficiary successfully added"]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Failed to insert beneficiary", "details" => $stmt->error]);
    }



?>