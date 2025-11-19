import PublicSectionsDiv from '../../ui/public/PublicSectionsDiv';
import BenefitTop from './BenefitTop';
import BenefitGraphsDiv from './BenefitGraphsDiv';
import ProgramsDetails from './ProgramsDetails';
import BenefitsBottomPart from './BenefitsBottomPart';

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
          <label className="font-bold text-2xl mt-8">Payment Information</label>
          <label className="text-gray-600">Simple breakdown of how payments work and the impact they make</label>
          <BenefitsBottomPart />
       </PublicSectionsDiv>
     );
}

export default BenefitSection;



