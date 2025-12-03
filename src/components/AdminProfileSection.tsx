import React from 'react'
import BigCard from '../ui/BigCard';
import DashboardTitles from '../ui/DashboardTitles';
import DashboardDesc from '../ui/DashboardDesc';
import ProfileInformationPart from './public/ProfileInformationPart';
import ProfilePasswordPart from './public/ProfilePasswordPart';
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const AdminProfileSection = () => {

   const navigate = useNavigate();

   const handleLogout = () => {
      navigate("/login");
   }


     return (
        <div className="flex flex-col gap-5 px-1 sm:px-5 py-3 justify-start w-full min-h-180">
            <div className="flex flex-col w-full">
            <DashboardTitles title='Profile' />
            <DashboardDesc desc='View and manage your IBR account details' />
            </div>

            <div className="flex w-full justify-between items-top">
                <div className="w-[30%] flex flex-col gap-3 py-3 items-center">
                   <div className="w-25 rounded-full flex justify-center items-center h-25 border-2 border-gray-400">
                      <img src="/images/spilloo.jpg" className="w-full h-full rounded-full" />
                      {/* <FaUserAlt className="text-5xl" /> */}
                   </div>
                   <label className="font-bold">veriimapoha@gmail.com</label>
                   {/* User ID Div  */}
                   <div className="flex gap-2">
                      <div className="py-1 px-3 bg-gray-100 flex justify-center items-center border border-gray-500 rounded-xl text-sm">
                         <label className="text-black"><span className="font-semibold mr-2 text-gray-600">User ID:</span> iuhdfnc20349</label>
                      </div>
                      <div className="py-1 px-3 bg-gray-100 cursor-pointer flex justify-center items-center border border-gray-500 rounded-xl text-sm">
                         <label className="text-[11px] font-bold">Copy</label>
                      </div>
                      <div>

                      </div>
                   </div>
                   {/* Logout  */}
                   <div onClick={handleLogout} className="flex gap-3 items-center text-red-600 hover:text-black cursor-pointer">
                         <IoLogOut className="text-lg" />
                         <label className="font-semibold cursor-pointer">Logout</label>
                      </div>
                </div>

                <div className="w-[70%] flex flex-col gap-4">
                    <ProfileInformationPart />
                    <ProfilePasswordPart />
                </div>
            </div>

        </div>
     );
}

export default AdminProfileSection;