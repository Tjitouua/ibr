import React, { useState } from 'react';
import { FiSave } from "react-icons/fi";
import { useNavigate, useParams } from 'react-router-dom';
import ContactInfoForm from './BeneficiaryForms/ContactInfoForm';
import BankForm from './BeneficiaryForms/BankForm';
import LocationProgramForm from './BeneficiaryForms/LocationProgramForm';
import PersonalInfoForms from './BeneficiaryForms/PersonalInfoForm';



const NewBeneficiaryForm = () => {

    const { id } = useParams();
    const isEditMode = Boolean(id);


    const navigate = useNavigate();

    // Contact info 
    
    const [personalInfo, setPersonalInfo] = useState({
        firstName: '',
        lastName: '',
        id: '',
        dob: '',
        gender: '',
        maritalStatus: ''
    });

    const [contactInfo, setContactInfo] = useState({
        phoneNumber: '',
        email: '',
        physicalAddress: ''
    });

    const [locationInfo, setLocationInfo] = useState({
        region: '',
        town: '',
        program: '',
        status:''
    });

    const [bankInfo, setBankInfo] = useState({
        bankName: '',
        accountNumber: '',
        branchCode: '',
        accountType: ''
    });

    // Error state
    const [errors, setErrors] = useState({});

    // Save button handler
    const handleSave = async () => {
        const newErrors = {};

        if (!personalInfo.firstName) newErrors.firstName = "First name is required";
        if (!personalInfo.lastName) newErrors.lastName = "Last name is required";
        if (!personalInfo.id) newErrors.id = "ID is required";
        if (!personalInfo.dob) newErrors.dob = "Date of birth is required";
        if (!personalInfo.gender) newErrors.gender = "Gender is required";
        if (!personalInfo.maritalStatus) newErrors.maritalStatus = "Marital status is required";

        if (!contactInfo.phoneNumber) newErrors.phoneNumber = "Phone number is required";
        if (!contactInfo.email) newErrors.email = "Email is required";
        if (!contactInfo.physicalAddress) newErrors.physicalAddress = "Physical address is required";

        if (!locationInfo.region) newErrors.region = "Region is required";
        if (!locationInfo.town) newErrors.town = "Town is required";
        if (!locationInfo.program) newErrors.program = "Program is required";
        if (!locationInfo.status) newErrors.status = "Status is required";

        if (!bankInfo.bankName) newErrors.bankName = "Bank name is required";
        if (!bankInfo.accountNumber) newErrors.accountNumber = "Account number is required";
        if (!bankInfo.branchCode) newErrors.branchCode = "Branch code is required";
        if (!bankInfo.accountType) newErrors.accountType = "Account type is required";

        setErrors(newErrors);

        // Only navigate if no errors
        if (Object.keys(newErrors).length === 0) {
             const payload = {
                 ...personalInfo,
                 ...contactInfo,
                 ...locationInfo,
                 ...bankInfo
             };

             try {
                const res = await fetch("http://localhost/backend_ibr/addBeneficiary.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                });

                const data = await res.json();

                if (data.success) {
                    navigate("/beneficiaries");
                } else {
                    alert(data.error || "Something went wrong");
                }
             } catch (err) {
                console.error("API error: ", err);
                alert("Server error");
             }
        }
    };

    return (
        <div className="min-h-100 py-10 w-full flex flex-col gap-9 justify-center items-center">
            <PersonalInfoForms
                personalInfo={personalInfo} 
                setPersonalInfo={setPersonalInfo} 
                errors={errors} 
            />


            <ContactInfoForm 
                contactInfo={contactInfo} 
                setContactInfo={setContactInfo} 
                errors={errors} 
            />

            <LocationProgramForm 
                locationInfo={locationInfo} 
                setLocationInfo={setLocationInfo} 
                errors={errors} 
            />

            <BankForm
                bankInfo={bankInfo}
                setBankInfo={setBankInfo}
                errors={errors}
            />


            <div className="w-full xl:w-2/3 flex justify-end">
                <button
                    onClick={handleSave}
                    className="rounded-md flex items-center gap-3 justify-center bg-blue-500 px-6 py-2 text-white cursor-pointer hover:bg-transparent hover:text-black hover:border hover:bg-gray-500"
                >
                    <FiSave /> Save Beneficiary
                </button>
            </div>
        </div>
    );
};

export default NewBeneficiaryForm;
