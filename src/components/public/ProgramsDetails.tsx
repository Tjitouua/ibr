import ProgramsCard from "../../ui/public/ProgramsCard";


const ProgramsDetails = () => {
      return (
        <div className="w-full min-h-5 py-1 flex flex-wrap gap-3 justify-between items-center">
           <ProgramsCard />
           <ProgramsCard />
           <ProgramsCard />
           <ProgramsCard />
           <ProgramsCard />
           <ProgramsCard />
        </div>
      );
}

export default ProgramsDetails;