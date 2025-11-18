import React, { type ReactNode } from 'react'

interface PublicSectionsDivProps {
    children?: ReactNode;
    className?: string;
}

const PublicSectionsDiv = ({ children, className }: PublicSectionsDivProps) => {
    return (
        <div className={`w-full py-4 px-5 gap-2 min-h-screen flex flex-col ${className}`}>
           {children}
        </div>
    )
}

export default PublicSectionsDiv;