import { FiUsers } from "react-icons/fi";

import { PiMoneyWavyBold } from "react-icons/pi";
import BenefitStatCard from "../../ui/public/BenefitStatCard";
import { FaRegFileAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
// import { title } from "process";


 interface Stats {
   total_payments: number;
   total_programs: number;
   total_beneficiaries: number;
 }


const BenefitTop: React.FC = () => {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    fetch("http://localhost/backend_ibr/getPublicBenefitsTopStats.php")
    .then(res => res.json())
    .then(data => setStats(data))
    .catch(err => console.error("Failed to return stats: ", err))
  }, []);

  if(!stats) {
    return <p className="text-xs">Loading stats...</p>
  }



    const StatCardList = [
        {
            title: "Total Payments Distributed",
            icon:  <PiMoneyWavyBold />,
            value: `N$ ${stats.total_payments.toLocaleString()}`,
            trend: "Across all social protection programs",
          },
          {
            title: "Social Programs",
            icon:  <FaRegFileAlt />,
            value: `${stats.total_programs.toLocaleString()} programs`,
            trend: "Across all benefit categories",
          },
       {
         title: "Active Beneficiaries",
         icon: <FiUsers />,
         value: `${stats.total_beneficiaries.toLocaleString()} beneficiaries`,
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