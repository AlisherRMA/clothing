import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./stripe-button.styles.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51JzGm1IwiGgjXAJkMhQYUPVDAVibg7J8mjygbERHw9x97mTJ3ycAsTx2prPsJfkkoNCRd06XDSd0p8qlxDkkz2R300kDwwHuAP";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWM Clothing"
      billingAddress
      shippingAddress
      image="https://www.svgrepo.com/show/368435/delivery-truck.svg"
      description={`Your total is $${price}. (TEST MODE)`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      ComponentClass="payment-btn"
      className="payment-btn"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
