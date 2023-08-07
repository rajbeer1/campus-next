import { loadStripe } from '@stripe/stripe-js';

import React from 'react';

export async function checkout({ lineItems }) {
  let stripePromise = null;
  const getstripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(
        'pk_test_51NaDDHSAtHhlAeTeowmu1zptF5BYiZjmEpaCKHmr9IOilAqLlrm4J8l6FFYuND6HaFHIk3uNcoB4X5WHXqTep4zT00ONpGupQG'
      );
    }
    return stripePromise;
  };
  const stripe = await getstripe(
    'pk_test_51NaDDHSAtHhlAeTeowmu1zptF5BYiZjmEpaCKHmr9IOilAqLlrm4J8l6FFYuND6HaFHIk3uNcoB4X5WHXqTep4zT00ONpGupQG'
  );
  await stripe.redirectToCheckout({
    mode: 'payment',
    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  });
}
