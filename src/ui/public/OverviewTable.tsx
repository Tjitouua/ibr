import React, { useState } from 'react';

interface Beneficiary {
    benefit: string;
    enrolment: number;
    males: number;
    females: number;
    exits: number;
    registration: number;
    amount: number;
    percent: number;
    // status: "Active" | "Inactive" | "Pending"
}




const OverviewTable = () => {

    const beneficiaries: Beneficiary[] = [
        {
           benefit: "CBIG",
           enrolment: 25369,
           males: 7582,
           females: 16570,
           exits: 0,
           registration: 27534,
           amount: 16520400,
           percent: 13,
        },
        {
            benefit: "CLEANERS",
            enrolment: 25369,
            males: 7582,
            females: 16570,
            exits: 0,
            registration: 27534,
            amount: 16520400,
            percent: 13,
         },
         {
            benefit: "TEMPORARY DISABILITY GRANT",
            enrolment: 25369,
            males: 7582,
            females: 16570,
            exits: 0,
            registration: 27534,
            amount: 16520400,
            percent: 13,
         },
         {
            benefit: "PERMANENT DISABILITY GRANT",
            enrolment: 25369,
            males: 7582,
            females: 16570,
            exits: 0,
            registration: 27534,
            amount: 16520400,
            percent: 13,
         },
         {
            benefit: "COOKS",
            enrolment: 25369,
            males: 7582,
            females: 16570,
            exits: 0,
            registration: 27534,
            amount: 16520400,
            percent: 13,
         },
         {
            benefit: "COORDINATOR",
            enrolment: 25369,
            males: 7582,
            females: 16570,
            exits: 0,
            registration: 27534,
            amount: 16520400,
            percent: 13,
         },
         {
            benefit: "CASUAL WORKERS",
            enrolment: 25369,
            males: 7582,
            females: 16570,
            exits: 0,
            registration: 27534,
            amount: 16520400,
            percent: 13,
         },
         {
            benefit: "ASSISTANT TEACHERS",
            enrolment: 25369,
            males: 7582,
            females: 16570,
            exits: 0,
            registration: 27534,
            amount: 16520400,
            percent: 13,
         },
         {
            benefit: "OLD AGE GRANT",
            enrolment: 25369,
            males: 7582,
            females: 16570,
            exits: 0,
            registration: 27534,
            amount: 16520400,
            percent: 13,
         },
   ];



    return (
    <div className="flex flex-col gap-1 w-full">
        {/* <label className="text-[14px] text-gray-400">Showing {filteredData.length} of {beneficiaries.length} beneficiaries</label> */}
    <table className="text-sm text-gray-500 bg-white">
        <thead className="border-b border-gray-300 bg-white">
            <tr>
                <th className="px-3 py-3 text-left">Benefit</th>
                <th className="px-3 py-3 text-left">Enrolment</th>
                <th className="px-3 py-3 text-left">Males</th>
                <th className="px-3 py-3 text-left">Females</th>
                <th className="px-3 py-3 text-left">Exits</th>
                <th className="px-3 py-3 text-left">Registration</th>
                <th className="px-3 py-3 text-left">Amount</th>
                {/* <th className="px-3 py-3 text-left">Percent %</th> */}
            </tr>
        </thead>
        <tbody>
            {beneficiaries.map((b) => (
            <tr className="border-b border-gray-300">
                <td className="px-2 py-3 text-left">{b.benefit}</td>
                <td className="px-2 py-3 text-left font-bold ">{b.enrolment}</td>
                <td className="px-2 py-3 text-left ">{b.males}</td>
                <td className="px-2 py-3 text-left font-bold ">{b.females}</td>
                <td className="px-2 py-3 text-left">{b.exits}</td>
                <td className="px-2 py-3 text-left font-bold">{b.registration}</td>
                <td className="px-2 py-3 text-left">
                    <div className="min-w-2 bg-orange-300 inline-flex py-1 px-3 rounded text-black ">N$ {b.amount.toLocaleString()}</div>
                    </td>
                {/* <td className="px-2 py-3 text-left font-bold">{b.percent}</td> */}
            </tr>
             ))} 



        </tbody>
    </table>
    </div>
    );
}


export default OverviewTable;
