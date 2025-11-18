import { FiUsers } from "react-icons/fi";
// import StatCard from "../ui/StatCard";
import { BsCreditCard } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import { PiPulseBold } from "react-icons/pi";
import { IoWomanOutline } from "react-icons/io5";
import { PiDressBold } from "react-icons/pi";
import { TbBrandRedhat } from "react-icons/tb";
import { LuClipboardPenLine } from "react-icons/lu";
import { GiMoneyStack } from "react-icons/gi";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { PiMoneyWavyBold } from "react-icons/pi";
import { ImExit } from "react-icons/im";
import StatCard from "../../ui/StatCard";
// import { title } from "process";


const OverviewTop: React.FC = () => {

    const StatCardList = [
       {
         title: "Total Enrollments",
         icon: <FiUsers />,
         value: "308 822",
         trend: "+12% from last month",
       },
       {
        title: "Males",
        icon:  <TbBrandRedhat />,
        value: "119 741",
        trend: "38.77%",
      },
      {
        title: "Females",
        icon:  <PiDressBold />,
        value: "184 724",
        trend: "59.82%",
      },
       {
        title: "Paid Amount",
        icon:  <PiMoneyWavyBold />,
        value: "N$ 467 516 000",
        trend: "+0% from last month",
      },
      {
        title: "Total Registrations",
        icon:  <LuClipboardPenLine />,
        value: "322 161",
        trend: "+4% from last month",
      },
      {
        title: "Exits",
        icon:  <ImExit />,
        value: "164 080",
        trend: "+4% from last month",
      },

    ];


     return (
        <div className="w-full py-2 gap-3 flex justify-center sm:justify-between items-center flex-wrap">
         {StatCardList.map((stat, index) => (
           <StatCard
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

export default OverviewTop;