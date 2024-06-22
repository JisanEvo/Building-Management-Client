// import { Navigate } from "react-router-dom";
// import useRole from "../Hooks/useRole";
// import Loading from "../Components/LoadingSpiner/Loading";

// const MemberRoute = ({ children }) => {
//     const [role, isLoading] = useRole()
//     // console.log(role)
//     console.log(isLoading)
//     if (isLoading) return <Loading></Loading>
//     if (role === 'member') return children
//     return <div>
//         Swal.fire({
//             icon: "warning",
//         title: "Oops...",
//         text: "Only Member Can Payment ",

// });
//         <Navigate to='/dashboard'></Navigate>
//     </div>

// };

// export default MemberRoute;
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import useRole from "../Hooks/useRole";
import Loading from "../Components/LoadingSpiner/Loading";
import Swal from "sweetalert2";

const MemberRoute = ({ children }) => {
    const [role, isLoading] = useRole();

    useEffect(() => {
        if (role && role !== 'member') {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "Only Members Can Make Payments",
            });
        }
    }, [role]);

    if (isLoading) return <Loading />;
    if (role === 'member') return children;

    return <Navigate to='/dashboard' />;
};

export default MemberRoute;
