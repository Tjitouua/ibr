import React, { useEffect, useState } from 'react';
import GrievancesFilters from '../components/GrievancesFilters';

interface Complaints {
    id: string;
    name: string;
    complaint_category: string;
    subject: string;
    created_at: string;
    status: "Open" | "Resolved" 
}

interface Props {
    searchQuery:string;
    grievancesfilters: {
        Status: string;
    }
}



const GrievancesTable: React.FC<Props> = ({ searchQuery, grievancesfilters }) => {

    const [complaints, setComplaints] = useState<Complaints[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost/backend_ibr/getComplaints.php")
        .then((res) => res.json())
        .then((data) => {
            setComplaints(data);
            setLoading(false);
        })
        .catch((err) => {
            console.error(err);
            setLoading(false);
        })
    }, []);



   const normalizedQuery = searchQuery.toLowerCase();

   const filteredData = complaints.filter((c) => {
      const matchesSearch = Object.values(c).join(" ").toLowerCase().includes(normalizedQuery);

      const matchesFilters = 
      (!grievancesfilters.Status || c.status.toLowerCase() === grievancesfilters.Status.toLowerCase())
      return matchesSearch && matchesFilters;
   });


   const getStatusBadge = (status: Complaints["status"]): string => {
         switch (status) {
            case "Open":
                return "inline-block py-1 text-[12px] px-2 rounded-xl bg-blue-600/70 text-white";
            case "Resolved":
                return "inline-block py-1 text-[12px] px-2 rounded-xl bg-red-700/70 text-white";
         }
   }





    return (
    <div className="flex flex-col gap-1 w-full">
        <label className="text-[14px] text-gray-400">Showing {filteredData.length} of {complaints.length} complaints</label>
    <table className="text-sm text-gray-500 bg-white">
        <thead className="border-b border-gray-300 bg-white">
            <tr>
                <th className="px-3 py-3 text-left">Case ID</th>
                <th className="px-3 py-3 text-left">Beneficiary</th>
                <th className="px-3 py-3 text-left">Category</th>
                <th className="px-3 py-3 text-left">Description</th>
                <th className="px-3 py-3 text-left">Date</th>
                <th className="px-3 py-3 text-left">Status</th>
            </tr>
        </thead>
        <tbody>
            {filteredData.map((c) => (
            <tr className="border-b border-gray-300">
                <td className="px-2 py-2 text-left">GRV-{c.id}</td>
                <td className="px-2 py-2 text-left">{c.name}</td>
                <td className="px-2 py-2 text-left">{c.complaint_category}</td>
                <td className="px-2 py-2 text-left">{c.subject}</td>
                {/* <td className="px-2 py-2 text-left">{b.region}</td> */}
                <td className="px-2 py-2 text-left">{new Date(c.created_at).toLocaleDateString()}</td>
                <td className="px-2 py-2 text-left">
                    <div className={getStatusBadge(c.status)}>
                      {c.status}
                    </div>
                </td>
                {/* <td className="px-2 py-2 text-left"> */}
                    {/* <button className="px-3 rounded-sm cursor-pointer py-2 flex justify-center items-center hover:text-white hover:bg-blue-600">View</button> */}
                {/* </td> */}
            </tr>
            ))}


            {filteredData.length === 0 && (
               <tr>
                  <td colSpan={8} className="text-center py-5 text-gray-400">
                    No beneficiaries found
                  </td>
               </tr>
            )}



        </tbody>
    </table>
    </div>
    );
}


export default GrievancesTable;




/*


    const complaints: Complaints[] = [
        {
            case_id: "GRV-401",
            beneficiary: "Paulus Erastus",
            category: "Payment Delay",
            description: "Payment for October not received",
            date: "2025-11-05",
            status: "Open" 
        },
        {
            case_id: "GRV-402",
            beneficiary: "Natasha Simasiku",
            category: "Account Suspension",
            description: "Account suspended without notice",
            date: "2025-11-07",
            status: "Resolved" 
        },
        {
            case_id: "GRV-403",
            beneficiary: "Natasha Evans",
            category: "Payment Failed",
            description: "Bank transfer failed (incorrect account details)",
            date: "2025-11-10",
            status: "Open" 
        },
   ];

   */