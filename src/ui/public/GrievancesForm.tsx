import { useState } from "react";
import { GrSend } from "react-icons/gr";
import { useNavigate } from "react-router-dom";


const GrievancesForm = () => {


    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [idNo, setIdNo] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [email, setEmail] = useState("");
    const [region, setRegion] = useState("");
    const [category, setCategory] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [fullNameError, setFullNameError] = useState("");
    const [idNoError, setIdNoError] = useState("");
    const [phoneNoError, setPhoneNoError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [regionError, setRegionError] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [subjectError, setSubjectError] = useState("");
    const [messageError, setMessageError] = useState("");


    const handleComplaint = () => {

        let valid = true;

        setFullNameError("");
        setIdNoError("");
        setPhoneNoError("");
        setEmailError("");
        setRegionError("");
        setCategoryError("");
        setSubjectError("");
        setMessageError("");

        if (!fullName) {
            setFullNameError("Please enter your full name.");
            valid = false;
        }
        if (!email) {
            setIdNoError("Please enter your ID Number.");
            valid = false;
        }
        if (!phoneNo) {
            setPhoneNoError("Please enter your phone number.");
            valid = false;
        }
        if (!email) {
            setEmailError("Please enter your email address");
            valid = false;
        }
        if (!region) {
            setRegionError("Please enter your region.");
            valid = false;
        }
        if (!category) {
            setCategoryError("Please select the category of your complaint.");
            valid = false;
        }
        if (!subject) {
            setSubjectError("Please enter the subject/title of your complaint.");
            valid = false;
        }
        if (!message) {
            setMessageError("Please enter your complaint.");
            valid = false;
        }

        if (!valid) return;




    }



    return (
       <div className="w-full lg:w-[63%] py-8 px-6 border border-gray-300 rounded-md flex flex-col gap-2">
           <label className="font-bold text-xl">Personal Information</label>
           <label className="text-sm text-gray-400">Tell us a bit about yourself so we know who we're helping</label>

           {/* Full Name & ID Number  */}
           <div className="w-full flex jusify-between gap-3">
               {/* Full Name  */}
               <div className="w-1/2 py-2 flex flex-col gap-3 text-black/80">
                  <label className="font-bold text-sm">Full Name *</label>
                  <input value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full border border-gray-300 bg-gray-100 py-2 px-3" type="text" placeholder="John Doe" />
                  {fullNameError && <p className="text-red-600">{fullNameError}</p>}
               </div>
               {/* ID Number  */}
               <div className="w-1/2 py-2 flex flex-col gap-3 text-black/80">
                  <label className="font-bold text-sm">ID Number *</label>
                  <input value={idNo} onChange={(e) => setIdNo(e.target.value)} className="w-full border border-gray-300 py-2 px-3 bg-gray-100" type="text" placeholder="5467897......." />
                  {idNoError && <p className="text-red-600">{idNoError}</p>}
               </div>
           </div>



           {/* Phone Number & Email Address  */}
           <div className="w-full flex jusify-between gap-3">
               {/* Full Name  */}
               <div className="w-1/2 py-2 flex flex-col gap-3 text-black/80">
                  <label className="font-bold text-sm">Phone Number *</label>
                  <input value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} className="w-full border border-gray-300 bg-gray-100 py-2 px-3" type="text" placeholder="+264 XX XXX XXXX" />
                  {phoneNoError && <p className="text-red-600">{phoneNoError}</p>}
               </div>
               {/* ID Number  */}
               <div className="w-1/2 py-2 flex flex-col gap-3 text-black/80">
                  <label className="font-bold text-sm">Email Address *</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 py-2 px-3 bg-gray-100" type="text" placeholder="your@email.com" />
                  {emailError && <p className="text-red-600">{emailError}</p>}
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
                  <input value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full border border-gray-300 bg-gray-100 py-2 px-3" type="text" placeholder="Brief subject of your complaint" />
                  {subjectError && <p className="text-red-600">{subjectError}</p>}
           </div>

           {/* Message  */}
           <div className="w-full py-2 flex flex-col gap-3 text-black/80">
                  <label className="font-bold text-sm">Message</label>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full border border-gray-300 bg-gray-100 py-2 px-3 min-h-40" placeholder="Please provide detailed information about your complaint..." />
                  {messageError && <p className="text-red-600">{messageError}</p>}
           </div>

           {/* Button  */}
           <button onClick={handleComplaint} className="bg-black text-white rounded-sm gap-3 px-2 py-3 flex justify-center items-center hover:bg-black/70 cursor-pointer w-50">Submit Complaint <GrSend /></button>
      </div>
    )
}

export default GrievancesForm;