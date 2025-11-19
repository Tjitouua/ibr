import React from 'react'
import Header from '../components/Header';
import EnrolmentSection from '../components/public/EnrolmentSection';
import Footer from '../components/Footer';


const PublicEnrolment = () => {
     return (
       <div className="w-full min-h-screen flex flex-col">
         <Header />
         <EnrolmentSection />
         <Footer />
       </div>
     );
}

export default PublicEnrolment;