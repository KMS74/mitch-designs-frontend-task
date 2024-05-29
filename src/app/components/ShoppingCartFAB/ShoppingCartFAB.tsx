import { RiShoppingBasketLine } from "react-icons/ri";

const ShoppingCartFAB = () => {
  return (
    <button
      type="button"
      className="fixed lg:absolute lg:top-[100px] lg:end-6 bottom-8  z-20 shadow-lg drop-shadow-lg inline-flex w-14 h-14 justify-center items-center p-2 text-sm font-medium text-center bg-secondary-400 rounded-full "
    >
      <RiShoppingBasketLine className="text-primary-950" size={32} />
      <span className="sr-only">Notifications</span>
      <div className="absolute shadow-md inline-flex items-center justify-center w-7 h-7 text-xs font-bold text-white bg-primary-950  rounded-full -top-2 -end-2">
        2
      </div>
    </button>
  );
};

export default ShoppingCartFAB;
