// // import '../styles/common.css';
// import { useEffect, useState } from 'react';
// import './CheckoutForm.css'
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// // import useAxiosSecure from '../../Hooks/useAxiosSecure';
// import useAuth from '../../Hooks/useAuth';
// import useAxiosSecure from '../../Hooks/useAxiosSecure';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';
// const CheckoutForm = ({ closeModal, price }) => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const [clientSecret, setClientSecret] = useState()
//     const [cardError, setCardError] = useState('')
//     const [processing, setProcessing] = useState(false);
//     const navigate=useNavigate()
//     const user = useAuth()
//     const axiosSecure = useAxiosSecure()
//     useEffect(() => {
//         // fetch client secret
//         if (price > 1) {
//             getClientSecret({ price })

//         }
//     }, [price])
//     const getClientSecret = async price => {
//         const { data } = await axiosSecure.post('/create-payment-intent', price)
//         // return data
//         console.log('secret ', data)
//         setClientSecret(data.clientSecret)
//     }

//     const handleSubmit = async (event) => {
//         // Block native form submission.
//         console.log('payment hobe')
//         event.preventDefault();
//         setProcessing(true)
//         if (!stripe || !elements) {

//             // form submission until Stripe.js has loaded.
//             return;
//         }

//         // each type of element.
//         const card = elements.getElement(CardElement);

//         if (card == null) {
//             return;
//         }

//         // Use your card Element with other Stripe.js APIs
//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card,
//         });

//         if (error) {
//             console.log('[error]', error);
//             setCardError(error)
//             setProcessing(false)
//             return
//         } else {
//             console.log('[PaymentMethod]', paymentMethod);
//             setCardError(' ')
//         }
//         // payment confirm
//         const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//                 card: card,
//                 billing_details: {
//                     email: user?.email,
//                     name: user?.displayName

//                 }
//             }
//         })
//         if (confirmError) {
//             console.log(confirmError)
//             setCardError(confirmError.message)
//             setProcessing(false)
//             return

//         }
//         console.log(paymentIntent)

//         if (paymentIntent.status === 'succeeded') {
//             // 1 create paymet info object
//             const paymentInfo = {
//                 transactionId: paymentIntent.id,
//                 date: new Date()
//             }
//             console.log(paymentInfo)
//          try{
//       const{data}=  await axiosSecure.post('/saving',paymentInfo)
//       if (data.transactionId) {
//         // toast.success('Successfully send!');
//         Swal.fire("Success send your member request!");
//         navigate('/')

//     } else {
//         // toast.success('Success! Please wait ');
//         Swal.fire("Congrats!!!!!!!!!");
//        navigate('/')
//     }
//          }
//          catch(err){
//             console.log(err)
//          }
//         }
//         setProcessing(false)
//     };
// console.log(stripe,processing,clientSecret)
//     return (
//         <>
//             <form onSubmit={ handleSubmit}>
//                 <CardElement
//                     options={{
//                         style: {
//                             base: {
//                                 fontSize: '16px',
//                                 color: '#424770',
//                                 '::placeholder': {
//                                     color: '#aab7c4',
//                                 },
//                             },
//                             invalid: {
//                                 color: '#9e2146',
//                             },
//                         },
//                     }}
//                 />
//                 {/* <button type="submit" disabled={!stripe}>
//         Pay
//       </button> */}
//                 <div className='flex mt-2 justify-around'>
//                     <button
//                         type='submit'
//                         className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
//                         disabled={!stripe || !clientSecret ||processing}
//                     >
//                         Pay ${price}
//                     </button>
//                     <button
//                         type='button'
//                         className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
//                         onClick={closeModal}
//                     >
//                         No
//                     </button>

//                 </div>
//             </form>
//             {cardError && <p className='text-xl text-red-500'>{cardError}</p>}
//         </>
//     );
// };
// export default CheckoutForm

import { useEffect, useState } from 'react';
import './CheckoutForm.css';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ closeModal, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState();
    const [cardError, setCardError] = useState('');
    const [processing, setProcessing] = useState(false);
    const navigate = useNavigate();
    const user = useAuth();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (price > 1) {
            getClientSecret({ price });
        }
    }, [price]);

    const getClientSecret = async (price) => {
        try {
            const { data } = await axiosSecure.post('/create-payment-intent', price);
            setClientSecret(data.clientSecret);
        } catch (error) {
            console.error('Error fetching client secret:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        try {
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card,
            });

            if (error) {
                setCardError(error.message);
                setProcessing(false);
                return;
            } else {
                setCardError('');
            }

            const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email,
                        name: user?.displayName,
                    },
                },
            });

            if (confirmError) {
                setCardError(confirmError.message);
                setProcessing(false);
                return;
            }

            if (paymentIntent.status === 'succeeded') {
                const paymentInfo = {
                    transactionId: paymentIntent.id,
                    date: new Date(),
                };

                try {
                    const { data } = await axiosSecure.post('/saving', paymentInfo);
                    console.log(data)
                    if (data.acknowledged===true) {
                        Swal.fire("Success", "Successfully Payment  ");
                        navigate('/dashboard');
                    } else {
                        Swal.fire("Pending", "Please wait for admin approval.", "info");
                    }
                } catch (error) {
                    console.error('Error saving payment info:', error);
                }
            }
        } catch (error) {
            console.error('Payment error:', error);
            setCardError('Payment failed. Please try again.');
        } finally {
            setProcessing(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='flex mt-2 justify-around'>
                    <button
                        type='submit'
                        className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                        disabled={!stripe || !clientSecret || processing}
                    >
                        Pay ${price}
                    </button>
                    <button
                        type='button'
                        className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                        onClick={closeModal}
                    >
                        No
                    </button>
                </div>
            </form>
            {cardError && <p className='text-xl text-red-500'>{cardError}</p>}
        </>
    );
};

export default CheckoutForm;
