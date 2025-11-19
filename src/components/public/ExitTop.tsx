import { FiUsers } from "react-icons/fi";

import { PiMoneyWavyBold } from "react-icons/pi";
import BenefitStatCard from "../../ui/public/BenefitStatCard";
import { FaRegFileAlt } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { TbCoffin } from "react-icons/tb";
import { GiSandsOfTime } from "react-icons/gi";
// import { title } from "process";


const ExitTop: React.FC = () => {

    const StatCardList = [
        {
            title: "Total Exits",
            icon:  <ImExit />,
            value: "164,080",
            trend: "Across all programmes",
          },
          {
            title: "Death",
            icon:  <TbCoffin />,
            value: "150,137",
            trend: "91.5% of exits",
          },
       {
         title: "Expired Grant",
         icon: <GiSandsOfTime />,
         value: "13,943",
         trend: "8.5% of exits",
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

export default ExitTop;