import React, { type ReactNode } from 'react'

interface PageCardProps {
    children?: ReactNode;
}

const PageCard = ({ children }: PageCardProps) => {
    return (
    <div className="w-full min-h-screen flex flex-col px-7 xl:px-10">
       {children}
    </div>
    );
}

export default PageCard;