import React from 'react'
import BigCard from '../ui/BigCard';
import DashboardTitles from '../ui/DashboardTitles';
import DashboardDesc from '../ui/DashboardDesc';
import DashboardTop from './DashboardTop';
import GraphsDiv from './GraphsDiv';
import ScheduleDiv from './ScheduleDiv';
import ExitTop from './ExitTop';

const ExitSection = () => {
     return (
        <div className="flex flex-col gap-5 px-1 sm:px-5 py-3 justify-start w-full min-h-200">
            <div className="flex flex-col w-full">
            <DashboardTitles title='Exits' />
            <DashboardDesc desc='Analysis of programme exits and reasons' />
            </div>

            <ExitTop />
            <GraphsDiv />
            <ScheduleDiv />

        </div>
     );
}

export default ExitSection;