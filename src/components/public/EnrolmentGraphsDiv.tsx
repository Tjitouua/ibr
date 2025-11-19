import EnrolmentGender from "../../ui/public/EnrolmentGender";
import EnrolmentProgramme from "../../ui/public/EnrolmentProgramme";




const EnrolmentGraphsDiv = () => {
     return (
        <div className="w-full min-h-20 py-2 items-start flex gap-5 justify-between flex-wrap">
        
          <EnrolmentProgramme />

          <EnrolmentGender />

        </div>
     );
}

export default EnrolmentGraphsDiv;