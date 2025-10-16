import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Graphs from "../ui/Graphs";


const programEnrollment = [
    { program: "Old Age Grant", enrolled: 180 },
    { program: "Child Grant", enrolled: 250 },
    { program: "Disability Grant", enrolled: 90 },
    { program: "Foster Care", enrolled: 120 },
    { program: "War Veterans", enrolled: 60 },
];



const ProgramsGraph: React.FC = () => {
    return (
                 
    <Graphs title="Program Enrollment" desc="Beneficiaries per program">
        <div className="w-full h-70 mt-2 text-[10px] font-bold text-black">
           <ResponsiveContainer width="100%" height="100%">
                 <LineChart
                    data={programEnrollment}
                    margin={{ top: 0, right: 30, left: 0, bottom: 15 }}
                 >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="program" interval={0} angle={-30} textAnchor="end" />
                    <YAxis />
                    <Tooltip formatter={(value) => `${value} enrolled`} />
                    <Line
                      type="monotone"
                      dataKey="enrolled"
                      stroke="#36454F"
                      strokeWidth={2}
                      dot={{r: 4}}
                      activeDot={{r: 6}}
                     />
                 </LineChart>
           </ResponsiveContainer>
        </div>
    </Graphs>
    );
}

export default ProgramsGraph;



