import { FiUsers } from "react-icons/fi";

import { PiMoneyWavyBold } from "react-icons/pi";
import BenefitStatCard from "../../ui/public/BenefitStatCard";
import { FaRegFileAlt } from "react-icons/fa";
// import { title } from "process";


const BenefitTop: React.FC = () => {

    const StatCardList = [
        {
            title: "Total Payments Distributed",
            icon:  <PiMoneyWavyBold />,
            value: "N$ 467,534,500",
            trend: "Across all social protection programs",
          },
          {
            title: "Social Programs",
            icon:  <FaRegFileAlt />,
            value: "6 Programs",
            trend: "Across all benefit categories",
          },
       {
         title: "Active Beneficiaries",
         icon: <FiUsers />,
         value: "308,835",
         trend: "Receiving benefits",
       },

    ];


     return (
        <div className="w-full py-2 gap-3 flex justify-center sm:justify-between items-center flex-wrap">
         {StatCardList.map((stat, index) => (
           <BenefitStatCard
               key={index}
               title={stat.title}
               icon={stat.icon}
               value={stat.value}
               trend={stat.trend}
           />
           ))}
        </div>
     );
}

export default BenefitTop;