import { useState } from "react";
import { useNavigate } from "react-router-dom";


const ContactUsForm = () => {


   const navigate = useNavigate();

   const [fullName, setFullName] = useState("");
   const [email, setEmail] = useState("");
   const [subject, setSubject] = useState("");
   const [message, setMessage]= useState(""); 

   const [fullNameError, setFullNameError] = useState("");
   const [emailError, setEmailError] = useState("");
   const [subjectError, setSubjectError] = useState("");
   const [messageError, setMessageError] = useState("");


   const handleContact = () => {
      let valid = true;

      setFullNameError("");
      setEmailError("");
      setSubjectError("");
      setMessageError("");

      if (!fullName) {
         setFullNameError("Please enter your full name.")
         valid = false;
      }

      if (!email) {
         setEmailError("please enter your email address.");
         valid = false;
      }

      if (!subject) {
         setSubjectError("Please enter subject.");
         valid = false;
      }

      if (!message) {
         setMessageError("Please enter message.");
      }

      if (!valid) return;

      // navigate("/")

   }



     return (
        <div className="w-full lg:w-[63%] py-8 px-6 border border-gray-300 rounded-md flex flex-col gap-2">
            <label className="font-bold text-xl">Send us a Message</label>
            <label className="text-sm text-gray-400">Fill out the form below and we'll respond within 24 hours</label>

            {/* Full Name & Email Address  */}
            <div className="w-full flex jusify-between mt-4 gap-3">
                {/* Full Name  */}
                <div className="w-1/2 py-2 flex flex-col gap-3 text-black/80">
                   <label className="font-bold text-sm">Full Name</label>
                   <input value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full border border-gray-300 py-2 px-3" type="text" placeholder="John Doe" />
                   {fullNameError && <p className="text-red-500 text-sm">{fullNameError}</p>}
                </div>
                {/* Email Address  */}
                <div className="w-1/2 py-2 flex flex-col gap-3 text-black/80">
                   <label className="font-bold text-sm">Email Address</label>
                   <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 py-2 px-3" type="text" placeholder="john@example.com" />
                   {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                </div>
            </div>
            {/* Subject  */}
            <div className="w-full py-2 flex flex-col gap-3 text-black/80">
                   <label className="font-bold text-sm">Subject</label>
                   <input value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full border border-gray-300 py-2 px-3" type="text" placeholder="How can we help you?" />
                   {subjectError && <p className="text-red-500 text-sm">{subjectError}</p>}
            </div>
            {/* Message  */}
            <div className="w-full py-2 flex flex-col gap-3 text-black/80">
                   <label className="font-bold text-sm">Message</label>
                   <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full border border-gray-300 py-2 px-3 min-h-40" placeholder="How can we help you?" />
                   {messageError && <p className="text-red-500 text-sm">{messageError}</p>}
            </div>
            {/* Button  */}
            <button onClick={handleContact} className="bg-black text-white rounded-sm py-3 flex justify-center items-center hover:bg-black/70 cursor-pointer w-40">Send Message</button>
       </div>
     )
}

export default ContactUsForm;
