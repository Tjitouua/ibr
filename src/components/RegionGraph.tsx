import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import Graphs from "../ui/Graphs";
import { useEffect, useState } from "react";

 
interface RegionData {
   region: string;
   beneficiaries: number;
}


/*

const regions = [
    { region: "Khomas", beneficiaries: 500 },
    { region: "Erongo", beneficiaries: 700 },
    { region: "Ohangwena", beneficiaries: 300 },
    { region: "Otjozondjupa", beneficiaries: 600 },
    { region: "Karas", beneficiaries: 400 },
    { region: "Hardap", beneficiaries: 300 },
    { region: "Oshana", beneficiaries: 540 },
    { region: "Oshikoto", beneficiaries: 800 },
    { region: "Omusati", beneficiaries: 150 },
    { region: "Kunene", beneficiaries: 370 },
    { region: "Zambezi", beneficiaries: 200 },
    { region: "Kavango East", beneficiaries: 690 },
    { region: "Kavango West", beneficiaries: 480 },
    { region: "Omaheke", beneficiaries: 430 },
];

*/


const RegionGraph = () => {
   const [regions, setRegions] = useState<RegionData[]>([]);
   const [loading, setLoading] = useState(true);
   
   useEffect(() => {
      fetch("http://localhost/backend_ibr/getRegionsStats.php")
      .then(res => res.json())
      .then(data => {
         setRegions(data);
         setLoading(false);
      })
      .catch(err => {
         console.error("failed to fetch region data: ", err);
         setLoading(false);
      });
   }, []);


   if (loading) {
       return <p className="text-xs">Loading region data...</p>
   }

   if (regions.length === 0) {
       return <p className="text-xs">No region data available</p>
   }



    return (
 <Graphs title="Enrollments by Region" desc="Distribution across Namibia's 14 regions">
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