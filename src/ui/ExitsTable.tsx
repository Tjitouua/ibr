import React, { useState } from 'react';

interface Beneficiary {
    id: string;
    name: string;
    programme: string;
    gender: string;
    region: string;
    exit_date: string;
    reason: "Death" | "Expired Grant" 
}

interface Props {
    searchQuery:string;
    exitfilters: {
        Reason: string;
        // Gender: string;
        // Program: string;
        // Status: string;
    }
}



const ExitsTable: React.FC<Props> = ({ searchQuery, exitfilters }) => {

    const beneficiaries: Beneficiary[] = [
        {
           id: "07110200628",
           name: "Charles Gerson",
           programme: "Old Age Grant",
           gender: "Male",
           region: "Otjozondjupa",
           exit_date: "2024-01-05",
           reason: "Death",
        },
        {
            id: "071102004567",
            name: "Melody Sam",
            programme: "Temporary Disability Grant",
            gender: "Female",
            region: "Otjozondjupa",
            exit_date: "2025-04-21",
            reason: "Death",
         },
         {
            id: "071134567548",
            name: "Steven Moses",
            programme: "Old Age Grant",
            gender: "Maleale",
            region: "Khomas",
            exit_date: "2025-03-03",
            reason: "Expired Grant",
         },
   ];

   const normalizedQuery = searchQuery.toLowerCase();

   const filteredData = beneficiaries.filter((b) => {
      const matchesSearch = Object.values(b).join(" ").toLowerCase().includes(normalizedQuery);

      const matchesFilters = 
      (!exitfilters.Reason || b.reason.toLowerCase() === exitfilters.Reason.toLowerCase())
    //   (!filters.Region || b.region.toLowerCase() === filters.Region.toLowerCase()) &&
    //   (!filters.Gender || b.gender.toLowerCase() === filters.Gender.toLowerCase()) &&
    //   (!filters.Program || b.program.toLowerCase() === filters.Program.toLowerCase()) &&
    //   (!filters.Status || b.status.toLowerCase() === filters.Status.toLowerCase());

      return matchesSearch && matchesFilters;
   });


   const getStatusBadge = (status: Beneficiary["reason"]): string => {
         switch (status) {
            case "Death":
                return "inline-block py-1 text-[12px] px-2 rounded-xl bg-blue-600/70 text-white";
            case "Expired Grant":
                return "inline-block py-1 text-[12px] px-2 rounded-xl bg-red-700/70 text-white";
            // case "Pending":
                // return "inline-block py-1 text-[12px] px-2 rounded-xl border border-gray-400";
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
                <th className="px-3 py-3 text-left">Programme</th>
                <th className="px-3 py-3 text-left">Gender</th>
                <th className="px-3 py-3 text-left">Region</th>
                <th className="px-3 py-3 text-left">Exit Date</th>
                <th className="px-3 py-3 text-left">Reason</th>
            </tr>
        </thead>
        <tbody>
            {filteredData.map((b) => (
            <tr className="border-b border-gray-300">
                <td className="px-2 py-2 text-left">{b.id}</td>
                <td className="px-2 py-2 text-left">{b.name}</td>
                <td className="px-2 py-2 text-left">{b.programme}</td>
                <td className="px-2 py-2 text-left">{b.gender}</td>
                <td className="px-2 py-2 text-left">{b.region}</td>
                <td className="px-2 py-2 text-left">{b.exit_date}</td>
                <td className="px-2 py-2 text-left">
                    <div className={getStatusBadge(b.reason)}>
                      {b.reason}
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


export default ExitsTable;
