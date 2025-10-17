import type { ReactNode } from "react";


interface AdminSideCardProps {
    children?: ReactNode;
}




const AdminSideCard = ({ children }: AdminSideCardProps) => {
     return (
       <div className="w-full min-h-150 py-3 px-5 flex flex-col gap-3">
           { children }
       </div>
     );
}

export default AdminSideCard;