import React from 'react'
import BigCard from '../ui/BigCard';
import DashboardTitles from '../ui/DashboardTitles';
import DashboardDesc from '../ui/DashboardDesc';
import DashboardTop from './DashboardTop';
import GraphsDiv from './GraphsDiv';
import ScheduleDiv from './ScheduleDiv';
import ProgramsTop from './ProgramsTop';
import Program from '../ui/Program';
import ProgramsDiv from './ProgramsDiv';
import GrievancesTop from './GrievancesTop';
import ExitsListDiv from './ExitsListDiv';
import GrievancesListDiv from './GrievancesListDiv';

const GrievancesSection = () => {
     return (
        <div className="flex flex-col gap-5 px-1 sm:px-5 py-3 justify-start w-full min-h-200">
            <div className="flex flex-col w-full">
            <DashboardTitles title='Grievances Management' />
            <DashboardDesc desc='Track and resolve beneficiary complaints' />
            </div>

            <GrievancesTop />

            <GrievancesListDiv />

            {/* <ProgramsDiv /> */}

            {/* <GraphsDiv /> */}
            {/* <ScheduleDiv /> */}

        </div>
     );
}

export default GrievancesSection;