import { Link } from "react-router-dom";
import AdminSideCard from "../ui/AdminSideCard";
import DashboardDesc from "../ui/DashboardDesc";
import DashboardTitles from "../ui/DashboardTitles";
import { IoMdAdd } from "react-icons/io";
import BeneficiariesList from "./BeneficiariesList";
import ExitsList from "./ExitsList";



const ExitsListDiv = () => {
     return (
      //   <AdminSideCard className="px-1">
            
        <div className="w-full min-h-150 py-3 flex flex-col gap-3">
        <div className="w-full flex justify-between items-center">
        <div className="flex flex-col w-full">
           <DashboardTitles title='Exited Beneficiaries' />
           <DashboardDesc desc='Detailed list of all exited beneficiaries' />
        </div>
        <Link className="flex bg-blue-500 text-white px-3 py-3 justify-center items-center w-50 rounded-lg hover:bg-blue-400" to="#" ><IoMdAdd /> Add Beneficiary</Link>
        </div>
        <ExitsList />
        {/* <BeneficiariesList /> */}
        </div>
      //   </AdminSideCard>
     );
}

export default ExitsListDiv;