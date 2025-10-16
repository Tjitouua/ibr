import ScheduleCard from "../ui/ScheduleCard";


const ScheduleDiv: React.FC = () => {

    const ScheduleList = [
       {
         program: "Old Age Grant",
         beneficiaries: "620",
         budget: "93,000",
         date: "Oct 25, 2025",
       },
       {
        program: "Child Grant",
        beneficiaries: "480",
        budget: "67,200",
        date: "Oct 28, 2025",
      },
      {
        program: "Disability Grant",
        beneficiaries: "285",
        budget: "51,300",
        date: "Nov 1, 2025",
      },
      {
        program: "Foster Care",
        beneficiaries: "155",
        budget: "27,900",
        date: "Nov 5, 2025",
      },
    ];


    return (
       <div className="w-full min-h-100 px-5 py-10 border border-gray-400 rounded-xl flex flex-col gap-2">
          <div className="flex flex-col gap-1">
             <label className="text-xl font-bold">Upcoming Payment Schedule</label>
             <label className="text-sm text-gray-700">Next scheduled payment distributions</label>
          </div>
          {ScheduleList.map((sch, index) => (
          <ScheduleCard
             key={index}
             program={sch.program}
             beneficiaries={sch.beneficiaries}
             budget={sch.budget}
             date={sch.date}
          />
          ))}
       </div>
    );
}

export default ScheduleDiv;