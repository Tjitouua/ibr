import { Link } from "react-router-dom";
import AdminSideCard from "../ui/AdminSideCard";
import DashboardDesc from "../ui/DashboardDesc";
import DashboardTitles from "../ui/DashboardTitles";
import { IoMdAdd } from "react-icons/io";
import BeneficiariesList from "./BeneficiariesList";
import GraphsDiv from "./GraphsDiv";
import ReportsGraphDiv from "./ReportsGraphDiv";



const ReportsSection = () => {
     return (
        <AdminSideCard>
            {/* Top part  */}
        <div className="w-full flex justify-between items-center bg-white">
        <div className="flex flex-col w-full">
           <DashboardTitles title='Reports' />
           <DashboardDesc desc='Data insights and analytics' />
        </div>
        {/* <Link className="flex bg-blue-500 text-white px-3 py-3 justify-center items-center w-50 rounded-lg hover:bg-blue-400" to="#" ><IoMdAdd /> Add Beneficiary</Link> */}
        </div>
        <ReportsGraphDiv />
        {/* <BeneficiariesList /> */}
        </AdminSideCard>
     );
}

export default ReportsSection;