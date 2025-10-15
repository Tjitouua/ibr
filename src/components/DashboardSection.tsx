import React from 'react'
import BigCard from '../ui/BigCard';
import DashboardTitles from '../ui/DashboardTitles';
import DashboardDesc from '../ui/DashboardDesc';
import DashboardTop from './DashboardTop';
import GraphsDiv from './GraphsDiv';

const DashboardSection = () => {
     return (
        <div className="flex flex-col gap-5 px-5 py-3 justify-start w-full min-h-200">
            <div className="flex flex-col w-full">
            <DashboardTitles title='Dashboard' />
            <DashboardDesc desc='Overview of your IBR management system' />
            </div>

            <DashboardTop />
            <GraphsDiv />

        </div>
     );
}

export default DashboardSection;