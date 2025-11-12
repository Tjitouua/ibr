import { FiUsers } from "react-icons/fi";
import StatCard from "../ui/StatCard";
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
import ExitStat from "../ui/ExitStat";
import { TbCoffin } from "react-icons/tb";
import { ImExit } from "react-icons/im";
import { GiTimeBomb } from "react-icons/gi";
import { GiSandsOfTime } from "react-icons/gi";
// import { title } from "process";


const ExitTop: React.FC = () => {

    const StatCardList = [
       {
         title: "Total Exits",
         icon: <ImExit />,
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
        icon:  <GiSandsOfTime />,
        value: "13,943",
        trend: "8.5% of exits",
      },
    ];


     return (
        <div className="w-full py-2 gap-3 flex justify-center sm:justify-between items-center flex-wrap">
         {StatCardList.map((stat, index) => (
           <ExitStat
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