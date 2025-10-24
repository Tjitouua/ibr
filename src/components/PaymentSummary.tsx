import PaymentSummaryCard from "../ui/PaymentSummaryCard";



const PaymentSummary = () => {
     return (
        <div className="w-full rounded-lg flex justify-between items-center gap-3">
            <PaymentSummaryCard
                title="Total Paid"
                amount="15 000"
                desc="October 2025"
            />

            <PaymentSummaryCard
                title="Pending"
                amount="1 000"
                desc="Awaiting processing"
            />

            <PaymentSummaryCard
                title="Failed"
                amount="0"
                desc="Requires attention"
            />
        </div>
     );
}

export default PaymentSummary;