import AdminSideCard from "../ui/AdminSideCard";
import { IoSearchSharp } from "react-icons/io5";
import BeneficiariesTable from "../ui/BeneficiariesTable";
import { LuFilter } from "react-icons/lu";
import { useState } from "react";
import Filters from "./Filters";



const BeneficiariesList: React.FC = () => {

    const [showFilters, setShowFilters] = useState(false);


    const filterCategories = [
       {
          name: "Region",
          options: [
            { label: "Khomas", value: "Khomas" },
            { label: "Erongo", value: "erongo" },
            { label: "Oshana", value: "Oshana" },
            { label: "Kavango East", value: "Kavango East" },
            { label: "Zambezi", value: "Zambezi" },
            { label: "Kavango West", value: "Kavango West" },
            { label: "Ohangwena", value: "Ohangwena" },
            { label: "Omusati", value: "Omusati" },
            { label: "Oshikoto", value: "Oshikoto" },
            { label: "Kunene", value: "Kunene" },
            { label: "Omaheke", value: "Omaheke" },
            { label: "Hardap", value: "Hardap" },
            { label: "//Karas", value: "//Karas" },
            { label: "Otjozondjupa", value: "Otjozondjupa" },
          ],
       },
       {
          name: "Gender",
          options: [
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
          ], 
       },
       {
         name: "Program",
         options: [
           { label: "Old Age Grand", value: "Old Age Grand" },
           { label: "Child Grand", value: "Child Grand" },
           { label: "Disability Grand", value: "Disability Grand" },
           { label: "Food Support", value: "Food Support" },
           { label: "Foster Care", value: "Foster Care" },
         ],
       },
       {
         name: "Status",
         options: [
           { label: "Active", value: "Active" },
           { label: "Pending", value: "Pending" },
           { label: "Inactive", value: "Inactive" },
         ],
       },
    ];




     return (
        <div className="w-full min-h-200 py-3 px-5 mb-15 flex flex-col gap-3 bg-white rounded-lg border border-gray-300">
            {/* Top Div  */}
            <div className="flex flex-col gap-1 bg-white">

            <div className="flex flex-col">
            <label className="font-bold text-lg">Beneficiary List</label>
            <label className="text-sm text-gray-500">View and manage beneficiary information</label>
            </div>
            {/* Search Div  */}
            <div className="flex w-full justify-between items-center">
            <div className="flex w-[86%] px-3 rounded-md border items-center justify-start gap-2 border-gray-400 focus-within:border-black">
                <IoSearchSharp className="text-gray-500" />
                <input className="px-3 py-2 w-full outline-none border-none focus:ring-0" placeholder="Search Beneficiaries" type="text" />
            </div>
            <button onClick={() => setShowFilters(!showFilters)} className="flex justify-center items-center gap-3 rounded-lg border border-gray-400 py-2 px-5 w-[13%] hover:bg-blue-600 hover:text-white cursor-pointer"><LuFilter /> Filter</button>
            </div>

            </div>


            
            {/* Filtering Div  */}
            {showFilters && (
                <Filters categories={filterCategories} />
            )}







            {/* Table  */}
            <BeneficiariesTable />
        </div>
     );
}

export default BeneficiariesList;