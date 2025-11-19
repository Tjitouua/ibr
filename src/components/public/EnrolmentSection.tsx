
import PublicSectionsDiv from '../../ui/public/PublicSectionsDiv';

import EnrolmentTop from './EnrolmentTop';
import EnrolmentGraphsDiv from './EnrolmentGraphsDiv';
import EnrolmentBottomPart from './EnrolmentBottomPart';

const EnrolmentSection = () => {
     return (
       <PublicSectionsDiv>
          <label className="font-bold text-2xl">Enrolments</label>
          <label className="text-gray-600">Comprehensive overview of beneficiary enrollment across all social protection programs</label>
          <EnrolmentTop />
          <EnrolmentGraphsDiv />
          <label className="font-bold text-2xl mt-7">Enrollment Details</label>
          <label className="text-gray-600">Overview of the steps to join and what the enrollment numbers tell us</label>
          <EnrolmentBottomPart />
       </PublicSectionsDiv>
     );
}

export default EnrolmentSection;