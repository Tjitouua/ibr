

const BenefitsBottomPart = () => {
    return (
        <div className="w-full flex justify-between flex-wrap items-start min-h-10 py-2">
            {/* First Div  */}
            <div className="w-full md:w-[49%] py-7 px-5 rounded  flex flex-col gap-2 ">
                <label className="text-xl font-semibold">Payment Schedule</label>
                <div className="w-full py-1 pl-13">
                    <li className="marker:text-2xl marker:text-blue-500 font-bold">Monthly Disbursements</li>
                    <label className="text-sm text-gray-500">Benefits are paid on the first working day of each month</label>
                </div>

                <div className="w-full py-1 pl-13">
                    <li className="marker:text-2xl marker:text-blue-500 font-bold">Payment Methods</li>
                    <label className="text-sm text-gray-500">Bank transfer, mobile money, or authorized pay points</label>
                </div>

                <div className="w-full py-1 pl-13">
                    <li className="marker:text-2xl marker:text-blue-500 font-bold">Verification</li>
                    <label className="text-sm text-gray-500">Annual verification required to continue receiving benefits</label>
                </div>
            </div>

            {/* Second Div  */}
            <div className="w-full md:w-[49%] py-7 px-5 rounded flex flex-col gap-6">
                <label className="text-xl font-semibold">Impact Highlights</label>
                <div className="w-full flex gap-5 justify-start items-center">
                    <div className="w-1 h-14 bg-red-700"></div>
                    <div className="flex flex-col gap-1">
                        <label className="font-bold">Economic Support</label>
                        <label className="text-sm text-gray-500">Over N$ 467 million distributed annually, providing crucial economic support to vulnerable populations.</label>
                    </div>
                </div>

                <div className="w-full flex gap-5 justify-start items-center">
                    <div className="w-1 h-14 bg-green-700"></div>
                    <div className="flex flex-col gap-1">
                        <label className="font-bold">Poverty Reduction</label>
                        <label className="text-sm text-gray-500">Benefits contribute significantly to poverty alleviation and improved living standards for recipients.</label>
                    </div>
                </div>

                <div className="w-full flex gap-5 justify-start items-center">
                    <div className="w-1 h-14 bg-purple-700"></div>
                    <div className="flex flex-col gap-1">
                        <label className="font-bold">Poverty Reduction</label>
                        <label className="text-sm text-gray-500">Covers the basics and helps keep elderly, disabled, and vulnerable kids cared for, supported, and able to meet their daily needs.</label>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default BenefitsBottomPart;













