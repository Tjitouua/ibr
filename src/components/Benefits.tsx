import React from 'react';
import BenefitsDiv from './BenefitsDiv';


const Benefits = () => {
     return (
        <div className="w-full py-5 px-5 mb-8 flex flex-col gap-3 items-center bg-gray-100 max-w-400">
           <label className="text-3xl font-bold text-black">Key Benefits</label>
           <BenefitsDiv />
        </div>
     );
}

export default Benefits;