import React from 'react'
import Header from '../components/Header';
import ExitSection from '../components/public/ExitSection';
import Footer from '../components/Footer';
import PublicGrievancesSection from '../components/public/PublicGrievancesSection';


const PublicGrievances = () => {
     return (
       <div className="w-full min-h-screen flex flex-col">
         <Header />
         <PublicGrievancesSection />
         <Footer />
       </div>
     );
}

export default PublicGrievances;