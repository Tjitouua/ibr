import Graphs from "../ui/Graphs";
import AgeGraph from "./AgeGraph";
import GenderGraph from "./GenderGraph";
import PaymentsGraph from "./PaymentsGraph";
import ProgramsGraph from "./ProgramsGraph";
import RegionGraph from "./RegionGraph";



const ReportsGraphDiv = () => {
     return (
        <div className="w-full min-h-150 py-2 items-start flex gap-5 justify-between flex-wrap">

         <AgeGraph />

          <GenderGraph />

          <RegionGraph />

          <ProgramsGraph />

          <PaymentsGraph />


        </div>
     );
}

export default ReportsGraphDiv;