import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import Graphs from "../ui/Graphs";

const regions = [
    { region: "Khomas", beneficiaries: 500 },
    { region: "Erongo", beneficiaries: 700 },
    { region: "Ohangwena", beneficiaries: 300 },
    { region: "Otjozondjupa", beneficiaries: 600 },
    { region: "Karas", beneficiaries: 400 },
    { region: "Hardap", beneficiaries: 250 },
];


const RegionGraph = () => {
    return (
 <Graphs title="Beneficiaries by Region" desc="Distribution across Namibia's 14 regions">
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

export default RegionGraph;