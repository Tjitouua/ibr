import React, { useEffect, useState } from 'react'
import Program from '../ui/Program';


interface programData {
    program: string;
    budget: number;
    beneficiaries: number;
    males: number;
    females: number;
};




const ProgramsDiv: React.FC = () => {

    const [programs, setPrograms] = useState<programData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost/backend_ibr/getPrograms.php")
        .then(res => res.json())
        .then(data => {
            setPrograms(data);
            setLoading(false);
        })
        .catch(err => {
            console.error("Failes to fetch programs: ", err);
            setLoading(false);
        });
    }, []);


   
    if(loading) {
        return <div>Loading Programs.hyry..</div>
    }


    if (!loading && programs.length === 0) {
         return <div className="w-full min-h-100 text-gray-600 flex justify-center text-lg">No programs found.</div>
    }





    return (
        <div className="w-full py-1 flex justify-between flex-wrap gap-6 rounded-lg items-center">
            {programs.map((program, index) => (
             <Program
               key={index}
               name={program.program}
               budget={Number(program.budget)}
               beneficiary={Number(program.beneficiaries)}
               males={Number(program.males)}
               females={Number(program.females)}
             />
             ))}
        </div>
    );
}

export default ProgramsDiv;







/*
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
*/