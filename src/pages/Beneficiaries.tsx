import AdminHeader from "../components/AdminHeader";
import BeneficiariesSection from "../components/BeneficiariesSection";
import Footer from "../components/Footer";
import SideNav from "../ui/SiteNav";



const Beneficiaries = () => {
     return (
        <div className="w-full flex flex-col gap-5 px-3 xl:px-0">
        <div className="w-full flex justify-between items-start min-h-150">
           <SideNav />
           <div className="w-full xl:w-4/5">
               <AdminHeader />
               <BeneficiariesSection />
               <Footer />
           </div>
        </div>
        {/* <Footer /> */}
        </div>
     );
}

export default Beneficiaries;