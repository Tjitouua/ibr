
interface GraphsProps {
    title: string;
    desc: string;
    children: React.ReactNode;
}


const Graphs:React.FC<GraphsProps> = ({ title, desc, children }) => {
     return (
        <div className="w-full lg:w-[49%] h-115 px-4 py-4 flex flex-col rounded-xl border border-gray-400">
           <label className="text-xl font-semibold">{title}</label> 
           <label className="text-sm text-gray-700">{desc}</label>
           <div>{children}</div>
        </div>
     );
} 

export default Graphs;