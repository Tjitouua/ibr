import React from 'react'
import Header from '../components/Header';
import ExitSection from '../components/public/ExitSection';
import Footer from '../components/Footer';


const PublicExits = () => {
     return (
       <div className="w-full min-h-screen flex flex-col">
         <Header />
         <ExitSection />
         <Footer />
       </div>
     );
}

export default PublicExits;