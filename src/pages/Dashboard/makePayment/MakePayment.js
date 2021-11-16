import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
// import { CardElement, Elements, useElements, useStripe } from '../../src';

const stripePromise = loadStripe('pk_test_51Jvx6NAnuYBYVLbU2Vdbfr1n94ClBv6DsExH2Q81OyYpyzyxS0VgyAke6SyrltTrgHeBhabVdEAhmkArhgQCpXHL00J8pjPXkh');
const MakePayment = () => {
    const [appointment, setAppointment] = useState({});
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://protected-waters-90005.herokuapp.com/appointments/${id}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [id]);
    return (
        <div>
            <h3>Make Payment for {id}</h3>
            {/* <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements> */}
        </div>
    );
};

export default MakePayment;