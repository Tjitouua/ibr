import React, { type ReactNode } from 'react'

interface BigCardProps {
    children?: ReactNode;
    className?: string;
}

const BigCard = ({ children, className }: BigCardProps) => {
    return (
       <div className={`w-full mt-8 px-5 text-black py-10 min-h-200 gap-3 flex flex-col justify-center items-center ${className}`}>
           {children}
       </div>
    );
}

export default BigCard;