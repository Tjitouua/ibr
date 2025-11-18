import React from 'react'
import Header from '../components/Header';
import OverviewSection from '../components/public/OverviewSection';


const PublicOverview = () => {
     return (
       <div className="w-full min-h-screen flex flex-col">
         <Header />
         <OverviewSection />
       </div>
     );
}

export default PublicOverview;