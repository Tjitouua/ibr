import React from 'react'
import Header from '../components/Header';
import OverviewSection from '../components/public/OverviewSection';
import Footer from '../components/Footer';


const PublicOverview = () => {
     return (
       <div className="w-full min-h-screen flex flex-col">
         <Header />
         <OverviewSection />
         <Footer />
       </div>
     );
}

export default PublicOverview;