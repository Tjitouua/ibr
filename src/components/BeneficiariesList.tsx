import AdminSideCard from "../ui/AdminSideCard";
import { IoSearchSharp } from "react-icons/io5";
import BeneficiariesTable from "../ui/BeneficiariesTable";
import { LuFilter } from "react-icons/lu";
import { useState } from "react";
import Filters from "./Filters";



const BeneficiariesList: React.FC = () => {

    const [showFilters, setShowFilters] = useState(false);


     return (
        <div className="w-full min-h-200 py-3 px-5 mb-15 flex flex-col gap-3 bg-white rounded-lg border border-gray-300">
            {/* Top Div  */}
            <div className="flex flex-col gap-1 bg-white">

            <div className="flex flex-col">
            <label className="font-bold text-lg">Beneficiary List</label>
            <label className="text-sm text-gray-500">View and manage beneficiary information</label>
            </div>
            {/* Seacch Div  */}
            <div className="flex w-full justify-between items-center">
            <div className="flex w-[86%] px-3 rounded-md border items-center justify-start gap-2 border-gray-400">
                <IoSearchSharp className="text-gray-500" />
                <input className="px-3 py-2 w-full" placeholder="Search Beneficiaries" type="text" />
            </div>
            <button onClick={() => setShowFilters(!showFilters)} className="flex justify-center items-center gap-3 rounded-lg border border-gray-400 py-2 px-5 w-[13%] hover:bg-blue-600 hover:text-white cursor-pointer"><LuFilter /> Filter</button>
            </div>

            </div>


            
            {/* Filtering Div  */}
            {showFilters && (
                <Filters />
            )}







            {/* Table  */}
            <BeneficiariesTable />
        </div>
     );
}

export default BeneficiariesList;