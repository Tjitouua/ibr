import { RxLightningBolt } from "react-icons/rx";



interface BenefitsCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const BenefitsCard: React.FC<BenefitsCardProps> = ({ icon, title, description }) => {
    return (
       <div className="py-5 px-5 flex flex-col gap-3 justify-center items-center max-w-80">
           <div className="w-17 h-17 rounded-full bg-gray-200 flex justify-center items-center text-blue-900">
           {/* <RxLightningBolt className="text-3xl" /> */}
           <div className="text-3xl">{icon}</div>
           </div>
           <label className="text-2xl font-bold">{title}</label>
           <label className="text-gray-500 text-center">{description}</label>
       </div>
    );
}

export default BenefitsCard;