import { FC } from "react";
import { Card } from "./Card";
import { Product } from "../types/product";

type Props = {
  items: Product[];
  onClickCard: (arg: Product) => void;
};

export const NewArrivalsSection: FC<Props> = ({ items, onClickCard }) => {
  return (
    <div className="mt-20">
      <div className="flex-center">
        <div className="bg-[url('./assets/lines.png')] bg-center text-4xl font-extrabold dark:text-white">
          NEW ARRIVALS
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 justify-between gap-x-6 gap-y-24 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)]">
        {items.map((item) => (
          <Card key={item.id} item={item} onClick={onClickCard} />
        ))}
      </div>
    </div>
  );
};
