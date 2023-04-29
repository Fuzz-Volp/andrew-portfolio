import React from "react";

export interface ICartProps {
  firstName: string;
  lastName: string;
  card: number;
  address: string;
}

const CartModal: React.FunctionComponent<ICartProps> = (props) => {
  return <div></div>;
};

export default CartModal;
