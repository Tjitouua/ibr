import { FiUsers } from "react-icons/fi";


interface StatCardProps {
    title: string;
    icon: React.ReactNode;
    value: string;
    trend: string;
}


const StatCard: React.FC<StatCardProps> = ({ title, icon, value, trend }) => {
    return (
     <div className="py-4 px-4 flex min-h-30 justify-center gap-1 w-full flex-col border border-gray-400 sm:w-65 rounded-lg">
        <div className="w-full flex gap-3 justify-between text-sm items-center text-gray-500">
           <label className="font-bold">{title}</label>
           {/* <FiUsers /> */}
           <div>{icon}</div>
        </div>
        <label className="text-2xl font-bold text-black">{value}</label>
        <label className="text-[12px] text-green-700">{trend}</label>
     </div>
    );
}

export default StatCard;