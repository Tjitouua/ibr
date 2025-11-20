import EnrolmentExitGraph from "../../ui/public/EnrolmentExitGraph";
import EnrolmentGenderGraph from "../../ui/public/EnrolmentGenderGraph";
import EnrolmentPaymentsGraph from "../../ui/public/EnrolmentPaymentsGraph";
import EnrolmentProgrammeGraph from "../../ui/public/EnrolmentProgrammeGraph";
import EnrolmentRegionGraph from "../../ui/public/EnrolmentRegionGraph";



const OverviewGraphsDiv = () => {
     return (
        <div className="w-full min-h-20 py-2 items-start flex gap-5 justify-between flex-wrap">

         <EnrolmentRegionGraph />

         <EnrolmentProgrammeGraph />

         <EnrolmentGenderGraph />

         <EnrolmentPaymentsGraph />
         
         <EnrolmentExitGraph />

        </div>
     );
}

export default OverviewGraphsDiv;