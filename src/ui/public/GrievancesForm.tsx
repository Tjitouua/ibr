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
        if (!idNo) {
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


        fetch("http://localhost/backend_ibr/addComplaint.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: fullName,
                id_number: idNo,
                phone_number: phoneNo,
                email: email,
                region: region,
                complaint_category: category,
                subject: subject,
                message: message
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.success) {
                alert("Complaint submitted successfully");

                setFullName("");
                setIdNo("");
                setPhoneNo("");
                setEmail("");
                setRegion("");
                setCategory("");
                setSubject("");
                setMessage("");
            } else {
                alert(data.error || "Something went wrong");
            }
        })
         .catch((err) => {
             console.error(err);
             alert("Server error. Please try again");
         })
        




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
                  <select value={region} onChange={(e) => setRegion(e.target.value)} className="w-full border border-gray-300 cursor-pointer bg-gray-100 py-2 px-3">
                      <option value="">Select region</option>
                      <option value="Erongo">Erongo</option>
                      <option value="Hardap">Hardap</option>
                      <option value="Kavango East">Kavango East</option>
                      <option value="Kavango West">Kavango West</option>
                      <option value="Khomas">Khomas</option>
                      <option value="Kunene">Kunene</option>
                      <option value="Karas">Karas</option>
                      <option value="Ohangwena">Ohangwena</option>
                      <option value="Omaheke">Omaheke</option>
                      <option value="Omusati">Omusati</option>
                      <option value="Oshana">Oshana</option>
                      <option value="Oshikoto">Oshikoto</option>
                      <option value="Otjozondjupa">Otjozondjupa</option>
                      <option value="Zambezi">Zambezi</option>
                  </select>
                  {regionError && <p className="text-red-600">{regionError}</p>}
           </div>



           <label className="font-bold text-xl mt-7">Complaint Details</label>
           <label className="text-sm text-gray-400">Let us know what’s going on and how we can help</label>



           {/* Category  */}
           <div className="w-full py-2 flex flex-col gap-3 text-black/80">
                  <label className="font-bold text-sm">Category *</label>
                  <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border border-gray-300 cursor-pointer bg-gray-100 py-2 px-3">
                      <option value="">Select complaint category</option>
                      <option value="Enrollment Problems">Enrollment Problems</option>
                      <option value="Payments Issues">Payments Issues</option>
                      <option value="Poor Customer Service">Poor Customer Service</option>
                      <option value="Application Status">Application Status</option>
                      <option value="Payments Issues">Payments Issues</option>
                  </select>
                  {categoryError && <p className="text-red-600">{categoryError}</p>}
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