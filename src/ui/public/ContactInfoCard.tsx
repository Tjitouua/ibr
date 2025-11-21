import { HiOutlineMail } from "react-icons/hi";


const ContactInfoCard = () => {
     return (
        <div className="w-full py-2 flex gap-2 items-start">
           <HiOutlineMail className="text-2xl text-gray-500" />
           <div className="flex flex-col  py-0">
              <label className="font-bold">Email</label>
              <label className="text-sm text-gray-500">info@ibr.gov.na</label>
           </div>
        </div>
     );
}

export default ContactInfoCard;