import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import Graphs from "./Graphs";


const payments = [
    { month: "June", payment: 185000 },
    { month: "July", payment: 195000 },
    { month: "August", payment: 210000 },
    { month: "September", payment: 225000 },
    { month: "October", payment: 235000 },
    { month: "November", payment: 251000 },
];


const MonthlyPaymentGraph = () => {
    return ( 
    <Graphs title="Payment Trends" desc="Monthly payment distribution">
        <div className="w-full h-90 mt-2 text-[10px] font-bold text-black">
           <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={payments} margin={{ top: 0, right: 30, left: 0, bottom: 15 }}>
                    <XAxis dataKey="month" interval={0} angle={-30} textAnchor="end" />
                    <YAxis />
                    <Tooltip formatter={(payment: number) => `N$ ${payment.toLocaleString()}`} />
                    <Bar dataKey="payment" fill="#36454F" />
                 </BarChart>
           </ResponsiveContainer>
        </div>
    </Graphs>
    );
}

export default MonthlyPaymentGraph;