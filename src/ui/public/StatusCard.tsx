import { CgDanger } from "react-icons/cg";

const StatusCard = () => {
      return (
        <div className="w-full min-h-70 border gap-2 flex flex-col border-gray-300">
             <div className="min-h-20 flex py-2 justify-center flex-col py items-center w-full bg-gray-300">
                 {/* Logo Div  */}
                 <div className="h-17 w-17">
                     <img className="w-full h-full" src="/images/namibiaLogo.png" />
                 </div>
                 <label className="text-[11px]">Republic of Namibia</label>
             </div>

             <div className="min-h-25 mt-auto flex px-5 text-center py-2 justify-center flex-col py items-center w-full bg-gray-300">
                 <CgDanger />
                 <label className="text-[11px]">For payment inquiries, please visit your nearest social welfare office, or submit your complaint using the form.</label>
             </div>
        </div>
      );
}

export default StatusCard;