import { Navigate } from "react-router-dom";
import Loading from "../Components/LoadingSpiner/Loading";
import useRole from "../Hooks/useRole";

const AdminRoutes = ({children}) => {
    const {role,isLoading}=useRole()
    if(isLoading) return <Loading></Loading>
    if(role==='admin') return children
 return <Navigate to='/dashboard'></Navigate>

};

export default AdminRoutes;