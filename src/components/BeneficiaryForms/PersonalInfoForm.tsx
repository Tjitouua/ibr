import React from 'react';
import { LuUserRound, LuCalendarFold } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";

const PersonalInfoForms = ({ personalInfo, setPersonalInfo, errors }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo({ ...personalInfo, [name]: value });
    };

    return (
        <div className="px-6 py-10 pb-13 w-full xl:w-2/3 flex flex-col border border-gray-200 items-center text-gray-800 gap-5 rounded-sm bg-white shadow-lg">

            <div className="flex flex-col w-full gap-2">
                <label className="text-2xl font-bold">Personal Information</label>
                <label className="text-sm text-gray-500">
                    Enter the beneficiary's personal details
                </label>
            </div>

            {/* First & Last Name */}
            <div className="w-full flex gap-3 justify-between flex-wrap">
                <div className="w-full sm:w-[48%] flex flex-col gap-2">
                    <label>First Name *</label>
                    <input
                        type="text"
                        name="firstName"
                        value={personalInfo.firstName}
                        onChange={handleChange}
                        placeholder="Enter first name"
                        className="w-full h-9 border rounded-md px-2"
                    />
                    {errors.firstName && <p className="text-red-600 text-xs">{errors.firstName}</p>}
                </div>

                <div className="w-full sm:w-[48%] flex flex-col gap-2">
                    <label>Last Name *</label>
                    <input
                        type="text"
                        name="lastName"
                        value={personalInfo.lastName}
                        onChange={handleChange}
                        placeholder="Enter last name"
                        className="w-full h-9 border rounded-md px-2"
                    />
                    {errors.lastName && <p className="text-red-600 text-xs">{errors.lastName}</p>}
                </div>
            </div>

            {/* ID Number & DOB */}
            <div className="w-full flex gap-3 justify-between flex-wrap">
                <div className="w-full sm:w-[48%] flex flex-col gap-2">
                    <label>ID Number *</label>
                    <input
                        type="text"
                        name="id"
                        value={personalInfo.id}
                        onChange={handleChange}
                        placeholder="e.g. 45768723456"
                        className="w-full h-9 border rounded-md px-2"
                    />
                    {errors.id && <p className="text-red-600 text-xs">{errors.id}</p>}
                </div>

                <div className="w-full sm:w-[48%] flex flex-col gap-2">
                    <label>Date of Birth *</label>
                    <input
                        type="text"
                        name="dob"
                        value={personalInfo.dob}
                        onChange={handleChange}
                        placeholder="dd/mm/yyyy"
                        className="w-full h-9 border rounded-md px-2"
                    />
                    {errors.dob && <p className="text-red-600 text-xs">{errors.dob}</p>}
                </div>
            </div>

            {/* Gender & Marital Status */}
            <div className="w-full flex gap-3 justify-between flex-wrap">
                <div className="w-full sm:w-[48%] flex flex-col gap-2">
                    <label>Gender *</label>
                    <select
                        name="gender"
                        value={personalInfo.gender}
                        onChange={handleChange}
                        className="w-full h-9 border rounded-md px-2"
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {errors.gender && <p className="text-red-600 text-xs">{errors.gender}</p>}
                </div>

                <div className="w-full sm:w-[48%] flex flex-col gap-2">
                    <label>Marital Status *</label>
                    <select
                        name="maritalStatus"
                        value={personalInfo.maritalStatus}
                        onChange={handleChange}
                        className="w-full h-9 border rounded-md px-2"
                    >
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Widowed">Widowed</option>
                    </select>
                    {errors.maritalStatus && <p className="text-red-600 text-xs">{errors.maritalStatus}</p>}
                </div>
            </div>
        </div>
    );
};

export default PersonalInfoForms;
