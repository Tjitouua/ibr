import { GrSend } from "react-icons/gr";


const GrievancesForm = () => {
    return (
       <div className="w-full lg:w-[63%] py-8 px-6 border border-gray-300 rounded-md flex flex-col gap-2">
           <label className="font-bold text-xl">Personal Information</label>
           <label className="text-sm text-gray-400">Tell us a bit about yourself so we know who we're helping</label>

           {/* Full Name & ID Number  */}
           <div className="w-full flex jusify-between gap-3 items-center">
               {/* Full Name  */}
               <div className="w-1/2 py-2 flex flex-col gap-3 text-black/80">
                  <label className="font-bold text-sm">Full Name *</label>
                  <input className="w-full border border-gray-300 bg-gray-100 py-2 px-3" type="text" placeholder="John Doe" />
               </div>
               {/* ID Number  */}
               <div className="w-1/2 py-2 flex flex-col gap-3 text-black/80">
                  <label className="font-bold text-sm">ID Number *</label>
                  <input className="w-full border border-gray-300 py-2 px-3 bg-gray-100" type="text" placeholder="5467897......." />
               </div>
           </div>



           {/* Phone Number & Email Address  */}
           <div className="w-full flex jusify-between gap-3 items-center">
               {/* Full Name  */}
               <div className="w-1/2 py-2 flex flex-col gap-3 text-black/80">
                  <label className="font-bold text-sm">Phone Number *</label>
                  <input className="w-full border border-gray-300 bg-gray-100 py-2 px-3" type="text" placeholder="+264 XX XXX XXXX" />
               </div>
               {/* ID Number  */}
               <div className="w-1/2 py-2 flex flex-col gap-3 text-black/80">
                  <label className="font-bold text-sm">Email Address *</label>
                  <input className="w-full border border-gray-300 py-2 px-3 bg-gray-100" type="text" placeholder="your@email.com" />
               </div>
           </div>

            {/* Region  */}
            <div className="w-full py-2 flex flex-col gap-3 text-black/80">
                  <label className="font-bold text-sm">Region *</label>
                  <select className="w-full border border-gray-300 cursor-pointer bg-gray-100 py-2 px-3">
                      <option>Select your region</option>
                      <option>Khomas</option>
                  </select>
           </div>



           <label className="font-bold text-xl mt-7">Complaint Details</label>
           <label className="text-sm text-gray-400">Let us know what’s going on and how we can help</label>



           {/* Category  */}
           <div className="w-full py-2 flex flex-col gap-3 text-black/80">
                  <label className="font-bold text-sm">Category *</label>
                  <select className="w-full border border-gray-300 cursor-pointer bg-gray-100 py-2 px-3">
                      <option>Select complaint category</option>
                      <option>Enrollment Problems</option>
                  </select>
           </div>

           {/* Subject  */}
           <div className="w-full py-2 flex flex-col gap-3 text-black/80">
                  <label className="font-bold text-sm">Subject</label>
                  <input className="w-full border border-gray-300 bg-gray-100 py-2 px-3" type="text" placeholder="Brief subject of your complaint" />
           </div>

           {/* Message  */}
           <div className="w-full py-2 flex flex-col gap-3 text-black/80">
                  <label className="font-bold text-sm">Message</label>
                  <textarea className="w-full border border-gray-300 bg-gray-100 py-2 px-3 min-h-40" placeholder="Please provide detailed information about your complaint..." />
           </div>

           {/* Button  */}
           <button className="bg-black text-white rounded-sm gap-3 px-2 py-3 flex justify-center items-center hover:bg-black/70 cursor-pointer w-50">Submit Complaint <GrSend /></button>
      </div>
    )
}

export default GrievancesForm;