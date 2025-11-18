import MonthlyPaymentGraph from "../../ui/public/MonthlyPaymentGraph";
import PaymentsByProgrammeGraph from "../../ui/public/PaymentsByProgrammeGraph";



const BenefitGraphsDiv = () => {
     return (
        <div className="w-full min-h-20 py-2 items-start flex gap-5 justify-between flex-wrap">

          <PaymentsByProgrammeGraph />

          <MonthlyPaymentGraph />

        </div>
     );
}

export default BenefitGraphsDiv;