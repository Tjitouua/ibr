import { HiOutlineMail } from "react-icons/hi";
import ContactInfoCard from "./ContactInfoCard";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";



const ContactInfo = () => {
   return (
      <div className="w-full py-8 px-6 rounded-md border gap-2 flex flex-col border-gray-300">
        <label className="font-bold text-lg">Contact Information</label>
        <div className="w-full py-2 flex gap-2 items-start">
           <HiOutlineMail className="text-2xl text-gray-500" />
           <div className="flex flex-col  py-0">
              <label className="font-bold">Email</label>
              <label className="text-sm text-gray-500">info@ibr.gov.na</label>
           </div>
        </div>

        <div className="w-full py-2 flex gap-2 items-start">
           <FiPhone className="text-2xl text-gray-500" />
           <div className="flex flex-col  py-0">
              <label className="font-bold">Phone</label>
              <label className="text-sm text-gray-500">+264 61 283 3111</label>
           </div>
        </div>

        <div className="w-full py-2 flex gap-2 items-start">
           <IoLocationOutline className="text-2xl text-gray-500" />
           <div className="flex flex-col  py-0">
              <label className="font-bold">Address</label>
              <label className="text-sm max-w-60 text-gray-500">Ministry of Gender Equality, Poverty Eradication & Social Welfare <br /> Private Bag 13359 <br /> Windhoek, Namibia</label>
           </div>
        </div>


        <div className="w-full py-2 flex gap-2 items-start">
           <IoMdTime className="text-2xl text-gray-500" />
           <div className="flex flex-col  py-0">
              <label className="font-bold">Office Hours</label>
              <label className="text-sm text-gray-500">Monday – Friday: 08:00 AM – 05:00 PM <br /> Saturday – Sunday: Closed</label>
           </div>
        </div>

      </div>
   );
}

export default ContactInfo;