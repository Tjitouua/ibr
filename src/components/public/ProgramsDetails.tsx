import type React from "react";
import ProgramsCard from "../../ui/public/ProgramsCard";


const ProgramsDetails: React.FC = () => {

    const ProgramCardList = [
       {
          name: "CBIG",
          desc: "Basic income support for low-income individuals.",
          amount: 1200,
          beneficiaries: 25369,
       },
       {
        name: "Temporary Disability Grant",
        desc: "Support for people temporarily unable to work",
        amount: 1200,
        beneficiaries: 25369,
     },
     {
        name: "CBIG",
        desc: "Basic income support for low-income individuals.",
        amount: 1400,
        beneficiaries: 4896,
     },
     {
        name: "Permanent Disability Grant",
        desc: "Support for individuals with permanent disabilities",
        amount: 1400,
        beneficiaries: 53852,
     },
     {
        name: "Old Age Grant",
        desc: "Monthly pension for citizens 60+",
        amount: 1400,
        beneficiaries: 223434,
     },
     {
        name: "Street Committee Member",
        desc: "Allowance for local street committee workers",
        amount: 1200,
        beneficiaries: 11100,
     },
     {
        name: "Assistant Teachers",
        desc: "Stipend for assistant teachers",
        amount: 1600,
        beneficiaries: 22900,
     },
     {
        name: "Casual Workers",
        desc: "Payment for community casual labour",
        amount: 1300,
        beneficiaries: 22900,
     },
     {
        name: "Cooks",
        desc: "Payment for cooks in community programs",
        amount: 1300,
        beneficiaries: 22900,
     },
     {
        name: "Coordinator",
        desc: "Allowance for program coordinators",
        amount: 2000,
        beneficiaries: 22900,
     },
    ];


      return (
        <div className="w-full min-h-5 py-1 flex flex-wrap gap-3 justify-between items-center">
           {ProgramCardList.map((program, index) => (
           <ProgramsCard
              key={index}
              name={program.name}
              desc={program.desc}
              amount={program.amount}
              beneficiaries={program.beneficiaries}
            />
            ))}
        </div>
      );
}

export default ProgramsDetails;