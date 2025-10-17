import React from 'react'
import PageCard from '../components/PageCard';
import Header from '../components/Header';
import AdminHeader from '../components/AdminHeader';
import Footer from '../components/Footer';
import SideNav from '../ui/SiteNav';
import DashboardSection from '../components/DashboardSection';
import DashFooter from '../components/DashFooter';

const Dashboard = () => {
    return (
      <div className="w-full flex flex-col gap-5 px-7 xl:px-10">
       <div className="w-full flex justify-between items-start min-h-150">
          <SideNav />
          <div className="w-full xl:w-4/5">
              <AdminHeader />
              <DashboardSection />
              <Footer />
          </div>
       </div>
       {/* <Footer /> */}
       </div>
    );
}

export default Dashboard;