import { useEffect, useState } from "react";
import { Nav } from "./components/Nav";
import { NewArrivalsSection } from "./components/NewArrivalsSection";
import { ShoeDetail } from "./components/ShoeDetail";
import { Sidebar } from "./components/Sidebar";
import { SHOE_LIST } from "./constant";
import { Cart } from "./components/Cart";
import { BiMoon, BiSun } from "react-icons/bi";
import { CartItems, Product, ProductItem } from "./types/product";

export const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState<Product>(SHOE_LIST[0]);
  const [cartItems, setCartItems] = useState<CartItems>([]);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === "true") {
      window.document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "isDarkMode",
      JSON.stringify(window.document.documentElement.classList.contains("dark"))
    );
  };

  const removeFromCart = (productId: number) => {
    const updatedCartItems = cartItems.filter(
      ({ product }: ProductItem) => product.id !== productId
    );

    setCartItems(updatedCartItems);
  };

  const addToCart = (
    product: Product,
    qty: string | null,
    size: string | null
  ) => {
    if (qty && size) {
      const updatedCartItems: CartItems = [...cartItems];
      const existingItemIndex = cartItems.findIndex(
        (item: ProductItem) => item.product.id === product.id
      );
      if (existingItemIndex > -1) {
        updatedCartItems[existingItemIndex].qty = qty;
        updatedCartItems[existingItemIndex].size = size;
      } else {
        updatedCartItems.push({ product, qty, size });
      }

      setCartItems(updatedCartItems);
    }
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen((currentState) => !currentState);
  };

  return (
    <div className="animate-fadeIn p-10 dark:bg-night xl:px-24">
      <Nav
        onClickShoppingBtn={handleSidebarToggle}
        quantityProducts={cartItems.length}
      />
      <ShoeDetail shoe={currentShoe} onClickAdd={addToCart} />
      <NewArrivalsSection items={SHOE_LIST} onClickCard={setCurrentShoe} />
      <Sidebar isOpen={isSidebarOpen} onClickClose={handleSidebarToggle}>
        <Cart cartItems={cartItems} onClickTrash={removeFromCart} />
      </Sidebar>
      <div className=" fixed bottom-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="rounded-full bg-night-50 px-4 py-2 text-white shadow-lg dark:bg-white dark:text-night"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  );
};
