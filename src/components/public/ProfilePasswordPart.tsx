

const ProfilePasswordPart = () => {
    return (
       <div className="w-full py-5 px-8 border flex flex-col gap-1 border-gray-300">
           <label className="font-bold text-lg">Password Settings</label>
           {/* First Name & Last Name  */}
           <div className="flex justify-between gap-5 py-2 items-center">
               {/* First Name  */}
               <div className="flex flex-col w-1/2 gap-2">
                   <label className="text-gray-500">Password</label>
                   <input type="password" placeholder="Enter Password" className="w-full py-2 px-3 font-bold rounded-md bg-gray-200" />
               </div>
               {/* Last Name  */}
               <div className="flex flex-col w-1/2 gap-2">
                   <label className="text-gray-500">Confirm Password</label>
                   <input type="password" placeholder="Re-enter Password" className="w-full py-2 px-3 font-bold rounded-md bg-gray-200" />
               </div>
           </div>

           {/* Button  */}
           <button className="bg-black mt-4 text-white rounded-sm py-2 flex justify-center items-center hover:bg-black/70 cursor-pointer w-40">Save Changes</button>
       </div>
    );
}

export default ProfilePasswordPart;