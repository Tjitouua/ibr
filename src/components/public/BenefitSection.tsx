import React from 'react'
import BigCard from '../../ui/BigCard';
import PublicSectionsDiv from '../../ui/public/PublicSectionsDiv';
import OverviewTop from './OverviewTop';
import OverviewList from './OverviewList';
import BenefitTop from './BenefitTop';
import BenefitGraphsDiv from './BenefitGraphsDiv';

const BenefitSection = () => {
     return (
       <PublicSectionsDiv>
          <label className="font-bold text-2xl">Benefits</label>
          <label className="text-gray-600">Overview of the money that goes to help people in the social programs</label>
          <BenefitTop />
          <BenefitGraphsDiv />
       </PublicSectionsDiv>
     );
}

export default BenefitSection;