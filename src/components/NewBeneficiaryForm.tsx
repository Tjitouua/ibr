import React, { useState } from 'react';

import { FiSave } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import PersonalInfoForms from './BeneficiaryForms/PersonalInfoForm';
import ContactInfoForm from './BeneficiaryForms/ContactInfoForm';
import LocationProgramForm from './BeneficiaryForms/LocationProgramForm';
import BankForm from './BeneficiaryForms/BankForm';


const NewBeneficiaryForm = () => {
    return (
        <div className="min-h-100 py-10 w-full flex flex-col gap-9 justify-center items-center">
                    
         <PersonalInfoForms />
         <ContactInfoForm />
         <LocationProgramForm />
         <BankForm />



        <div className="w-full xl:w-2/3 flex justify-end">
            <button className="rounded-md flex 
               items-center gap-3 justify-center bg-blue-500 px-6 py-2 text-white cursor-pointer 
                hover:bg-transparent hover:text-black hover:border hover:bg-gray-500"
            > <FiSave /> Save Beneficiary</button>

        </div>



    </div>
    );
}

export default NewBeneficiaryForm;



