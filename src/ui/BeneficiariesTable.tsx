import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Beneficiary {
    id: string;
    id_number: string;
    name: string;
    age: number;
    gender: string;
    region: string;
    program: string;
    status: "Active" | "Exit"
}

interface Props {
    searchQuery:string;
    filters: {
        Region: string;
        Gender: string;
        Program: string;
        Status: string;
    }
}



const BeneficiariesTable: React.FC<Props> = ({ searchQuery, filters }) => {
    const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
          fetch("http://localhost/backend_ibr/getBeneficiaries.php")
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                console.log("Fetched data:", data);
                // Ensure data is an array
                const beneficiariesArray = Array.isArray(data) ? data : [data];
                setBeneficiaries(beneficiariesArray);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch beneficiaries: ", err);
                setLoading(false);
            });
    }, []);


    console.log("Filter values:", filters);
    console.log("Beneficiaries:", beneficiaries);





   const normalizedQuery = searchQuery.toLowerCase();


   const filteredData = beneficiaries.filter((b) => {
      const matchesSearch = Object.values(b).join(" ").toLowerCase().includes(normalizedQuery);

      const matchesFilters = 
      (!filters.Region || b.region.toLowerCase() === filters.Region.toLowerCase()) &&
      (!filters.Gender || b.gender.toLowerCase() === filters.Gender.toLowerCase()) &&
      (!filters.Program || b.program.toLowerCase() === filters.Program.toLowerCase()) &&
      (!filters.Status || b.status.toLowerCase() === filters.Status.toLowerCase());

      return matchesSearch && matchesFilters;
   });



   const getStatusBadge = (status: Beneficiary["status"]): string => {
         switch (status) {
            case "Active":
                return "inline-block py-1 text-[12px] px-2 rounded-xl bg-blue-600/70 text-white";
            case "Exit":
                return "inline-block py-1 text-[12px] px-2 rounded-xl bg-red-700/70 text-white";
            // case "Pending":
                // return "inline-block py-1 text-[12px] px-2 rounded-xl border border-gray-400";
         }
   }


   const navigate = useNavigate();


   const handleEdit = (id: string) => {
        navigate(`/new_beneficiary/${id}`)
   };





    return (
    <div className="flex flex-col gap-1 w-full">
        <label className="text-[14px] text-gray-400">Showing {filteredData.length} of {beneficiaries.length} beneficiaries</label>
    <table className="text-sm text-gray-500 bg-white">
        <thead className="border-b border-gray-300 bg-white">
            <tr>
                <th className="px-3 py-3 text-left">ID</th>
                <th className="px-3 py-3 text-left">Name</th>
                <th className="px-3 py-3 text-left">Age</th>
                <th className="px-3 py-3 text-left">Gender</th>
                <th className="px-3 py-3 text-left">Region</th>
                <th className="px-3 py-3 text-left">Program</th>
                <th className="px-3 py-3 text-left">Status</th>
                <th className="px-3 py-3 text-left">Actions</th>
            </tr>
        </thead>
        <tbody>
            {filteredData.map((b) => (
            <tr className="border-b border-gray-300">
                <td className="px-2 py-2 text-left">{b.id_number}</td>
                <td className="px-2 py-2 text-left">{b.name}</td>
                <td className="px-2 py-2 text-left">{b.age}</td>
                <td className="px-2 py-2 text-left">{b.gender}</td>
                <td className="px-2 py-2 text-left">{b.region}</td>
                <td className="px-2 py-2 text-left">{b.program}</td>
                <td className="px-2 py-2 text-left">
                    <div className={getStatusBadge(b.status)}>
                      {b.status}
                    </div>
                </td>
                <td className="px-2 py-2 text-left">
                    <button onClick={() => handleEdit(b.id)} className="px-3 rounded-sm cursor-pointer py-2 flex justify-center items-center hover:text-white hover:bg-blue-600">View</button>
                </td>
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


export default BeneficiariesTable;







