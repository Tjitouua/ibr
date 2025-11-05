import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import Graphs from "../ui/Graphs";

const regions = [
    { region: "18-25", beneficiaries: 500 },
    { region: "26-35", beneficiaries: 700 },
    { region: "36-45", beneficiaries: 300 },
    { region: "46-55", beneficiaries: 600 },
    { region: "56-65", beneficiaries: 400 },
    { region: "65+", beneficiaries: 300 },
];


const AgeGraph = () => {
    return (
 <Graphs title="Beneficiaries by Age Group" desc="Distribution across age ranges">
    <div className="w-full h-70 mt-2 text-[10px] font-bold text-black">
       <ResponsiveContainer width="100%" height="100%">
            <BarChart data={regions} margin={{ top: 0, right: 30, left: 0, bottom: 15 }}>
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="region" interval={0} angle={-30} textAnchor="end" />
               <YAxis />
               <Tooltip />
               <Bar dataKey="beneficiaries" fill="#36454F" />
            </BarChart>
       </ResponsiveContainer>
    </div>
 </Graphs>
    );
}

export default AgeGraph;