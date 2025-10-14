import React from 'react'
import BigCard from '../ui/BigCard';
import AboutPart from './AboutPart';
import Functions from './Functions';

const About = () => {
     return (
          <BigCard>
              <label className="text-5xl font-bold text-black">About the CBMIS System</label>
              <label className="text-lg text-gray-800">Empowering Namibia's social protection programs through integrated data management</label>
              <AboutPart />
              <Functions />
          </BigCard>
     );
}

export default About;