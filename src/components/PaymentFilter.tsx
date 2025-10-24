import { IoChevronForward } from "react-icons/io5";
import PaymentFilterButt from "../ui/PaymentFilterButt";
import { IoChevronBackSharp } from "react-icons/io5";
import { BiArrowBack } from "react-icons/bi";
import { IoArrowForwardSharp } from "react-icons/io5";
import PaymentFilterButt2 from "../ui/PaymentFilterButt2";



const PaymentFilter = () => {
     return (
        <div className="w-full rounded-lg border border-gray-300 py-4 px-5 flex flex-col gap-3">
            {/* Top div  */}
            <div className="flex w-full items-center justify-between gap-5">
               <div className="flex flex-col">
                  <label className="text-xl font-semibold">October 2025</label>
                  <label className="text-sm text-gray-500">Payment records for this month</label>
               </div>
               <div className="flex items-center gap-2">
                <PaymentFilterButt icon={<IoChevronBackSharp />} />
                  <PaymentFilterButt icon={<IoChevronForward />} />
               </div>
            </div>
            {/* Bottom div  */}
            <div className="flex gap-2 items-center">
                 <label className="text-sm text-gray-500">Year: </label>
                 <PaymentFilterButt icon={<BiArrowBack />} />

                   
                <select className="px-4 py-1 cursor-pointer rounded-md flex justify-center pr-15 border border-gray-400 appearance-none"> 
                    <option>2025</option> 
                    <option>2024</option> 
                    <option>2023</option> 
                    <option>2022</option> 
                    <option>2021</option> 
                </select>
  


                 <PaymentFilterButt icon={<IoArrowForwardSharp />} />
            </div>
        </div>
     );
}

export default PaymentFilter;