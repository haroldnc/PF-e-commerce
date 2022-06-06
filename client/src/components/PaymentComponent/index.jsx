import React from 'react';
import ReactDOM from 'react-dom';
import {CardCvcElement, CardElement, Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


import CheckoutForm from "../CheckoutForm"
import { PaymentContainer } from './styledPayment';

const stripePromise = loadStripe("pk_test_51L5zjMHq6KUjuv7IIFciLODh9WoDWs5rnmbUrfSZVOfMMWN67dB15Ricdwoi8UNFfuIHL6lgzSTocRXWlYa7aBSA00oP1VlFMI");


export default function Payment(){


    return(

        <PaymentContainer>
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
        </PaymentContainer>
    )
}