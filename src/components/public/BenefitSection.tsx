import PublicSectionsDiv from '../../ui/public/PublicSectionsDiv';
import BenefitTop from './BenefitTop';
import BenefitGraphsDiv from './BenefitGraphsDiv';
import ProgramsDetails from './ProgramsDetails';

const BenefitSection = () => {
     return (
       <PublicSectionsDiv>
          <label className="font-bold text-2xl">Benefits</label>
          <label className="text-gray-600">Overview of the money that goes to help people in the social programs</label>
          <BenefitTop />
          <BenefitGraphsDiv />
          <label className="font-bold text-2xl mt-8">Program Details</label>
          <label className="text-gray-600">Overview of all social protection programs</label>
          <ProgramsDetails />
       </PublicSectionsDiv>
     );
}

export default BenefitSection;



