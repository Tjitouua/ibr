import React from 'react'
import BigCard from '../../ui/BigCard';
import PublicSectionsDiv from '../../ui/public/PublicSectionsDiv';
import OverviewTop from './OverviewTop';
import OverviewList from './OverviewList';
import OverviewGraphsDiv from './OverviewGraphsDiv';

const OverviewSection = () => {
     return (
       <PublicSectionsDiv>
          <label className="font-bold text-2xl">At A Glance</label>
          <label className="text-gray-600">Summary of key statistics across all social programs.</label>
          <OverviewTop />
          <label className="font-bold text-2xl">Enrolments</label>
          <label className="text-gray-600 pb-2">Overview of beneficiary enrollment across all social programs.</label>
          <OverviewList />
          <label className="font-bold text-2xl">Program Statistics</label>
          <label className="text-gray-600">Visual representation of enrollments, gender distribution, and payments</label>
          <OverviewGraphsDiv />
       </PublicSectionsDiv>
     );
}

export default OverviewSection;