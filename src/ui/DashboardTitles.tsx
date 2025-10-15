import React from 'react'

interface DashboardTitlesProps {
    title: string;
    // className?: string;
}

const DashboardTitles: React.FC<DashboardTitlesProps> = ({ title }) => {
      return (
        <label className="text-2xl font-bold">{title}</label>
      );
}

export default DashboardTitles;