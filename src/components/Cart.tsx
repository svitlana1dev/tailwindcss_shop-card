import { FC } from "react";
import { CartItem } from "./CartItem";
import { CartItems } from "../types/product";

type Props = {
  cartItems: CartItems;
  onClickTrash: (arg: number) => void;
};

export const Cart: FC<Props> = ({ cartItems, onClickTrash }) => {
  return (
    <>
      <h2 className="mb-5 text-4xl font-bold dark:text-white">Cart</h2>
      <ul className="space-y-5">
        {cartItems.map((cartItem) => (
          <li key={cartItem.product.id}>
            <CartItem item={cartItem} onClickTrash={onClickTrash} />
          </li>
        ))}
      </ul>
    </>
  );
};
