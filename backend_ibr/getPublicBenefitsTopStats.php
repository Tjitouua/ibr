<?php

   header('Content-Type: application/json');
   header('Access-Control-Allow-Origin: *');
   header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
   header('Access-Control-Allow-Headers: Content-Type');

   include "db.php";

   $sql = "SELECT SUM(amount) as total_payments FROM payments WHERE payment_status = 'Completed'";
   $resultPayments = $conn->query($sql);
   $totalPayments = $resultPayments->fetch_assoc()['total_payments'] ?? 0;

   $sql2 = "SELECT COUNT(*) as total_programs FROM programs";
   $resultPrograms = $conn->query($sql2);
   $totalPrograms = $resultPrograms->fetch_assoc()['total_programs'] ?? 0;

   $sql3 = "SELECT COUNT(*) as total_beneficiaries FROM beneficiaries";
   $resultBeneficiaries = $conn->query($sql3);
   $totalBeneficiaries = $resultBeneficiaries->fetch_assoc()['total_beneficiaries'] ?? 0;


   $data = [
      "total_payments" => (int)$totalPayments,
      "total_programs" => (int)$totalPrograms,
      "total_beneficiaries" => (int)$totalBeneficiaries
   ];

   echo json_encode($data);

   $conn->close();


?>