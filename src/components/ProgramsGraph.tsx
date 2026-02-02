import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import Graphs from "../ui/Graphs";
import { useEffect, useState } from "react";

/*
const regions = [
    { program: "CBIG", enrolled: 20400 },
    { program: "Temporary Disability Grant", enrolled: 96800 },
    { program: "Permanent Disability Grant", enrolled: 41600 },
    { program: "Street Committee Member", enrolled: 24500 },
    { program: "Assistant Teachers", enrolled: 34000 },
    { program: "Old Age Grant", enrolled: 50400 },

];
*/


const ProgramsGraph = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
      fetch("http://localhost/backend_ibr/getPaymentsByProgrammeStats.php")
      .then((res) => res.json())
      .then(setData)
      .catch(err => console.error("Failed to fetch data: ", err))
   }, []);



    return (
 <Graphs title="Total payments by Programme" desc="Payments across all Programme">
    <div className="w-full h-70 mt-2 text-[10px] font-bold text-black">
       <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 0, right: 30, left: 0, bottom: 15 }}>
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="program" interval={0} angle={-30} textAnchor="end" />
               <YAxis />
               <Tooltip />
               <Bar dataKey="payments" fill="#36454F" />
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



