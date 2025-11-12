import React from 'react'
import PageCard from '../components/PageCard';
import Header from '../components/Header';
import AdminHeader from '../components/AdminHeader';
import Footer from '../components/Footer';
import SideNav from '../ui/SiteNav';
import DashboardSection from '../components/DashboardSection';
import DashFooter from '../components/DashFooter';
import ProgramsSection from '../components/ProgramsSection';

const Programs = () => {
    return (
      <div className="w-full flex flex-col gap-5 px-3 xl:px-0">
       <div className="w-full flex justify-between items-start min-h-150">
          <SideNav />
          <div className="w-full xl:w-4/5">
              <AdminHeader />
              <ProgramsSection />
              <Footer />
          </div>
       </div>
       {/* <Footer /> */}
       </div>
    );
}

export default Programs;