import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About';

const Index = () => {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center px-7 xl:px-10">
            <Header />
             <Hero />
             <About />
             <Footer />
        </div>
    )
}

export default Index;