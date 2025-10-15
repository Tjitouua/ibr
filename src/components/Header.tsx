import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

const Header = () => {

    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <header className="w-full flex flex-col gap-3 sticky top-0 z-50 max-w-400">
        <div className="w-full min-h-15 flex flex-col gap-2">
            {/* Top Header  */}
            <div className="w-full flex bg-white items-center flex-wrap justify-between gap-4 min-h-10 py-1 px-5">
                <div className="flex gap-6 flex-wrap">
                {/* Image Div  */}
                <div className="w-25 sm:w-15 h-25 sm:h-15">
                   <img src="/images/namibiaLogo.png" className="w-full h-full" />
                </div>
                {/* IBR name div  */}
                <div className="min-h-15 flex flex-col justify-start pt-1">
                    <label className="font-semibold text-lg">NAMIBIA INTEGRATED BENEFICIARY REGISTRY (IBR)</label>
                    <label className="text-sm">Ministry of Gender Equality, Poverty Eradication and Social Welfare</label>
                </div>
                </div>
                {/* Contact div  */}
                <div className="flex flex-col text-sm">
                    {/* Phone  */}
                    <div className="flex gap-2 items-center">
                        <FiPhone />
                        <label>264 61 283 3111</label>
                    </div>
                    {/* Email  */}
                    <div className="flex gap-2 items-center">
                       <MdOutlineMail />
                       <label>info@ibr.gov.na</label>
                    </div>
                </div>
            </div>
            {/* Bottom Header  */}
            <div className="w-full flex flex-col bg-black text-white border-1 border-black text-sm px-5">
            <div className="w-full min-h-5 px-2 py-1 flex items-center xl:justify-between justify-end">
                <nav className="hidden xl:flex">
                    <ul className="flex gap-13">
                        <Link to="/">Home</Link>
                        <Link to="#">Overview</Link>
                        <Link to="#">Enrollment</Link>
                        <Link to="#">Benefits</Link>
                        <Link to="#">Exits</Link>
                        <Link to="#">Publication</Link>
                        <Link to="#">Contact Us</Link>
                    </ul>
                </nav>

                <button onClick={() => navigate('/login')} className="px-4 hidden xl:flex justify-center items-center rounded-sm cursor-pointer hover:bg-transparent hover:border hover:text-white hover:border-white py-1 bg-white text-black">Login</button>


                {/* Menu Div  */}
                <div className="flex xl:hidden gap-3 text-2xl font-bold">
                   {!menuOpen && (
                    <IoMenu className="cursor-pointer" onClick={() => setMenuOpen(true)} />
                   )}
                   {menuOpen && (
                    <RxCross2 className="cursor-pointer" onClick={() => setMenuOpen(false)} />
                   )}
                </div>

            </div>

            
           {/* Phone Screen Div  */}
           {menuOpen && (
            <div className="w-full flex xl:hidden flex-col gap-2 py-3 px-2">
                 <Link to="/">Home</Link>
                 <Link to="#">Overview</Link>
                 <Link to="#">Enrollment</Link>
                 <Link to="#">Benefits</Link>
                 <Link to="#">Exits</Link>
                 <Link to="#">Publication</Link>
                 <Link to="#">Contact Us</Link>
                 <button onClick={() => navigate('/login')} className="px-4 w-full flex justify-center items-center rounded-sm cursor-pointer hover:bg-transparent hover:border hover:text-black hover:border-black py-1 bg-blue-500 text-white">Login</button>
            </div>
            )}



            </div>



        </div>




        </header>
    )
}

export default Header;