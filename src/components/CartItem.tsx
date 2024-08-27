import { FC } from "react";
import { CiTrash } from "react-icons/ci";
import { Select } from "./Select";
import { SIZES, QTY } from "../constant";
import { CartItem as CartItemType } from "../types/product";

type Props = {
  item: CartItemType;
  onClickTrash: (arg: number) => void;
};

export const CartItem: FC<Props> = ({
  item: { product, qty, size },
  onClickTrash,
}) => {
  return (
    <div
      className={
        "cursor-pointer space-y-2 bg-gray-50 p-2 hover:bg-[#DAFFA2] dark:bg-transparent dark:hover:bg-night-50"
      }
    >
      <div className="flex  space-x-2 ">
        <img className="h-24" src={product.src} />
        <div className="space-y-2">
          <div className="font-bold dark:text-white">{product.title}</div>
          <div className="text-sm text-gray-400">{product.description}</div>
        </div>
        <div className="font-bold dark:text-white">{product.price}$</div>
      </div>

      <div className="flex justify-between pl-32">
        <div className="flex space-x-6">
          <div>
            <div className="font-bold dark:text-white">SIZE</div>
            <Select
              value={size}
              title=""
              options={SIZES}
              className={"w-16 p-1 pl-2"}
            />
          </div>
          <div>
            <div className="font-bold dark:text-white">QTY</div>
            <Select
              value={qty}
              title=""
              options={QTY}
              className={"w-16 p-1 pl-2"}
            />
          </div>
        </div>
        <button onClick={() => onClickTrash(product.id)}>
          <CiTrash size={25} className="text-black dark:text-white" />
        </button>
      </div>
    </div>
  );
};
