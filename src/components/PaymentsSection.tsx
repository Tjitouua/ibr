import { Link } from "react-router-dom";
import AdminSideCard from "../ui/AdminSideCard";
import DashboardDesc from "../ui/DashboardDesc";
import DashboardTitles from "../ui/DashboardTitles";
import BeneficiariesList from "./BeneficiariesList";
import { IoMdAdd } from "react-icons/io";
import PaymentFilter from "./PaymentFilter";
import PaymentSummary from "./PaymentSummary";
import PaymentsList from "./PaymentsList";



const PaymentsSection = () => {
     return (
        <AdminSideCard className="gap-6">
            {/* Top part  */}
        <div className="w-full flex justify-between items-center bg-white">
        <div className="flex flex-col w-full">
           <DashboardTitles title='Payment History' />
           <DashboardDesc desc='View payment records by month' />
        </div>
        {/* <Link className="flex bg-blue-500 text-white px-3 py-3 justify-center items-center gap-3 w-50 rounded-lg hover:bg-blue-400" to="#" ><IoMdAdd /> Add Payment</Link> */}
        </div>
        <PaymentFilter />
        <PaymentSummary />
        <PaymentsList />
        </AdminSideCard>
     );
}

export default PaymentsSection;