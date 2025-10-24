import type { ReactNode } from "react";
import { IoChevronForward } from "react-icons/io5";


interface PaymentFilterButt2Props {
    icon: ReactNode;
    icon2: ReactNode;
}




const PaymentFilterButt2 = ({ icon, icon2 }: PaymentFilterButt2Props) => {
     return (
        <button className="py-2 flex px-2 cursor-pointer items-center justify-center rounded-md border border-gray-300 hover:bg-blue-700 hover:text-white"
          >
            {icon}
            {icon2}
        </button>
     );
}

export default PaymentFilterButt2;