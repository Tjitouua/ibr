import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import Benefits from '../components/Benefits';

const Index = () => {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
            <Header />
             <Hero />
             <About />
             <Benefits />
             <Footer />
        </div>
    )
}

export default Index;