import ExitStat from "../ui/ExitStat";
import { TbCoffin } from "react-icons/tb";
import { ImExit } from "react-icons/im";
import { GiTimeBomb } from "react-icons/gi";
import { GiSandsOfTime } from "react-icons/gi";
import { FaRegFolderOpen } from "react-icons/fa6";
import { MdPendingActions } from "react-icons/md";
import { FaRegCheckSquare } from "react-icons/fa";
import { useEffect, useState } from "react";
// import { title } from "process";


 interface complaintsStats {
     total_cases: number,
     open: number,
     resolved: number
 }


const GrievancesTop: React.FC = () => {
  const [stats, setStats] = useState<complaintsStats | null>(null);

  useEffect(() => {
    fetch("http://localhost/backend_ibr/getComplaintsStats.php")
    .then(res => res.json())
    .then(data => setStats(data))
    .catch(err => console.error("Failed to fetch complaints stats: ", err));
  }, []);

  if(!stats) {
    return <div>Loading complaints...</div>
  }



    const StatCardList = [
       {
         title: "Total cases",
         icon: <FaRegFolderOpen />,
         value: stats.total_cases.toLocaleString(),
         trend: "All reported cases",
       },
       {
        title: "Open",
        icon:  <MdPendingActions />,
        value: stats.open.toLocaleString(),
        trend: "Currently active",
      },
      {
        title: "Resolved",
        icon:  <FaRegCheckSquare />,
        value: stats.resolved.toLocaleString(),
        trend: "Successfully closed",
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

export default GrievancesTop;