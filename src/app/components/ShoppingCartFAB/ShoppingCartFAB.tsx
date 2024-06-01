"use client";
import { DEBOUNCED_TIME } from "@/app/constants";
import { getCartTotalQuantity } from "@/app/store/cart/selectors";
import { useAppSelector } from "@/app/store/hooks";
import { useEffect, useState } from "react";
import { RiShoppingBasketLine } from "react-icons/ri";

const ShoppingCartFAB = () => {
  const totalQuantity = useAppSelector((state) => getCartTotalQuantity(state));

  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    if (!totalQuantity) return;

    setIsAnimate(true);
    const timeout = setTimeout(() => {
      setIsAnimate(false);
    }, DEBOUNCED_TIME);

    return () => {
      clearInterval(timeout);
    };
  }, [totalQuantity]);

  return (
    <button
      type="button"
      className="fixed lg:absolute lg:top-[100px] lg:end-6 bottom-8  z-20 shadow-lg drop-shadow-lg inline-flex w-14 h-14 justify-center items-center p-2 text-sm font-medium text-center bg-secondary-400 rounded-full "
    >
      <RiShoppingBasketLine className="text-primary-950" size={32} />
      <span className="sr-only">عربة التسوق</span>
      <div
        className={`absolute shadow-md inline-flex items-center justify-center w-7 h-7 text-xs font-bold text-white bg-primary-950  rounded-full -top-2 -end-2  ${
          isAnimate ? "animate-ping" : ""
        }`}
      >
        {totalQuantity}
      </div>
    </button>
  );
};

export default ShoppingCartFAB;
