
// import Graphs from "../ui/Graphs";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, type PieLabelRenderProps } from "recharts";
import Graphs from "./Graphs";



const PaymentsByProgrammeGraph = () => {

    const paymentData = [
       { name: "CBIG", value: 25369, amount: 16520400 },
       { name: "Temporary Disability Grant", value: 4896, amount: 16520400 },
       { name: "Permanent Disability Grant", value: 53852, amount: 16520400 },
       { name: "Old Age Grant", value: 223434, amount: 16520400 },
       { name: "Street Committee Member", value: 11100, amount: 16520400 },
       { name: "Assistant Teachers", value: 22900, amount: 16520400 },
       { name: "Casual Workers", value: 17000, amount: 11520400 },
       { name: "Cooks", value: 21400, amount: 1320400 },
       { name: "Coordinator", value: 12865, amount: 13520400 },
    ];

    const COLORS = ["#36454F", "#1434A4", "#D22B2B", "#4F7942", "#F28C28", "#7F00FF", "#1D968B", "#080707", "#AB225B"];


     return (    
    <Graphs title="Total payments by Programme" desc="Breakdown of payments for every social program">
        <div className="w-full h-90 mt-2 text-[10px] font-bold text-black">
            <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                       <Pie 
                          data={paymentData} 
                          dataKey="value" 
                          nameKey="name" 
                          outerRadius={160} 
                          label={(props: any) => {
                            const name = props.name;
                            const percent = props.percent ?? 0;
                            return `${name}: ${(percent * 100).toFixed(0)}%`;
                          }}
                         >
                          {paymentData.map((entry, index) => (
                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                          ))}
                       </Pie>
                       <Tooltip 
                       formatter={(value: number, name: string, props: any) => {
                           const amount = props.payload.amount;
                           return [`${value} enrollments`, `Amount: N$ ${amount.toLocaleString()}`]
                       }} 
                       />
                  </PieChart>
            </ResponsiveContainer>
        </div>
    </Graphs>

     );
}

export default PaymentsByProgrammeGraph;
