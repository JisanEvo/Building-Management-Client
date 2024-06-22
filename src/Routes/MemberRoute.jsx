import { Navigate } from "react-router-dom";
import useRole from "../Hooks/useRole";
import Loading from "../Components/LoadingSpiner/Loading";

const MemberRoute = ({children}) => {
    const {role,isLoading}=useRole()
    if(isLoading) return <Loading></Loading>
    if(role==='member') return children
 return <Navigate to='/dashboard'></Navigate>

};

export default MemberRoute;