import { CgDanger } from "react-icons/cg";
import { LuCircleCheckBig } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { LuLayers } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { BiCreditCard } from "react-icons/bi";
import { PiDressBold } from "react-icons/pi";

const StatusCard = ({result}: any) => {

   if(!result.found) {
      return (
         <div className="w-full py-3 flex items-center justify-center text-gray-500">
            <label>Beneficiary not found</label>
         </div>
      );
   }


   const d = result.data;




      return (
        <div className="w-full min-h-70 border gap-2 flex flex-col border-gray-300">

             <div className="min-h-20 flex py-2 justify-center flex-col py items-center w-full bg-gray-300">
                 {/* Logo Div  */}
                 <div className="h-17 w-17">
                     <img className="w-full h-full" src="/images/namibiaLogo.png" />
                 </div>
                 <label className="text-[11px]">Republic of Namibia</label>
             </div>



             {/* Content Div  */}
             <div className="min-h-30 py-8 px-7 flex flex-col gap-5 text-black/80">

              {/* Status Part  */}
                <div className="w-full flex gap-3 items-center">
                   <div className="w-14 h-14 flex justify-center items-center bg-gray-200 rounded-full">
                      <LuCircleCheckBig className="text-2xl text-green-500" />
                   </div>
                   <div className="flex flex-col">
                      <label className="font-bold">Beneficiary Found</label>
                      <label className="text-sm text-gray-500">Enrollment Verified</label>
                   </div>
                </div>

              {/* Name Part  */}
              <div className="w-full flex gap-3 items-center py-2 px-3 bg-gray-200">
                   <FiUser className="text-xl text-gray-500" />
                   <div className="flex flex-col">
                      <label className="text-sm text-gray-500">Name</label>
                      <label className="font-bold">{d.name}</label>
                   </div>
              </div>

              {/* Program Part  */}
              <div className="w-full flex gap-3 items-center py-2 px-3 bg-gray-200">
                   <LuLayers className="text-xl text-gray-500" />
                   <div className="flex flex-col">
                      <label className="text-sm text-gray-500">Program</label>
                      <label className="font-bold">{d.program}</label>
                   </div>
              </div>

              {/* Status And Region Part  */}
              <div className="w-full flex gap-3 items-center justify-between">  
              {/* Gender Part  */}
              <div className="w-full flex gap-3 items-center py-2 px-3 bg-gray-200">
                   <PiDressBold className="text-xl text-gray-500" />
                   <div className="flex flex-col">
                      <label className="text-sm text-gray-500">Gender</label>
                      <label className="font-bold">{d.gender}</label>
                   </div>
              </div>
               {/* Staus Part  */}
              <div className="w-full flex gap-3 items-center py-2 px-3 bg-gray-200">
                   <CgDanger className="text-xl text-gray-500" />
                   <div className="flex flex-col">
                      <label className="text-sm text-gray-500">Status</label>
                      <label className="font-bold text-green-600">{d.status}</label>
                   </div>
              </div>
              </div>



              {/* Enrollment Date And Payment Part  */}
              <div className="w-full flex gap-3 items-center justify-between">
              {/* Region Part  */}
              <div className="w-full flex gap-3 items-center py-2 px-3 bg-gray-200">
                   <GrLocation className="text-xl text-gray-500" />
                   <div className="flex flex-col">
                      <label className="text-sm text-gray-500">Region</label>
                      <label className="font-bold">{d.region}</label>
                   </div>
              </div>
                 {/* Enrollment Part  */}
              <div className="w-full flex gap-3 items-center py-2 px-3 bg-gray-200">
                   <CgDanger className="text-xl text-gray-500" />
                   <div className="flex flex-col">
                      <label className="text-sm text-gray-500">Enrollment Date</label>
                      <label className="font-bold">2022-07-21</label>
                   </div>
              </div>
              </div>


             </div>




             <div className="min-h-25 mt-auto flex px-5 text-center py-2 justify-center flex-col py items-center w-full bg-gray-300">
                 <CgDanger />
                 <label className="text-[11px]">For payment inquiries, please visit your nearest social welfare office, or submit your complaint using the form.</label>
             </div>
        </div>
      );
}

export default StatusCard;