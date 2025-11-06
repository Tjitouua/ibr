import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import Graphs from "../ui/Graphs";

const regions = [
    { program: "CBIG", enrolled: 16520400 },
    { program: "Temporary Disability Grant", enrolled: 17196800 },
    { program: "Permanent Disability Grant", enrolled: 102241600 },
    { program: "Street Committee Member", enrolled: 4500 },
    { program: "Assistant Teachers", enrolled: 4000 },
    { program: "Old Age Grant", enrolled: 609150400 },

];


const ProgramsGraph = () => {
    return (
 <Graphs title="Enrollments by Region" desc="Distribution across Namibia's 14 regions">
    <div className="w-full h-70 mt-2 text-[10px] font-bold text-black">
       <ResponsiveContainer width="100%" height="100%">
            <BarChart data={regions} margin={{ top: 0, right: 30, left: 0, bottom: 15 }}>
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="program" interval={0} angle={-30} textAnchor="end" />
               <YAxis tickFormatter={(value) => `${(value / 1_000_000).toFixed(0)}M`} />
               <Tooltip />
               <Bar dataKey="enrolled" fill="#36454F" />
            </BarChart>
       </ResponsiveContainer>
    </div>
 </Graphs>
    );
}

export default ProgramsGraph;





/*



    { program: "CBIG", enrolled: 16520400 },
    { program: "Temporary Disability Grant", enrolled: 17196800 },
    { program: "Permanent Disability Grant", enrolled: 102241600 },
    { program: "Street Committee Member", enrolled: 4500 },
    { program: "Assistant Teachers", enrolled: 4000 },
    { program: "Old Age Grant", enrolled: 609150400 },




*/



