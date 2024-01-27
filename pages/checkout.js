// pages/checkout.js

import { useState } from 'react';
import axios from 'axios';

const CheckoutPage = () => {
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [clientSecret, setClientSecret] = useState('');

  const createPaymentIntent = async () => {
    try {
      const response = await axios.post('/create-payment-intent', {
        amount: paymentAmount,
      });
      setClientSecret(response.data.clientSecret);
    } catch (error) {
      console.error('Error creating payment intent:', error);
    }
  };

  const handlePayment = async () => {
    const stripe = await loadStripe('your_stripe_publishable_key');
    const { error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'John Doe',
        },
      },
    });

    if (error) {
      console.error('Payment failed:', error);
    } else {
      console.log('Payment succeeded!');
    }
  };

  return (
    <div>
      <input
        type="number"
        value={paymentAmount}
        onChange={(e) => setPaymentAmount(e.target.value)}
      />
      <button onClick={createPaymentIntent}>Create Payment Intent</button>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default CheckoutPage;
