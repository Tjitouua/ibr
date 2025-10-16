import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import Graphs from "../ui/Graphs";

const payments = [
    { month: "April", payment: 185000 },
    { month: "May", payment: 195000 },
    { month: "June", payment: 210000 },
    { month: "July", payment: 225000 },
    { month: "August", payment: 235000 },
    { month: "September", payment: 251000 },
];


const PaymentsGraph = () => {
    return ( 
    <Graphs title="Payment Trends" desc="Monthly payment distribution">
        <div className="w-full h-70 mt-2 text-[10px] font-bold text-black">
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

export default PaymentsGraph;