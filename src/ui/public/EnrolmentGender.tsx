
// import Graphs from "../ui/Graphs";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, type PieLabelRenderProps } from "recharts";
import Graphs from "./Graphs";
import { useEffect, useState } from "react";


interface GenderAPIResponse {
    total_enrollments: string;
    males: string;
    females: string;
};

interface GenderChartData {
    name: string;
    value: number;
};



const EnrolmentGender = () => {
   const [genderData, setGenderData] = useState<GenderChartData[]>([]);
   const [loading, setLoading] = useState(true);

   /*
    const genderData = [
       { name: "Male", value: 900 },
       { name: "Female", value: 1300 },
    ];
    */

    const COLORS = ["#36454F", "#1434A4"];
    useEffect (() => {
          fetch("http://localhost/backend_ibr/getDashboardStats.php")
          .then(res => res.json())
          .then((data: GenderAPIResponse) => {
              setGenderData([
                 { name: "Male", value: Number(data.males) },
                 { name: "Female", value: Number(data.females) }
              ]);
              setLoading(false);
          })
          .catch(err => {
              console.error("Failed to fetch gender data: ", err);
              setLoading(false);
          });
        }, []);
    
        if(loading) {
           return <p className="text-xs">Loading gender data...</p>
        }
    
        if(genderData.length === 0) {
           return <p className="text-xs">No gender data available</p>
        }
    


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
