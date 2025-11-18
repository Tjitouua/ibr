import React from 'react'
import Header from '../components/Header';
import BeneficiariesTable from '../ui/BeneficiariesTable';
import BenefitSection from '../components/public/BenefitSection';


const PublicBenefits = () => {
     return (
       <div className="w-full min-h-screen flex flex-col">
         <Header />
         <BenefitSection />
       </div>
     );
}

export default PublicBenefits;











