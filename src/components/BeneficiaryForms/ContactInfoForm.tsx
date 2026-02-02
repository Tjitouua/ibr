import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";

const ContactInfoForm = ({ contactInfo, setContactInfo, errors }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactInfo({ ...contactInfo, [name]: value });
    };

    return (
        <div className="px-6 py-10 pb-13 w-full xl:w-2/3 flex flex-col border border-gray-200 items-center text-gray-800 gap-5 rounded-sm bg-white shadow-lg">

            <div className="flex flex-col w-full gap-2">
                <label className="text-2xl font-bold">Contact Information</label>
                <label className="text-sm text-gray-500">How can we reach the beneficiary?</label>
            </div>

            {/* Phone & Email */}
            <div className="w-full flex gap-3 justify-between flex-wrap">
                <div className="w-full sm:w-[48%] flex flex-col gap-2">
                    <label>Phone Number *</label>
                    <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                        <LuPhone className="text-lg" />
                        <input
                            type="text"
                            name="phoneNumber"
                            value={contactInfo.phoneNumber}
                            onChange={handleChange}
                            placeholder="+264 XX XXX XXXX"
                            className="w-full h-9 rounded-md outline-none border-none focus:ring-0"
                        />
                    </div>
                    {errors.phoneNumber && <p className="text-red-600 text-xs">{errors.phoneNumber}</p>}
                </div>

                <div className="w-full sm:w-[48%] flex flex-col gap-2">
                    <label>Email Address *</label>
                    <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                        <HiOutlineMail className="text-lg" />
                        <input
                            type="text"
                            name="email"
                            value={contactInfo.email}
                            onChange={handleChange}
                            placeholder="email@example.com"
                            className="w-full h-9 rounded-md outline-none border-none focus:ring-0"
                        />
                    </div>
                    {errors.email && <p className="text-red-600 text-xs">{errors.email}</p>}
                </div>
            </div>
            
            {/* Physical Address */}
            <div className="w-full flex gap-3  justify-between flex-wrap mt-3">
                <div className="w-full flex flex-col gap-2">
                    <label>Physical Address *</label>
                    <div className="flex gap-3 py-2 border border-gray-500 rounded-md px-1 focus-within:border-black">
                        <IoLocationOutline className="text-lg" />
                        <textarea
                            name="physicalAddress"
                            value={contactInfo.physicalAddress}
                            onChange={handleChange}
                            placeholder="Enter full address"
                            className="w-full h-20 rounded-md outline-none border-none focus:ring-0"
                        />
                    </div>
                    {errors.physicalAddress && <p className="text-red-600 text-xs">{errors.physicalAddress}</p>}
                </div>
            </div>
        </div>
    );
};

export default ContactInfoForm;
