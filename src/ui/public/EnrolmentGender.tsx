
// import Graphs from "../ui/Graphs";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, type PieLabelRenderProps } from "recharts";
import Graphs from "./Graphs";



const EnrolmentGender = () => {

    const genderData = [
       { name: "Male", value: 900 },
       { name: "Female", value: 1300 },
    ];

    const COLORS = ["#36454F", "#1434A4"];


     return (    
    <Graphs title="Enrolment by Gender" desc="Overview of enrolment by male and female beneficiaries">
        <div className="w-full h-95 mt-2 text-[10px] font-bold text-black">
            <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                       <Pie 
                          data={genderData} 
                          dataKey="value" 
                          nameKey="name" 
                          outerRadius={160} 
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
                       <Tooltip formatter={(value) => `${value} beneficiaries`} />
                  </PieChart>
            </ResponsiveContainer>
        </div>
    </Graphs>

     );
}

export default EnrolmentGender;
