

const ExitBottomPart = () => {
    return (
        <div className="w-full flex justify-between flex-wrap items-start min-h-10 py-2">
            {/* First Div  */}
            <div className="w-full min-h-88 md:w-[49%] border border-gray-300 py-7 px-5 rounded  flex flex-col gap-2 ">
                <label className="text-xl font-semibold">Exit Management Process</label>
                <div className="w-full py-1 flex flex-col">
                    <label className="marker:text-2xl marker:text-blue-500 font-bold">1. Notification</label>
                    <label className="text-sm text-gray-500">Family members or officials report beneficiary death or grant expiration to local offices.</label>
                </div>

                <div className="w-full py-1 flex flex-col">
                    <label className="marker:text-2xl marker:text-blue-500 font-bold">2. Verification</label>
                    <label className="text-sm text-gray-500">Death certificates or grant expiration documents are verified against registry records.</label>
                </div>

                <div className="w-full py-1 flex flex-col">
                    <label className="marker:text-2xl marker:text-blue-500 font-bold">3. Processing</label>
                    <label className="text-sm text-gray-500">Beneficiary status is updated in the IBR system and payments are discontinued.</label>
                </div>

                <div className="w-full py-1 flex flex-col">
                    <label className="marker:text-2xl marker:text-blue-500 font-bold">4. Documentation</label>
                    <label className="text-sm text-gray-500">Exit records are maintained for audit purposes and policy analysis.</label>
                </div>

            </div>

            {/* Second Div  */}
            <div className="w-full min-h-88 md:w-[49%] border border-gray-300 py-7 px-5 rounded flex flex-col gap-6">
                <label className="text-xl font-semibold">Key Observations</label>
                <div className="w-full flex gap-5 justify-start items-center">
                    <div className="w-1 h-14 bg-red-700"></div>
                    <div className="flex flex-col gap-1">
                        <label className="font-bold">Old Age Grant Exits</label>
                        <label className="text-sm text-gray-500">The majority of exits (91.5%) are from the Old Age Grant program due to natural causes, reflecting the demographic of elderly beneficiaries.</label>
                    </div>
                </div>

                <div className="w-full flex gap-5 justify-start items-center">
                    <div className="w-1 h-14 bg-green-700"></div>
                    <div className="flex flex-col gap-1">
                        <label className="font-bold">Death as Primary Reason</label>
                        <label className="text-sm text-gray-500">Death accounts for over 91% of all exits, emphasizing the importance of timely registry updates to prevent fraud.</label>
                    </div>
                </div>

                <div className="w-full flex gap-5 justify-start items-center">
                    <div className="w-1 h-14 bg-purple-700"></div>
                    <div className="flex flex-col gap-1">
                        <label className="font-bold">Temporary Grants</label>
                        <label className="text-sm text-gray-500">Expired grants represent 8.5% of exits, primarily from temporary disability grants with fixed duration.</label>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ExitBottomPart;
