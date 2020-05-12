import React from 'react';
import { useSelector } from 'react-redux';

const Total = () => {
  const additionalPrice = useSelector(state => state.additionalPrice);
  const basePrice = useSelector(state => state.car.price);
  return (
    <div className="content">
      <h4>Total Amount: ${basePrice + additionalPrice}</h4>
    </div>
  );
};

export default Total;
