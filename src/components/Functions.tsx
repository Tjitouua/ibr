import React from 'react'
import { FaLink } from "react-icons/fa6";
import FunctionCard from '../ui/FunctionCard';
import { BsFillPeopleFill } from "react-icons/bs";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { PiNotepadFill } from "react-icons/pi";
import { IoBarChartSharp } from "react-icons/io5";
import { FaBook } from "react-icons/fa6";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";


const Functions: React.FC = () => {

    const functionList = [
        {
            icon: <FaLink />,
            title: "Integration Service",
            description: "Seamless data integration across platforms",
        },
        {
            icon: <BsFillPeopleFill />,
            title: "Beneficiary Management",
            description: "Comprehensive data management",
        },
        {
            icon: <FaMoneyBill1Wave />,
            title: "Payment Tracking",
            description: "Monitor beneficiary payments",
        },
        {
            icon: <PiNotepadFill />,
            title: "Grievances & Complaints",
            description: "Handle feedback efficiently",
        },
        {
            icon: <IoBarChartSharp />,
            title: "Analytics & Reporting",
            description: "Data-driven insights",
        },
        {
            icon: <FaBook />,
            title: "Knowledge Management",
            description: "Centralized information hub",
        },
        {
            icon: <IoShieldCheckmarkSharp />,
            title: "Verification Services",
            description: "Ensure data accuracy",
        },
        {
            icon: <IoSettingsSharp />,
            title: "Administration",
            description: "System configuration & control",
        },
    ];


    return (
       <div className="w-full py-5 px-5 max-w-400 flex flex-col gap-3 justify-center items-center">
           <label className="text-3xl font-bold text-black">Core Functions</label>
           <div className="flex w-full justify-center xl:justify-around gap-7 items-center flex-wrap py-4">
            {functionList.map((func, index) => (
              <FunctionCard
                 key={index}
                 icon={func.icon}
                 title={func.title}
                 description={func.description}
              />
             ))}
           </div>
       </div>
    );
}

export default Functions;