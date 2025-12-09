import ContactInfo from "../../ui/public/ContactInfo";
import ContactUsForm from "../../ui/public/ContactUsForm";
import GrievancesForm from "../../ui/public/GrievancesForm";
import PublicSectionsDiv from "../../ui/public/PublicSectionsDiv";
import RegionalOffices from "../../ui/public/RegionalOffices";
import FAQs from "./FAQs";



const PublicGrievancesSection = () => {
     return (
        <PublicSectionsDiv>
            <label className="font-bold text-2xl">Complaint Submission</label>
            <label className="text-gray-600">If you’re a beneficiary and something isn’t right, just let us know. Fill in the form and we’ll sort it out.</label>
            <div className="w-full flex-wrap min-h-20 flex gap-5 justify-between items-start py-6">
                <GrievancesForm />
            </div>
        </PublicSectionsDiv>
     );
}

export default PublicGrievancesSection;