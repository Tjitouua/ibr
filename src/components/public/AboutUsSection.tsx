import ContactInfo from "../../ui/public/ContactInfo";
import ContactUsForm from "../../ui/public/ContactUsForm";
import PublicSectionsDiv from "../../ui/public/PublicSectionsDiv";



const AboutUsSection = () => {
     return (
        <PublicSectionsDiv>
            <label className="font-bold text-2xl">Contact Us</label>
            <label className="text-gray-600">Get in touch with our team for any inquiries or support</label>
            <div className="w-full flex-wrap min-h-20 flex gap-5 justify-between items-start py-6">
                <ContactUsForm />
                <div className="w-full lg:w-[35%] flex flex-col">
                    <ContactInfo />
                </div>
            </div>
        </PublicSectionsDiv>
     );
}

export default AboutUsSection;