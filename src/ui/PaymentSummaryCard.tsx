


interface PaymentSummaryCardProps {
    title: string;
    amount: string;
    desc?: string;
}



const PaymentSummaryCard = ({ title, amount, desc }: PaymentSummaryCardProps) => {
     return (
         <div className="py-5 px-5 w-1/3 rounded-lg border flex flex-col gap-1 border-gray-300">
           <label className="text-sm font-bold text-gray-600">{title}</label>
           <label className="text-xl font-bold">N$ {amount}</label>
           <label className="text-[13px] text-gray-800">{desc}</label>
         </div>
     );
}

export default PaymentSummaryCard;