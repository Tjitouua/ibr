
import Graphs from "../ui/Graphs";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, type PieLabelRenderProps } from "recharts";



const ExitsProgrammeGraph = () => {

    const genderData = [
       { name: "CBIG", value: 25369 },
       { name: "Temporary Disability Grant", value: 4896 },
       { name: "Permanent Disability Grant", value: 53852 },
       { name: "Old Age Grant", value: 223434 },
       { name: "Street Committee Member", value: 11100 },
       { name: "Assistant Teachers", value: 22900 },
    ];

    const COLORS = ["#36454F", "#1434A4", "#D22B2B", "#4F7942", "#F28C28", "#7F00FF"];


     return (    
    <Graphs title="Exits by Programme" desc="Distribution of exits across programmes">
        <div className="w-full h-70 mt-2 text-[10px] font-bold text-black">
            <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                       <Pie 
                          data={genderData} 
                          dataKey="value" 
                          nameKey="name" 
                          outerRadius={105} 
                          label={(props: any) => {
                            const name = props.name;
                            const percent = props.percent ?? 0;
                            return `${name}: ${(percent * 100).toFixed(0)}%`;
                          }}
                         >
                          {genderData.map((entry, index) => (
                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                          ))}
                       </Pie>
                       <Tooltip formatter={(value) => `${value} enrollments`} />
                  </PieChart>
            </ResponsiveContainer>
        </div>
    </Graphs>

     );
}

export default ExitsProgrammeGraph;
