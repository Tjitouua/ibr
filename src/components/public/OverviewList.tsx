// import AdminSideCard from "../ui/AdminSideCard";
import { IoSearchSharp } from "react-icons/io5";
// import BeneficiariesTable from "../ui/BeneficiariesTable";
import { LuFilter } from "react-icons/lu";
import { useState } from "react";
import OverviewTable from "../../ui/public/OverviewTable";
// import Filters from "./Filters";



const OverviewList: React.FC = () => {

    const [showFilters, setShowFilters] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");


    const [selectedFilters, setSelectedFilters] = useState({
       Region: "",
       Gender: "",
       Program: "",
       Status: "",
    });

    const handleFilterChange = (category: string, value: string) => {
       setSelectedFilters((prev) => ({
         ...prev,
         [category]: value,
       }));
    };
    


    const filterCategories = [
       {
          name: "Region",
          options: [
            { label: "Khomas", value: "Khomas" },
            { label: "Erongo", value: "Erongo" },
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
           { label: "Old Age Grant", value: "Old Age Grant" },
           { label: "Child Grant", value: "Child Grant" },
           { label: "Disability Grant", value: "Disability Grant" },
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
        <div className="w-full min-h-20 pb-8 py-3 px-5 mb-15 flex flex-col gap-3 bg-white rounded-lg border border-gray-300">
            {/* Table  */}
            <OverviewTable searchQuery={searchQuery} filters={selectedFilters} />
        </div>
     );
}

export default OverviewList;
