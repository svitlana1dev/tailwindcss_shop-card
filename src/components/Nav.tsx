import { FC, MouseEventHandler } from "react";
import { TbShoppingBag } from "react-icons/tb";
import { ReactComponent as NikeLogo } from "../assets/nike-logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

type Props = {
  onClickShoppingBtn: MouseEventHandler<HTMLDivElement>;
  quantityProducts: number;
};

export const Nav: FC<Props> = ({ onClickShoppingBtn, quantityProducts }) => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  return (
    <nav className="relative z-10 flex flex-wrap items-center justify-between">
      <a href="#">
        <NikeLogo className="h-20 w-20 dark:fill-white" />
      </a>

      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
        className="rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 lg:hidden"
      >
        <RxHamburgerMenu size={25} />
      </button>

      <div
        className={`${
          isMobileMenuShown === false && "hidden"
        } w-full lg:block lg:w-auto`}
      >
        <ul className="flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 text-lg lg:flex-row lg:space-x-8 lg:border-none lg:bg-transparent lg:dark:text-white">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`cursor-pointer rounded px-3 py-2 lg:hover:bg-transparent lg:hover:text-blue-500 ${
                  i === 0
                    ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500 "
                    : "hover:bg-gray-100"
                } ${(i === 3 || i === 4) && "lg:text-white"}`}
                key={route}
              >
                <a>{route}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        onClick={onClickShoppingBtn}
        className="btn-press-anim fixed bottom-4 left-4 lg:static lg:mr-8"
      >
        <div className="flex-center h-12 w-12 cursor-pointer rounded-full bg-white shadow-md relative">
          <TbShoppingBag />

          {quantityProducts > 0 && (
            <div className="rounded-full bg-red-500 w-7 h-7 flex justify-center items-center absolute -right-2 -bottom-2">
              <p className="text-xs">{quantityProducts}</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
