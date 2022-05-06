import React from "react";
import checkmark from "../Images/checkmark.gif";
const PaymentSuccess = () => {
  return (
    <>
      <center>
        <h1>Payment successful!</h1>
        <h5>
          Thank you for shopping with us. Please check your email for your order
          confirmation.
        </h5><br/>
        <img src={checkmark}/>
      </center>
    </>
  );
};

export default PaymentSuccess;
