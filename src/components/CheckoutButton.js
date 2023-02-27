import React from 'react';

const CheckoutButton = ({ cartItems }) => {
  const handleCheckOut = () => {
    console.log(cartItems);
  };
  return (
    <div>
      <button onClick={() => handleCheckOut()}>CheckOut</button>
    </div>
  );
};

export default CheckoutButton;
