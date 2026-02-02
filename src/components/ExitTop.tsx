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
import { useEffect, useState } from "react";
// import { title } from "process";


 interface ExitsStats {
    total_exits: number,
    death: number,
    expired_grant: number
 };


const ExitTop: React.FC = () => {
  const [exitStats, setExitStats] = useState<ExitsStats | null>(null);

  useEffect(() => {
    fetch("http://localhost/backend_ibr/getExitsStat.php")
    .then((res) => res.json())
    .then(data => setExitStats(data))
    .catch(err => console.error("Failed to fetch exit stats: ", err))
  }, []);

  if(!exitStats) {
      return <div>Loading Exits...</div>
  }

    const StatCardList = [
       {
         title: "Total Exits",
         icon: <ImExit />,
         value: exitStats.total_exits.toLocaleString(),
         trend: "Across all programmes",
       },
       {
        title: "Death",
        icon:  <TbCoffin />,
        value: exitStats.death.toLocaleString(),
        trend: "91.5% of exits",
      },
      {
        title: "Expired Grant",
        icon:  <GiSandsOfTime />,
        value: exitStats.expired_grant.toLocaleString(),
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