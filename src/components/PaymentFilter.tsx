import { IoChevronForward } from "react-icons/io5";
import PaymentFilterButt from "../ui/PaymentFilterButt";
import { IoChevronBackSharp } from "react-icons/io5";
import { BiArrowBack } from "react-icons/bi";
import { IoArrowForwardSharp } from "react-icons/io5";
import PaymentFilterButt2 from "../ui/PaymentFilterButt2";
import type React from "react";



 interface Props {
    selectedFilters: {
       Month: string;
       Year: string;
    };
    onChange: (category: string, value: string) => void;
 }

 const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

 const years = ["2021","2022","2023","2024","2025","2026"];



const PaymentFilter: React.FC<Props> = ({ selectedFilters, onChange }) => {


   const prevMonth = () => {
      const currentIndex = months.indexOf(selectedFilters.Month || "January");
      const newIndex = (currentIndex - 1 + months.length) % months.length;
      onChange("Month", months[newIndex]);
   };


   const nextMonth = () => {
      const currentIndex = months.indexOf(selectedFilters.Month || "January");
      const newIndex = (currentIndex + 1) % months.length;
      onChange("Month", months[newIndex]);
   };


   const prevYear = () => {
      const currentIndex = years.indexOf(selectedFilters.Year || "2025");
      const newIndex = Math.max(0, currentIndex - 1);
      onChange("Year", years[newIndex])
   }



   const nextYear = () => {
      const currentIndex = years.indexOf(selectedFilters.Year || "2025");
      const newIndex = Math.min(years.length - 1, currentIndex + 1);
      onChange("Year", years[newIndex])
   }






     return (
        <div className="w-full rounded-lg border border-gray-300 py-4 px-5 flex flex-col gap-3">
            {/* Top div  */}
            <div className="flex w-full items-center justify-between gap-5">
               <div className="flex flex-col">
                  <label className="text-xl font-semibold">{selectedFilters.Month} {selectedFilters.Year}</label>
                  <label className="text-sm text-gray-500">Payment records for this month</label>
               </div>
               <div className="flex items-center gap-2">
                <PaymentFilterButt icon={<IoChevronBackSharp />} onClick={prevMonth} />
                  <PaymentFilterButt icon={<IoChevronForward />} onClick={nextMonth} />
               </div>
            </div>
            {/* Bottom div  */}
            <div className="flex gap-2 items-center">
                 <label className="text-sm text-gray-500">Year: </label>
                 <PaymentFilterButt icon={<BiArrowBack />} onClick={prevYear} />

                   
                <select value={selectedFilters.Year} onChange={(e) => onChange("Year", e.target.value)} className="px-4 py-1 cursor-pointer rounded-md flex justify-center pr-15 border border-gray-400 appearance-none"> 
                    {/* <option>2025</option>  */}
                    {/* <option>2024</option>  */}
                    {/* <option>2023</option>  */}
                    {/* <option>2022</option>  */}
                    {/* <option>2021</option>  */}

                  {years.map((y) => <option key={y} value={y}>{y}</option> )}

                </select>
  


                 <PaymentFilterButt icon={<IoArrowForwardSharp />} onClick={nextYear} />
            </div>
        </div>
     );
}

export default PaymentFilter;