

const BenefitsBottomPart = () => {
    return (
        <div className="w-full flex justify-between items-center min-h-10 py-2">
            {/* First Div  */}
            <div className="w-[49%] py-7 px-5 rounded border flex flex-col gap-2 border-gray-400">
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
                    <label className="text-sm text-gray-500">Annual verification required to continue receiving benefits

</label>
                </div>
            </div>
        </div>
    );
}

export default BenefitsBottomPart;













