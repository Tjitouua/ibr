import React from 'react'
import Header from '../components/Header';
import BeneficiariesTable from '../ui/BeneficiariesTable';
import BenefitSection from '../components/public/BenefitSection';
import Footer from '../components/Footer';
import AboutUsSection from '../components/public/AboutUsSection';


const AboutUs = () => {
     return (
       <div className="w-full min-h-screen flex flex-col">
         <Header />
         <AboutUsSection />
         <Footer />
       </div>
     );
}

export default AboutUs;
