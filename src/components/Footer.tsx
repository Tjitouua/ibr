import React from 'react'
import { Link } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { LuFacebook } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";




const Footer = () => {
    return (
       <footer className="flex flex-col bg-black text-white px-2">
        <div className="w-full min-h-30 border-b border-gray-400 py-9 flex flex-wrap justify-center sm:justify-between gap-10 items-start">
              {/* About Div  */}
              <div className="p-2 flex flex-col max-w-70 justify-start items-start gap-3">
                  <label className="font-bold text-2xl mb-3">About IBR</label>
                  <div className="w-15 h-15">
                     <img className="w-full h-full" src="/images/namibiaLogo.png" />
                  </div>
                  <label className="text-sm">The Integrated Beneficiary Registry is a 
                    comprehensive system for managing social protection 
                    programs and ensuring efficient service delivery to beneficiaries.</label>
              </div>

              {/* Contact Us  */}
              <div className="p-2 flex flex-col max-w-70 text-sm justify-start items-start gap-3">
                 <label className="font-bold text-2xl mb-3">Contact Us</label>
                {/* Location  */}
                <div className="flex gap-3 items-start justify-start">
                    <GrLocation className="text-3xl" />
                    <label>Ministry of Gender Equality Poverty Eradication & Social Welfare</label>
                 </div>
                 {/* Phone Number  */}
                <div className="flex gap-3">
                    <FiPhone className="text-lg" />
                    <label>264 61 283 3111</label>
                 </div>
                 {/* Email Address  */}
                 <div className="flex gap-3">
                    <MdOutlineMail className="text-lg" />
                    <label>info@ibr.gov.na</label>
                 </div>
                {/* Office hours  */}
                 <div className="flex gap-3">
                    <IoMdTime className="text-lg" />
                    <label>Mon – Fri | 08:00 – 16:00</label>
                 </div>
              </div>


              
              {/* Quick Links  */}
              <div className="p-2 flex text-sm flex-col min-w-70 sm:min-w-50 justify-start items-start gap-3">
                  <label className="font-bold text-2xl mb-3">Quick Links</label>
                  <div className="flex gap-1 flex-col">
                      <Link to="#">Home</Link>
                      <Link to="#">Overview</Link>
                      <Link to="#">Enrollment</Link>
                      <Link to="#">Benefits</Link>
                      <Link to="#">Exits</Link>
                      <Link to="#">Publication</Link>
                      <Link to="#">Contact Us</Link>
                  </div>
              </div>




                            {/* Quick Links  */}
              <div className="p-2 flex text-sm flex-col min-w-70 sm:min-w-50 justify-start items-start gap-3">
                  <label className="font-bold text-2xl mb-3">Our Programs</label>
                  <div className="flex gap-1 flex-col">
                      <Link to="#">Old Age Pension (OAP)</Link>
                      <Link to="#">Child Maintenance Grant (CMG)</Link>
                      <Link to="#">Foster Parent Grant (FPG)</Link>
                      <Link to="#">Disability Grant (DG)</Link>
                      <Link to="#">Orphans and Vulnerable Children (OVC) Grant</Link>
                      <Link to="#">Food Bank Program</Link>
                      <Link to="#">Disability Grant (DG)</Link>
                  </div>
              </div>





        </div>
        



        <div className="w-full px-2 py-10 flex justify-between flex-wrap gap-10 items-center text-sm">
           <label>© 2025 Integrated Beneficiary Registry. All rights reserved.</label>
           <div className="flex gap-4">
                <Link to="#">Privacy Policy</Link>
                <Link to="#">Terms of Service</Link>
                <Link to="#">Accessibility</Link>
           </div>
        </div>




        </footer>
    )
}

export default Footer;