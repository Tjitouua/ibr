import React from 'react';

const Hero = () => {
     return (
       <div className="w-full bg-[url('/images/hero.jpeg')] max-w-400 bg-center bg-cover min-h-screen">
          <div className="w-full min-h-screen bg-gradient-to-r from-black/95 via-black/80 to-transparent text-white gap-7 flex flex-col px-10 justify-center">
              <div className="rounded-xl border border-white/70 text white text-sm py-1 px-3 max-w-md flex justify-center items-center">
                  <label>Ministry of Gender Equality, Poverty Eradication and Social Welfare</label>
              </div>
              <label className="font-bold text-4xl">Integrated Beneficiary Registry</label>
              <label className="text-lg max-w-2xl">The CBMIS system brings together all beneficiary information
               from Namibia’s social protection programs in one place. It helps the government deliver services more
                smoothly, keeps things transparent, and provides useful insights to make better decisions for everyone.</label>
              <div className="flex gap-4 items-center justify-start">
                 <button className="px-10 py-2 bg-white rounded-md text-black font-bold cursor-pointer hover:border hover:border-white hover:bg-transparent hover:text-white">Learn More</button>
                 <button className="px-10 py-2 bg-white rounded-md text-black font-bold cursor-pointer hover:border hover:border-white hover:bg-transparent hover:text-white">View Functions</button>
              </div>
          </div>
       </div>
     );
}

export default Hero;