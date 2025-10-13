import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const Index = () => {
    return (
        <div className="w-full min-h-screen px-7 xl:px-10">
            <Header />
             <Hero />
             <div className="min-h-screen">

             </div>
             <Footer />
        </div>
    )
}

export default Index;