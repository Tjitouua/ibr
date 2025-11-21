

const ContactUsForm = () => {
     return (
        <div className="w-full lg:w-[63%] py-8 px-6 border border-gray-300 rounded-md flex flex-col gap-2">
            <label className="font-bold text-xl">Send us a Message</label>
            <label className="text-sm text-gray-400">Fill out the form below and we'll respond within 24 hours</label>

            {/* Full Name & Email Address  */}
            <div className="w-full flex jusify-between mt-4 gap-3 items-center">
                {/* Full Name  */}
                <div className="w-1/2 py-2 flex flex-col gap-3 text-black/80">
                   <label className="font-bold text-sm">Full Name</label>
                   <input className="w-full border border-gray-300 py-2 px-3" type="text" placeholder="John Doe" />
                </div>
                {/* Email Address  */}
                <div className="w-1/2 py-2 flex flex-col gap-3 text-black/80">
                   <label className="font-bold text-sm">Email Address</label>
                   <input className="w-full border border-gray-300 py-2 px-3" type="text" placeholder="john@example.com" />
                </div>
            </div>
            {/* Subject  */}
            <div className="w-full py-2 flex flex-col gap-3 text-black/80">
                   <label className="font-bold text-sm">Subject</label>
                   <input className="w-full border border-gray-300 py-2 px-3" type="text" placeholder="How can we help you?" />
            </div>
            {/* Message  */}
            <div className="w-full py-2 flex flex-col gap-3 text-black/80">
                   <label className="font-bold text-sm">Message</label>
                   <textarea className="w-full border border-gray-300 py-2 px-3 min-h-40" placeholder="How can we help you?" />
            </div>
            {/* Button  */}
            <button className="bg-black text-white rounded-sm py-3 flex justify-center items-center hover:bg-black/70 cursor-pointer w-40">Send Message</button>
       </div>
     )
}

export default ContactUsForm;