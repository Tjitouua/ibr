

const ProgramsCard = () => {
    return (
        <div className="w-full md:w-[32%] py-6 border border-gray-400 mb-5 gap-1 flex flex-col px-4 rounded">
           <label className="text-md font-semibold">Old Age Pension</label>
           <label className="text-sm text-gray-500">Monthly pension for Namibian citizens aged 60 and above</label>
           <div className="w-full py-2 flex justify-between items-center border-t border-gray-400 mt-3">
               <div className="flex flex-col gap-1">
                  <label className="text-[13px] text-gray-500">Monthly Amount</label>
                  <label className="font-bold text-md">N$ 1,400</label>
               </div>
               <div className="flex flex-col gap-1 items-end">
                  <label className="text-[13px] text-gray-500">Beneficiaries</label>
                  <label className="font-bold text-md">223,434</label>
               </div>
           </div>
        </div>
    );
}

export default ProgramsCard;