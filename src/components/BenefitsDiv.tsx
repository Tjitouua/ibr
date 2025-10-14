import React from 'react'
import BenefitsCard from '../ui/BenefitsCard';
import { RxLightningBolt } from "react-icons/rx";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { PiUsers } from "react-icons/pi";
import { FaAnchor } from "react-icons/fa";


const BenefitsDiv: React.FC = () => {

    const BenefitsList = [
        {
            icon: <RxLightningBolt />,
            title: "Efficiency",
            description: "Less paperwork, faster service - getting help to those who need it, when they need it",
        },
        {
            icon: <IoShieldCheckmarkOutline />,
            title: "Transparency",
            description: "See where every dollar goes and track progress in real-time",
        },
        {
            icon: <PiUsers />,
            title: "Impact",
            description: "Better data leads to improved outcomes for all beneficiaries",
        },
        {
            icon: <FaAnchor />,
            title: "Reliability",
            description: "Consistent and accurate data ensures programs run smoothly and beneficiaries get the support they deserve",
        },
    ];


     return (
        <div className="w-full py-3 flex justify-center gap-5 md:justify-between items-start flex-wrap">
            {BenefitsList.map((ben, index) => (
              <BenefitsCard
                 key={index}
                 icon={ben.icon}
                 title={ben.title}
                 description={ben.description}
              />
            ))}
        </div>
     );
}

export default BenefitsDiv;