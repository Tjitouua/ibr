import React from 'react'
import BigCard from '../../ui/BigCard';
import PublicSectionsDiv from '../../ui/public/PublicSectionsDiv';
import OverviewTop from './OverviewTop';
import OverviewList from './OverviewList';
import ExitTop from './ExitTop';
import ExitGraphsDiv from './ExitGraphsDiv';
import ExitBottomPart from './ExitBottomPart';

const ExitSection = () => {
     return (
       <PublicSectionsDiv>
          <label className="font-bold text-2xl">Exits</label>
          <label className="text-gray-600">Tracking beneficiary exits and reasons for program discontinuation</label>
          <ExitTop />
          <ExitGraphsDiv />
          <label className="font-bold text-2xl mt-7">Exits</label>
          <label className="text-gray-600">Overview of beneficiary exits, reasons for leaving programs, and key trends</label>
          <ExitBottomPart />
       </PublicSectionsDiv>
     );
}

export default ExitSection;