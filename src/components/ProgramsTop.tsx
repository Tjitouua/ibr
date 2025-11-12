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
// import { PiMoneyWavyBold } from "react-icons/pi";
import ProgramsCard from "../ui/ProgramsCard";
import { PiUsersThreeBold } from "react-icons/pi";
import { VscGraph } from "react-icons/vsc";
import { PiMoneyWavyBold } from "react-icons/pi";
import { FaRegCalendarCheck } from "react-icons/fa";
// import { title } from "process";


const ProgramsTop: React.FC = () => {

    const StatCardList = [
       {
         title: "Active Programs",
         icon: <VscGraph />,
         value: "6",
         trend: "Currently running",
       },
       {
        title: "Total Budget",
        icon:  <PiMoneyWavyBold />,
        value: "N$ 749M",
        trend: "Across all programs",
      },
      {
        title: "Total Allocated",
        icon:  <FaRegCalendarCheck />,
        value: "N$ 749M",
        trend: "100% allocated",
      },
       {
        title: "Total Beneficiaries",
        icon:  <PiUsersThreeBold />,
        value: "480,790",
        trend: "Across all programs",
      },

    ];


     return (
        <div className="w-full py-2 gap-3 flex justify-center sm:justify-between items-center flex-wrap">
         {StatCardList.map((stat, index) => (
           <ProgramsCard
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

export default ProgramsTop;