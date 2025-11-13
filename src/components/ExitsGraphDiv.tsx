import Graphs from "../ui/Graphs";
import ExitsGraph from "./ExitsGraph";
import ExitsProgrammeGraph from "./ExitsProgrammeGraph";
import ExitsReasonGraph from "./ExitsReasonGraph";
import GenderGraph from "./GenderGraph";
import PaymentsGraph from "./PaymentsGraph";
import ProgramGraph from "./ProgramGraph";
import ProgramsGraph from "./ProgramsGraph";
import RegionGraph from "./RegionGraph";



const ExitsGraphDiv = () => {
     return (
        <div className="w-full min-h-20 py-2 items-start flex gap-5 justify-between flex-wrap">

          <ExitsProgrammeGraph />

          <ExitsReasonGraph />

        </div>
     );
}

export default ExitsGraphDiv;