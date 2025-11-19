import ExitProgramme from "../../ui/public/ExitProgramme";
import ExitReason from "../../ui/public/ExitReason";
import MonthlyPaymentGraph from "../../ui/public/MonthlyPaymentGraph";
import PaymentsByProgrammeGraph from "../../ui/public/PaymentsByProgrammeGraph";



const ExitGraphsDiv = () => {
     return (
        <div className="w-full min-h-20 py-2 items-start flex gap-5 justify-between flex-wrap">
        
          <ExitReason />

          <ExitProgramme />

        </div>
     );
}

export default ExitGraphsDiv;