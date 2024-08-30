// import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../../../../Hooks/useAuth";

import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";

// const PaymentHistory = () => {
//     const axiosSecure = useAxiosSecure
//     ();
//     const{user}=useAuth();
//         const { data: pay, isLoading, refetch } = useQuery({
//             queryKey: ['pay',user?.email],
//             queryFn: async () => {
//                 const { data } = await axiosSecure.get(`/saving?email=${user.email}`);
//                 return data;

//             },

//         }
//         console.log(data)
//     );

//     return (
//         <div>

//         </div>
//     );
// };

// export default PaymentHistory;

// import { useQuery } from "@tanstack/react-query";
// import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../Hooks/useAuth";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: payments, isLoading, error, refetch } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/saving/email${user.email}`);
            return data;
        },
        enabled: !!user?.email // only run the query if user email is available
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading payment history</div>;
    }

    return (
        <div>
            <h2>Payment History</h2>
            {payments && payments.length > 0 ? (
                <ul>
                    {payments?.map(payment => (
                        <li key={payment.transactionId}>
                            <p>Transaction ID: {payment.transactionId}</p>
                            <p>Date: {new Date(payment.date).toLocaleDateString()}</p>
                            <p>Amount: ${payment.amount}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No payment history available.</p>
            )}
        </div>
    );
};

export default PaymentHistory;
