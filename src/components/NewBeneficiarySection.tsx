// import { Link } from "react-router-dom";
import AdminSideCard from "../ui/AdminSideCard";
import LoginForm from "./LoginForm";
import NewBeneficiaryForm from "./NewBeneficiaryForm";


const NewBeneficiarySection = () => {
     return (
        <AdminSideCard>
        <NewBeneficiaryForm />
        </AdminSideCard>
     );
}

export default NewBeneficiarySection;