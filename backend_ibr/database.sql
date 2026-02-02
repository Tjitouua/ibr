CREATE DATABASE ibr;


CREATE TABLE IF NOT EXISTS beneficiaries 
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(250),
    last_name VARCHAR(250),
    id_number VARCHAR(29),
    dob DATE,
    gender VARCHAR(50),
    marital_status VARCHAR(250),
    phone_number VARCHAR(50),
    email VARCHAR(250),
    physical_address VARCHAR(250),
    region VARCHAR(250),
    town VARCHAR(250),
    program VARCHAR(250),
    status VARCHAR(250),
    bank_name VARCHAR(250),
    account_number VARCHAR(50),
    branch_code VARCHAR(50),
    account_type VARCHAR(250)
);



CREATE TABLE IF NOT EXISTS program
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    program VARCHAR(250),
    budget DECIMAL (10, 2),
    beneficiaries INT,
    males INT,
    female INT,
    exits INT
); 




CREATE TABLE IF NOT EXISTS exits
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    beneficiary_id INT,
    program VARCHAR(250),
    exit_date DATE,
    reason VARCHAR(250)
);





CREATE TABLE IF NOT EXISTS grievances (
    id INT PRIMARY KEY AUTO_INCREMENT,
    case_id VARCHAR(50) UNIQUE,
    beneficiary_id INT,
    category VARCHAR(250),
    description TEXT,
    date_filed DATE,
    status VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (beneficiary_id) REFERENCES beneficiaries(id)
);





CREATE TABLE IF NOT EXISTS grievances (
    id INT PRIMARY KEY AUTO_INCREMENT,
    case_id VARCHAR(50) UNIQUE,
    beneficiary_id INT,
    category VARCHAR(250),
    description TEXT,
    date_filed DATE,
    status VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (beneficiary_id) REFERENCES beneficiaries(id)
);








CREATE TABLE beneficiaries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(250),
    last_name VARCHAR(250),
    id_number VARCHAR(29),
    dob DATE,
    gender VARCHAR(50),
    marital_status VARCHAR(250),
    phone_number VARCHAR(50),
    email VARCHAR(250),
    physical_address VARCHAR(250),
    region VARCHAR(250),
    town VARCHAR(250),
    status VARCHAR(250),
    bank_name VARCHAR(250),
    account_number VARCHAR(50),
    branch_code VARCHAR(50),
    account_type VARCHAR(250),

    program_id INT NOT NULL,

    CONSTRAINT fk_beneficiary_program
        FOREIGN KEY (program_id)
        REFERENCES programs(id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
);



INSERT INTO programs (program, budget) VALUES
('Permanent Disability Grant', 60000),
('Old Age Grant', 1603000),
('Orphans Grant', 195783),
('Vulnerable Children''s (VC) Grant', 195783);








CREATE TABLE IF NOT EXISTS complaints (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(250),
    id_number VARCHAR(50),
    phone_number VARCHAR(25),
    email VARCHAR(250),
    region VARCHAR(100),
    complaint_category VARCHAR(100),
    subject VARCHAR(100),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



CREATE TABLE IF NOT EXISTS payments
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    payment_id VARCHAR(250),
    beneficiary VARCHAR(250) NOT NULL,
    program VARCHAR(25) NOT NULL,
    region VARCHAR(250) NOT NULL,
    amount INT NOT NULL,
    payment_date DATE NOT NULL,
    method VARCHAR(250) NOT NULL,
    payment_status VARCHAR(100) NOT NULL
);


