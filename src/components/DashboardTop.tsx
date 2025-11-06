import { FiUsers } from "react-icons/fi";
import StatCard from "../ui/StatCard";
import { BsCreditCard } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import { PiPulseBold } from "react-icons/pi";
// import { title } from "process";


const DashboardTop: React.FC = () => {

    const StatCardList = [
       {
         title: "Total Enrollments",
         icon: <FiUsers />,
         value: "308 822",
         trend: "+12% from last month",
       },
       {
        title: "Males",
        icon: <FiUsers />,
        value: "119 741",
        trend: "+12% from last month",
      },
      {
        title: "Females",
        icon: <FiUsers />,
        value: "184 724",
        trend: "+12% from last month",
      },
       {
        title: "Paid Amount",
        icon: <PiPulseBold />,
        value: "N$ 467 516 000",
        trend: "2 new this quarter",
      },
      {
        title: "Total Registrations",
        icon: <BsCreditCard />,
        value: "322 161",
        trend: "+8% from last month",
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