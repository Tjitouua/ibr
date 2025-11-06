import React, { useState } from 'react';

interface Beneficiary {
    id: string;
    name: string;
    age: number;
    gender: string;
    region: string;
    program: string;
    status: "Active" | "Inactive" | "Pending"
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

    const beneficiaries: Beneficiary[] = [
        {
           id: "07110200628",
           name: "Beatrix Hengua",
           age: 43,
           gender: "Female",
           region: "Otjozondjupa",
           program: "Old Age Grant",
           status: "Active",
        },
        {
            id: "07110200629",
            name: "Tjitouua Mapoha",
            age: 23,
            gender: "Male",
            region: "Khomas",
            program: "Child Grant",
            status: "Inactive",
         },
         {
            id: "07110200627",
            name: "Weriuka Hipose",
            age: 23,
            gender: "Female",
            region: "Otjozondjupa",
            program: "Child Grant",
            status: "Pending",
         },
   ];

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
            case "Inactive":
                return "inline-block py-1 text-[12px] px-2 rounded-xl bg-red-700/70 text-white";
            case "Pending":
                return "inline-block py-1 text-[12px] px-2 rounded-xl border border-gray-400";
         }
   }





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
                <td className="px-2 py-2 text-left">{b.id}</td>
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
                    <button className="px-3 rounded-sm cursor-pointer py-2 flex justify-center items-center hover:text-white hover:bg-blue-600">View</button>
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








