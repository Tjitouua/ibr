
interface ScheduleCardProps {
    program: string;
    beneficiaries: string;
    budget: string;
    date: string;
}


const ScheduleCard: React.FC<ScheduleCardProps> = ({ program, beneficiaries, budget, date }) => {
    return (
       <div className="w-full py-3 flex justify-between items-center border-b border-gray-300">
           <div className="w-1/2 flex flex-col">
              <label className="font-semibold">{program}</label>
              <label className="text-sm text-gray-700">{beneficiaries} beneficiaries</label>
           </div>
           <div className="w-1/2 flex flex-col justify-end items-end">
               <label className="font-semibold">N${budget}</label>
               <label className="text-sm text-gray-700">{date}</label>
           </div>
       </div>
    );
} 

export default ScheduleCard;