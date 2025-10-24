import type { ReactNode } from "react";


interface AdminSideCardProps {
    children?: ReactNode;
    className?: string;
}




const AdminSideCard = ({ children, className }: AdminSideCardProps) => {
     return (
       <div className={`w-full min-h-150 py-3 px-5 flex flex-col gap-3 ${className}`}>
           { children }
       </div>
     );
}

export default AdminSideCard;