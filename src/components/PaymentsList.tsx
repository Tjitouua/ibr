import { IoSearchSharp } from "react-icons/io5";
import Filters from "./Filters";
import React, { useEffect, useState } from "react";
import PaymentsTable from "../ui/PaymentsTable";
import { LuFilter } from "react-icons/lu";
import PaymentFilters from "./PaymentFilters";


  interface Payments {
  payment_id: string;
  beneficiary: string;
  amount: number;
  payment_date: string;
  program: string;
  region: string;
  payment_status: "Completed" | "Pending";
}



const PaymentsList: React.FC = () => {
   const [payments, setPayments] = useState<Payments[]>([]);
   const [loading, setLoading] = useState(true);
    
       
    const [showFilters, setShowFilters] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");


    const [selectedFilters, setSelectedFilters] = useState({
       Status: "",
       Month: "",
       Year: "",
    });

    const handleFilterChange = (category: string, value: string) => {
       setSelectedFilters((prev) => ({
         ...prev,
         [category]: value,
       }));
    };
    


    const filterCategories = [

       {
          name: "Status",
          options: [
            { label: "Completed", value: "Completed" },
            { label: "Pending", value: "Pending" },
          ], 
       },

    ];



    useEffect(() => {
       fetch("http://localhost/backend_ibr/getPayments.php")
       .then(res => res.json())
       .then((data) => {
         setPayments(data);
         setLoading(false);
       })
       .catch((err) => {
         console.error(err);
         setLoading(false);
       })
    }, []);







/*

    const beneficiaries: Payments[] = [
        {
           paymentId: "PAY011",
           beneficiary: "Sarah Johnson",
           amount: 850,
           date: "Oct 30, 2025",
           program: "Food Support",
           region: "Erongo",
           status: "Completed",
        },
        {
            paymentId: "PAY012",
            beneficiary: "Michael Chen",
            amount: 1200,
            date: "Oct 31, 2025",
            program: "Senior Care",
            region: "Khomas",
            status: "Completed",
         },
         {
            paymentId: "PAY013",
            beneficiary: "Emma Williams",
            amount: 650,
            date: "Oct 30, 2025",
            program: "Child Grant",
            region: "Otjozondjupa",
            status: "Pending",
         },
         {
            paymentId: "PAY014",
            beneficiary: "Lisa Anderson",
            amount: 650,
            date: "Oct 31, 2025",
            program: "Child Grant",
            region: "Khomas",
            status: "Completed",
         },

   ];
   */

   const totalPayments = payments.length;


    const filteredPayments = payments.filter((b) => {
    if (selectedFilters.Status && b.payment_status !== selectedFilters.Status) {
      return false;
    }
    return true;
  });




     return (
        <div className="w-full min-h-200 py-3 px-5 mb-15 flex flex-col gap-3 bg-white rounded-lg border border-gray-300">
            {/* Top Div  */}
            <div className="flex flex-col gap-3 bg-white">

            <div className="flex flex-col">
            <label className="font-bold text-lg">Payment Transactions</label>
            <label className="text-sm text-gray-500">{filteredPayments.length} out of {totalPayments} payment(s) completed in October 2025</label>
            </div>
            {/* Search Div  */}
            <div className="flex w-full justify-between items-center">
            <div className="flex w-[86%] px-3 rounded-md border items-center justify-start gap-2 border-gray-400 focus-within:border-black">
                <IoSearchSharp className="text-gray-500" />
                <input className="px-3 py-2 w-full outline-none border-none focus:ring-0" placeholder="Search Payments" type="text" onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
            <button onClick={() => setShowFilters(!showFilters)} className="flex justify-center items-center gap-3 rounded-lg border border-gray-400 py-2 px-5 w-[13%] hover:bg-blue-600 hover:text-white cursor-pointer"><LuFilter /> Filter</button>
            </div>

            </div>


            
            {/* Filtering Div  */}
            {showFilters && (
                <PaymentFilters
                  categories={filterCategories} 
                  selectedGrievancesFilters={selectedFilters}
                  onChange={handleFilterChange}
                />
            )}






            {/* Table  */}
            <PaymentsTable searchQuery={searchQuery} data={filteredPayments}/>
        </div>
     );
}

export default PaymentsList;