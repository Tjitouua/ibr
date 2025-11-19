

const EnrolmentBottomPart = () => {
    return (
        <div className="w-full flex justify-between flex-wrap items-start min-h-10 py-2">
            {/* First Div  */}
            <div className="w-full min-h-91 md:w-[49%] border border-gray-300 py-7 px-5 rounded  flex flex-col gap-3 ">
                <label className="text-xl font-semibold">Enrollment Process</label>
                <div className="w-full py-1 flex flex-col">
                    <label className="marker:text-2xl marker:text-blue-500 font-bold">1. Application Submission</label>
                    <label className="text-sm text-gray-500">Beneficiaries submit applications through designated offices or online portals with required documentation.</label>
                </div>

                <div className="w-full py-1 flex flex-col">
                    <label className="marker:text-2xl marker:text-blue-500 font-bold">2. Verification</label>
                    <label className="text-sm text-gray-500">Applications are verified against eligibility criteria and supporting documents are authenticated.</label>
                </div>

                <div className="w-full py-1 flex flex-col">
                    <label className="marker:text-2xl marker:text-blue-500 font-bold">3. Registration</label>
                    <label className="text-sm text-gray-500">Approved applicants are registered in the IBR system and assigned unique beneficiary IDs.</label>
                </div>

                <div className="w-full py-1 flex flex-col">
                    <label className="marker:text-2xl marker:text-blue-500 font-bold">4. Activation</label>
                    <label className="text-sm text-gray-500">Benefits are activated and beneficiaries begin receiving their entitled social protection services.</label>
                </div>

            </div>

            {/* Second Div  */}
            <div className="w-full min-h-91 md:w-[49%] border border-gray-300 py-7 px-5 rounded flex flex-col gap-6">
                <label className="text-xl font-semibold">Key Insights</label>
                <div className="w-full flex gap-5 justify-start items-center">
                    <div className="w-1 h-14 bg-red-700"></div>
                    <div className="flex flex-col gap-1">
                        <label className="font-bold">Old Age Grant Dominance</label>
                        <label className="text-sm text-gray-500">The Old Age Grant program represents over 72% of all enrollments, highlighting the importance of elderly care in Namibia's social protection framework.</label>
                    </div>
                </div>

                <div className="w-full flex gap-5 justify-start items-center">
                    <div className="w-1 h-14 bg-green-700"></div>
                    <div className="flex flex-col gap-1">
                        <label className="font-bold">Gender Distribution</label>
                        <label className="text-sm text-gray-500">Female beneficiaries account for approximately 60% of enrollments, reflecting the targeted support for women in vulnerable situations.</label>
                    </div>
                </div>

                <div className="w-full flex gap-5 justify-start items-center">
                    <div className="w-1 h-14 bg-purple-700"></div>
                    <div className="flex flex-col gap-1">
                        <label className="font-bold">Social Assistance Focus</label>
                        <label className="text-sm text-gray-500">Over 95% of enrollments fall under the Social Assistance sector, demonstrating the critical role of direct support programs.</label>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default EnrolmentBottomPart;
