
import { useEffect, useState } from "react";
import Graphs from "../ui/Graphs";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, type PieLabelRenderProps } from "recharts";




  interface ProgramData {
      name: string;
      value: number;
  }

  const COLORS = ["#36454F", "#1434A4", "#D22B2B", "#4F7942", "#F28C28", "#7F00FF"];



const ProgramGraph = () => {
   const [programData, setProgramData] = useState<ProgramData[]>([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
     fetch("http://localhost/backend_ibr/getProgramsStat.php")
     .then(res => res.json())
     .then(data => {
         setProgramData(data);
         setLoading(false);
     })
     .catch(err => {
        console.error("Failed to fetch program stats:", err);
        setLoading(false);
     });
   }, []);

   if(loading) {
     return <p className="text-xs">Loading programme data...</p>
   }

   if(programData.length === 0) {
      return <p className="text-xs">No programme data available</p>
   }




/*
    const genderData = [
       { name: "CBIG", value: 25369 },
       { name: "Temporary Disability Grant", value: 4896 },
       { name: "Permanent Disability Grant", value: 53852 },
       { name: "Old Age Grant", value: 223434 },
       { name: "Street Committee Member", value: 11100 },
       { name: "Assistant Teachers", value: 22900 },
    ];
    */

    // const COLORS = ["#36454F", "#1434A4", "#D22B2B", "#4F7942", "#F28C28", "#7F00FF"];


     return (    
    <Graphs title="Enrollments by Programme" desc="Programme distribution overview">
        <div className="w-full h-70 mt-2 text-[10px] font-bold text-black">
            <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                       <Pie 
                          data={programData} 
                          dataKey="value" 
                          nameKey="name" 
                          outerRadius={105} 
                          label={(props: any) => {
                            const name = props.name;
                            const percent = props.percent ?? 0;
                            return `${name}: ${(percent * 100).toFixed(0)}%`;
                          }}
                         >
                          {programData.map((entry, index) => (
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

export default ProgramGraph;
