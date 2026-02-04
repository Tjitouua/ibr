import type React from "react";
import PaymentSummaryCard from "../ui/PaymentSummaryCard";
import { useEffect, useState } from "react";


  interface PaymentStats {
      total_budget: number;
      completed_payments: number;
      pending_payments: number;
  }



const PaymentSummary: React.FC = () => {
    const [paymentStats, setPaymentStats] = useState<PaymentStats | null>(null);

    useEffect(() => {
        fetch("http://localhost/backend_ibr/getPaymentStats.php")
        .then(res => res.json())
        .then(data => setPaymentStats(data))
        .catch(err => console.error("Failed to fetch payment stats: ", err))
    }, []);

    if(!paymentStats) {
        return <p className="text-xs">Loading payment stats....</p>
    }


     return (
        <div className="w-full rounded-lg flex justify-between items-center gap-3">
            <PaymentSummaryCard
                title="Total Budget"
                amount={Number(paymentStats.total_budget).toLocaleString()}
                desc="October 2025"
            />

            <PaymentSummaryCard
                title="Completed Payments"
                amount={Number(paymentStats.completed_payments).toLocaleString()}
                desc="Awaiting processing"
            />

            <PaymentSummaryCard
                title="Pending Payments"
                amount={Number(paymentStats.pending_payments).toLocaleString()}
                desc="Requires attention"
            />
        </div>
     );
}

export default PaymentSummary;