import ExitStat from "../ui/ExitStat";
import { TbCoffin } from "react-icons/tb";
import { ImExit } from "react-icons/im";
import { GiTimeBomb } from "react-icons/gi";
import { GiSandsOfTime } from "react-icons/gi";
import { FaRegFolderOpen } from "react-icons/fa6";
import { MdPendingActions } from "react-icons/md";
import { FaRegCheckSquare } from "react-icons/fa";
// import { title } from "process";


const GrievancesTop: React.FC = () => {

    const StatCardList = [
       {
         title: "Total cases",
         icon: <FaRegFolderOpen />,
         value: "127",
         trend: "All reported cases",
       },
       {
        title: "Open",
        icon:  <MdPendingActions />,
        value: "23",
        trend: "Currently active",
      },
      {
        title: "Resolved",
        icon:  <FaRegCheckSquare />,
        value: "59",
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