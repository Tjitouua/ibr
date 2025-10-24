import type { ReactNode } from "react";
import { IoChevronForward } from "react-icons/io5";


interface PaymentFilterButtProps {
    icon: ReactNode;
}




const PaymentFilterButt = ({ icon }: PaymentFilterButtProps) => {
     return (
        <button className="
        py-2 px-2 cursor-pointer 
        items-center justify-center
         rounded-md border border-gray-300
          hover:bg-blue-700 hover:text-white"
          >
            {icon}
        </button>
     );
}

export default PaymentFilterButt;