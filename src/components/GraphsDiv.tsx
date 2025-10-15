import Graphs from "../ui/Graphs";
import RegionGraph from "./RegionGraph";



const GraphsDiv = () => {
     return (
        <div className="w-full min-h-150 py-2 items-start flex gap-5 justify-between flex-wrap">

          <RegionGraph />

           <Graphs title="Beneficiaries by Gender" desc="Gender distribution overview">
               <div>

               </div>
           </Graphs>

           <Graphs title="Payment Trends" desc="Monthly payment distribution">
               <div>

               </div>
           </Graphs>
           
           <Graphs title="Program Enrollment" desc="Beneficiaries per program">
               <div>

               </div>
           </Graphs>
        </div>
     );
}

export default GraphsDiv;