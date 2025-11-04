import AdminHeader from "../components/AdminHeader";
import Footer from "../components/Footer";
import PaymentsSection from "../components/PaymentsSection";
import ReportsSection from "../components/ReportsSection";
import SideNav from "../ui/SiteNav";



const Reports = () => {
     return (
        <div className="w-full flex flex-col gap-5 px-3 xl:px-0">
        <div className="w-full flex justify-between items-start min-h-150">
           <SideNav />
           <div className="w-full xl:w-4/5">
               <AdminHeader />
               <ReportsSection />
               <Footer />
           </div>
        </div>
        {/* <Footer /> */}
        </div>
     );
}


export default Reports;