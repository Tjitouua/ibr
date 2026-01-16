import AdminHeader from "../components/AdminHeader";
import BeneficiariesSection from "../components/BeneficiariesSection";
import Footer from "../components/Footer";
import NewBeneficiarySection from "../components/NewBeneficiarySection";
import SideNav from "../ui/SiteNav";



const NewBeneficiary = () => {
     return (
        <div className="w-full flex flex-col gap-5 px-3 xl:px-0">
        <div className="w-full flex justify-between items-start min-h-150">
           <SideNav />
           <div className="w-full xl:w-4/5">
               <AdminHeader />
               <NewBeneficiarySection />
               <Footer />
           </div>
        </div>
        {/* <Footer /> */}
        </div>
     );
}

export default NewBeneficiary;