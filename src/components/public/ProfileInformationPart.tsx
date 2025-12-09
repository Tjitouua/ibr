

const ProfileInformationPart = () => {
     return (
        <div className="w-full py-5 px-8 border flex flex-col gap-1 border-gray-300">
            <label className="font-bold text-lg">Personal Information</label>
            {/* First Name & Last Name  */}
            <div className="flex justify-between gap-5 py-2 items-center">
                {/* First Name  */}
                <div className="flex flex-col w-1/2 gap-2">
                    <label className="text-gray-500">First Name</label>
                    <input type="text" placeholder="John" className="w-full py-2 px-3 font-bold rounded-md bg-gray-200" />
                </div>
                {/* Last Name  */}
                <div className="flex flex-col w-1/2 gap-2">
                    <label className="text-gray-500">Last Name</label>
                    <input type="text" placeholder="Doe" className="w-full py-2 px-3 font-bold rounded-md bg-gray-200" />
                </div>
            </div>

            {/* Email Address & Phone Number  */}
            <div className="flex justify-between gap-5 py-2 items-center">
                {/* Email  */}
                <div className="flex flex-col w-1/2 gap-2">
                    <label className="text-gray-500">Email Address</label>
                    <input type="text" placeholder="John@joe.com" className="w-full py-2 px-3 font-bold rounded-md bg-gray-200" />
                </div>
                {/* Phone Number  */}
                <div className="flex flex-col w-1/2 gap-2">
                    <label className="text-gray-500">Phone Number</label>
                    <input type="text" placeholder="+264 81 ...." className="w-full py-2 px-3 font-bold rounded-md bg-gray-200" />
                </div>
            </div>
            {/* Button  */}
            <button className="bg-black mt-4 text-white rounded-sm py-2 flex justify-center items-center hover:bg-black/70 cursor-pointer w-40">Save Changes</button>
        </div>
     );
}

export default ProfileInformationPart;