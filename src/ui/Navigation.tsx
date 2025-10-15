import React from 'react'
import { FaHome } from "react-icons/fa";

interface NavigationProps {
     icon: React.ReactNode;
     nav: string;
}


const Navigation: React.FC<NavigationProps> = ({ icon, nav }) => {
    return (
         <div className="w-full h-10 flex cursor-pointer  justify-start items-center gap-8">
             {/* <FaHome /> */}
             <div>{icon}</div>
             <label>{nav}</label>
         </div>
    );
}

export default Navigation;