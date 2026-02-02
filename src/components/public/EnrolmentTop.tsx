
import EnrolmentStatCard from "../../ui/public/EnrolmentStatCard";
import { FiUsers } from "react-icons/fi";

import { TbBrandRedhat } from "react-icons/tb";
import { PiDressBold } from "react-icons/pi";
import { CiCircleList } from "react-icons/ci";
import { IoIosList } from "react-icons/io";
import { MdFormatListBulleted } from "react-icons/md";
import { useEffect, useState } from "react";
// import { title } from "process";



  interface dashboardStats {
    total_enrollments: number,
    males: number,
    females: number
  }


const EnrolmentTop: React.FC = () => {
   const [stats, setStats] = useState<dashboardStats | null>(null);

   useEffect(() => {
           fetch("http://localhost/backend_ibr/getDashboardStats.php")
           .then(res => res.json())
           .then(data => setStats(data))
           .catch(err => console.error("Failed to fetch dashboard stats: ", err));
      }, []);
   
      if(!stats) {
         return <div>Loading Dashboard...</div>
      }

    const StatCardList = [
        {
            title: "Total Beneficiaries Enrolled",
            icon:  <FiUsers />,
            value: stats.total_enrollments.toLocaleString(),
            trend: "People currently receiving benefits",
          },
          {
            title: "Active Programs",
            icon:  <MdFormatListBulleted />,
            value: "9",
            trend: "Programs currently running",
          },
       {
         title: "Male Beneficiaries",
         icon:  <TbBrandRedhat />,
         value: stats.males.toLocaleString(),
         trend: "38.77%",
       },
       {
        title: "Female Beneficiaries",
        icon:  <PiDressBold />,
        value: stats.females.toLocaleString(),
        trend: "59.82%",
      },

    ];


     return (
        <div className="w-full py-2 gap-3 flex justify-center sm:justify-between items-center flex-wrap">
         {StatCardList.map((stat, index) => (
           <EnrolmentStatCard
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

export default EnrolmentTop;