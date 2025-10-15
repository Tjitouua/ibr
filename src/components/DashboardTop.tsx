import { FiUsers } from "react-icons/fi";
import StatCard from "../ui/StatCard";
import { BsCreditCard } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import { PiPulseBold } from "react-icons/pi";
// import { title } from "process";


const DashboardTop: React.FC = () => {

    const StatCardList = [
       {
         title: "Total Beneficiaries",
         icon: <FiUsers />,
         value: "1,640",
         trend: "+12% from last month",
       },
       {
        title: "Active Programs",
        icon: <PiPulseBold />,
        value: "8",
        trend: "2 new this quarter",
      },
      {
        title: "Payments This Month",
        icon: <BsCreditCard />,
        value: "$245,680",
        trend: "+8% from last month",
      },
      {
        title: "Pending Grievances",
        icon: <BiMessageRounded />,
        value: "23",
        trend: "-5 from last week",
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

export default DashboardTop;