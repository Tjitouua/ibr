import React from 'react'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

interface NavigationProps {
     icon: React.ReactNode;
     nav: string;
     path: string;
}


const Navigation: React.FC<NavigationProps> = ({ icon, nav, path }) => {
    return (
         <Link to={path} className="w-full h-10 px-3 flex cursor-pointer  justify-start items-center gap-8 hover:bg-gray-700">
             {/* <FaHome /> */}
             <div>{icon}</div>
             <label>{nav}</label>
         </Link>
    );
}

export default Navigation;