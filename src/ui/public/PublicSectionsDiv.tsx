import React, { type ReactNode } from 'react'

interface PublicSectionsDivProps {
    children?: ReactNode;
    className?: string;
}

const PublicSectionsDiv = ({ children, className }: PublicSectionsDivProps) => {
    return (
        <div className={`w-full py-7 gap-2 min-h-screen px-3 md:px-10 flex flex-col ${className}`}>
           {children}
        </div>
    )
}

export default PublicSectionsDiv;