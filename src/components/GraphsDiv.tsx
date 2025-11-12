import Graphs from "../ui/Graphs";
import ExitsGraph from "./ExitsGraph";
import GenderGraph from "./GenderGraph";
import PaymentsGraph from "./PaymentsGraph";
import ProgramGraph from "./ProgramGraph";
import ProgramsGraph from "./ProgramsGraph";
import RegionGraph from "./RegionGraph";



const GraphsDiv = () => {
     return (
        <div className="w-full min-h-150 py-2 items-start flex gap-5 justify-between flex-wrap">

          <RegionGraph />

          <GenderGraph />

          <ProgramGraph />

          <ProgramsGraph />

          <ExitsGraph />

          <PaymentsGraph />


        </div>
     );
}

export default GraphsDiv;