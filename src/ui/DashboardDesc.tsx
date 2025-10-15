import React from 'react'

interface TitleDescProps {
    desc: string;
}

const DashboardDesc: React.FC<TitleDescProps> = ({ desc }) => {
     return (
        <label className="text-gray-600 text-sm">{desc}</label>
     );
}

export default DashboardDesc;