import React from 'react';
import {CardCvcElement, CardElement, CardExpiryElement, PaymentElement} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  
  
  
  return (
    <form>
      <PaymentElement/>
      <CardElement/>
      <CardExpiryElement/>
      <CardCvcElement/>
      <button>Submit</button>
    </form>
  );
};

export default CheckoutForm;