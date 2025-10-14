import React from 'react'
import { FaLink } from "react-icons/fa6";

interface FunctionCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FunctionCard: React.FC<FunctionCardProps> = ({ icon, title, description }) => {
     return (
     <div className="py-7 px-5 flex mb-5 min-w-70 max-w-80 flex-col rounded-lg gap-4 border border-gray-400">
        {/* <FaLink className="text-2xl font-bold" /> */}
        <div className="text-3xl text-black/60">{icon}</div>
        <label className="text-xl font-semibold">{title}</label>
        <label className="text-gray-600 text-sm">{description}</label>
     </div>
     );
}

export default FunctionCard;