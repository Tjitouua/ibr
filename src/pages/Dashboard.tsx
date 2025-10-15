import React from 'react'
import PageCard from '../components/PageCard';
import Header from '../components/Header';
import AdminHeader from '../components/AdminHeader';
import Footer from '../components/Footer';
import SideNav from '../ui/SiteNav';

const Dashboard = () => {
    return (
      <div className="w-full flex flex-col gap-5">
       <div className="w-full flex justify-between items-start px-7 xl:px-10 min-h-150">
          <SideNav />
          <div className="w-4/5">
              <AdminHeader />
          </div>
       </div>
       <Footer />
       </div>
    );
}

export default Dashboard;