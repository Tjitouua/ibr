
import { useEffect, useState } from "react";
import Graphs from "../ui/Graphs";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, type PieLabelRenderProps } from "recharts";


  interface ReasonAPIResponse {
    death: string;
    expired_grant: string;
  }

  interface ReasonChartData {
     name: string;
     value: number;
  }



const ExitsReasonGraph = () => {
    const [reasonData, setReasonData] = useState<ReasonChartData[]>([]);
    const [loading, setLoading] = useState(true);

/*
    const genderData = [
       { name: "Expired Grant", value: 900 },
       { name: "Death", value: 1100 },
    ];
*/


    const COLORS = ["#36454F", "#1434A4"];

    useEffect(() => {
      fetch("http://localhost/backend_ibr/getExitsReasonStats.php")
      .then(res => res.json())
      .then(data => {
         setReasonData([
           { name: "Death", value: Number(data.death) },
           { name: "Expired Grant", value: Number(data.expired_grant) }
         ]);
         setLoading(false)
      })
      .catch(err => console.error("Failed to fetch gender data: ", err));
      setLoading(false);
    }, []);

    if(loading) {
      return <p className="text-xs">Loading reason data...</p>
    }

    if(reasonData.length == 0) {
      return <p className="text-xs">No reason data available</p>
    }


     return (    
    <Graphs title="Exit by Reasons" desc="Main reasons for programme exits">
        <div className="w-full h-70 mt-2 text-[10px] font-bold text-black">
            <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                       <Pie 
                          data={reasonData} 
                          dataKey="value" 
                          nameKey="name" 
                          outerRadius={90} 
                          label={(props: any) => {
                            const name = props.name;
                            const percent = props.percent ?? 0;
                            return `${name}: ${(percent * 100).toFixed(0)}%`;
                          }}
                         >
                          {reasonData.map((entry, index) => (
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

export default ExitsReasonGraph;
