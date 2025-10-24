
interface Beneficiary {
    paymentId: string;
    beneficiary: string;
    amount: number;
    date: string;
    program: string;
    status: "Completed" | "Failed" | "Pending"
}



const PaymentsTable = () => {
           
    const beneficiaries: Beneficiary[] = [
        {
           paymentId: "PAY011",
           beneficiary: "Sarah Johnson",
           amount: 850,
           date: "Oct 30, 2025",
           program: "Food Support",
           status: "Completed",
        },
        {
            paymentId: "PAY012",
            beneficiary: "Michael Chen",
            amount: 1200,
            date: "Oct 31, 2025",
            program: "Senior Care",
            status: "Completed",
         },
         {
            paymentId: "PAY013",
            beneficiary: "Emma Williams",
            amount: 650,
            date: "Oct 30, 2025",
            program: "Child Grant",
            status: "Failed",
         },
         {
            paymentId: "PAY014",
            beneficiary: "Lisa Anderson",
            amount: 650,
            date: "Oct 31, 2025",
            program: "Child Grant",
            status: "Completed",
         },

   ];


   const getStatusBadge = (status: Beneficiary["status"]): string => {
         switch (status) {
            case "Completed":
                return "inline-block py-1 text-[12px] px-2 rounded-xl bg-blue-600/70 text-white";
            case "Failed":
                return "inline-block py-1 text-[12px] px-2 rounded-xl bg-red-700/70 text-white";
            case "Pending":
                return "inline-block py-1 text-[12px] px-2 rounded-xl border border-gray-400";
         }
   }





    return (
    <div className="flex flex-col gap-1 w-full">
        {/* <label className="text-[14px] text-gray-400">Showing 7 of 10 beneficiaries</label> */}
    <table className="text-sm text-gray-500 bg-white">
        <thead className="border-b border-gray-300 bg-white">
            <tr>
                <th className="px-3 py-3 text-left">Payment ID</th>
                <th className="px-3 py-3 text-left">Beneficiary</th>
                <th className="px-3 py-3 text-left">Amount</th>
                <th className="px-3 py-3 text-left">Date</th>
                <th className="px-3 py-3 text-left">Program</th>
                <th className="px-3 py-3 text-left">Status</th>
                <th className="px-3 py-3 text-left">Actions</th>
            </tr>
        </thead>
        <tbody>
            {beneficiaries.map((b) => (
            <tr className="border-b border-gray-300">
                <td className="px-2 py-2 text-left">{b.paymentId}</td>
                <td className="px-2 py-2 text-left">{b.beneficiary}</td>
                <td className="px-2 py-2 text-left">{b.amount}</td>
                <td className="px-2 py-2 text-left">{b.date}</td>
                <td className="px-2 py-2 text-left">{b.program}</td>
                {/* <td className="px-2 py-2 text-left">{b.program}</td> */}
                <td className="px-2 py-2 text-left">
                    <div className={getStatusBadge(b.status)}>
                      {b.status}
                    </div>
                </td>
                <td className="px-2 py-2 text-left">
                    <button className="px-3 rounded-sm cursor-pointer py-2 flex justify-center items-center hover:text-white hover:bg-blue-600">View</button>
                </td>
            </tr>
            ))}
        </tbody>
    </table>
    </div>
    );
}


export default PaymentsTable;