import Graphs from "../ui/Graphs";
import GenderGraph from "./GenderGraph";
import PaymentsGraph from "./PaymentsGraph";
import ProgramsGraph from "./ProgramsGraph";
import RegionGraph from "./RegionGraph";



const GraphsDiv = () => {
     return (
        <div className="w-full min-h-150 py-2 items-start flex gap-5 justify-between flex-wrap">

          <RegionGraph />

          <GenderGraph />

          <ProgramsGraph />

          <PaymentsGraph />


        </div>
     );
}

export default GraphsDiv;