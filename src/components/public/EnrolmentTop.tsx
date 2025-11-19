
import EnrolmentStatCard from "../../ui/public/EnrolmentStatCard";
import { FiUsers } from "react-icons/fi";

import { TbBrandRedhat } from "react-icons/tb";
import { PiDressBold } from "react-icons/pi";
import { CiCircleList } from "react-icons/ci";
import { IoIosList } from "react-icons/io";
import { MdFormatListBulleted } from "react-icons/md";
// import { title } from "process";


const EnrolmentTop: React.FC = () => {

    const StatCardList = [
        {
            title: "Total Beneficiaries Enrolled",
            icon:  <FiUsers />,
            value: "308,835",
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
         value: "119,744",
         trend: "38.77%",
       },
       {
        title: "Female Beneficiaries",
        icon:  <PiDressBold />,
        value: "184,730",
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