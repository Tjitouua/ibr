import { FaSearch } from "react-icons/fa";
import GrievancesForm from "../../ui/public/GrievancesForm";
import PublicSectionsDiv from "../../ui/public/PublicSectionsDiv";




const PublicGrievancesSection = () => {
     return (
        <PublicSectionsDiv>
            <label className="font-bold text-2xl">Complaint Submission</label>
            <label className="text-gray-600">If you’re a beneficiary and something isn’t right, just let us know. Fill in the form and we’ll sort it out.</label>
            <div className="w-full flex-wrap min-h-20 flex gap-5 justify-between items-start py-6">
                <GrievancesForm />
                <div className="w-full lg:w-[35%] flex flex-col gap-4">
                    <div className="w-full py-8 px-6 rounded-md border gap-2 flex flex-col border-gray-300">
                       <label className="font-bold text-xl">Beneficiary Verification</label>
                       <label className="text-sm text-gray-400">Enter your details below to check if you are a beneficiary</label>
                       {/* ID Number  */}
                       <div className="w-full py-2 flex flex-col gap-3 text-black/80">
                           <label className="font-bold text-sm">ID Number or Program Number</label>
                           <input className="w-full border border-gray-300 bg-gray-100 py-2 px-3" type="text" placeholder="Enter your ID number (e.g. 8976234829)" />
                       </div>
                       {/* Button  */}
                       <button className="bg-black text-white rounded-sm gap-3 px-2 py-3 flex justify-center items-center hover:bg-black/70 cursor-pointer w-full mt-3">Verify Status <FaSearch /></button>
                    </div>


                    <div className="w-full py-8 px-6 rounded-md border gap-2 flex flex-col border-gray-300">

                    </div>


                </div>
            </div>
        </PublicSectionsDiv>
     );
}

export default PublicGrievancesSection;