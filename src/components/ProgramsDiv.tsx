import React from 'react'
import Program from '../ui/Program';




const ProgramsDiv: React.FC = () => {


    const ProgramCardList = [
        {
           name: "Permanent Disability Grant",
           budget: 102241600,
           beneficiary: 63901,
           males: 32291,
           females: 31610
        },
        {
            name: "Old Age Grant",
            budget: 609150400,
            beneficiary: 380719,
            males: 160080,
            females: 220635
         },
         {
            name: "CBIG",
            budget: 16520400,
            beneficiary: 25369,
            males: 7582,
            females: 16570
         },
         {
            name: "Temporary Disability Grant",
            budget: 17196800,
            beneficiary: 10748,
            males: 5406,
            females: 5339
         },

    ];



    return (
        <div className="w-full py-1 flex justify-between flex-wrap gap-6 bg-red-400 rounded-lg items-center">
            {ProgramCardList.map((program, index) => (
             <Program
               key={index}
               name={program.name}
               budget={program.budget}
               beneficiary={program.beneficiary}
               males={program.males}
               females={program.females}
             />
             ))};
        </div>
    );
}

export default ProgramsDiv;