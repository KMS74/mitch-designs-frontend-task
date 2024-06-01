"use client";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/app/store/hooks";
import Image from "next/image";
import { LuHeart } from "react-icons/lu";
import { TfiFullscreen } from "react-icons/tfi";
import { CgSpinner } from "react-icons/cg";
import { toast } from "react-toastify";
import { Product } from "@/app/types/product.type";
import placeholderImage from "/public/images/placeholder-image.jpg";
import { addToCart } from "@/app/store/cart/cartSlice";
import { DEBOUNCED_TIME } from "@/app/constants";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (!isButtonDisabled) return;

    setIsButtonDisabled(true);
    const timeout = setTimeout(() => {
      setIsButtonDisabled(false);
    }, DEBOUNCED_TIME);

    return () => {
      clearInterval(timeout);
    };
  }, [isButtonDisabled]);

  const handleAddToCart = () => {
    dispatch(addToCart(product.id));
    setIsButtonDisabled(true);
    toast.success("تمت إضافة المنتج إلى السلة");
  };

  return (
    <div className="card">
      <div className="w-full relative flex items-center justify-center bg-primary-50 h-96 border-b border-solid border-gray-200">
        <Image
          className=""
          src={
            typeof product?.main_image === "string"
              ? product?.main_image
              : placeholderImage
          }
          fill
          alt={product?.ar_name}
        />
        <button className="absolute shadow-lg drop-shadow-lg bottom-4 left-4 inline-flex items-center justify-center p-2 bg-white border-2 border-solid border-gray-500 rounded-full">
          <TfiFullscreen size={20} />
        </button>
      </div>
      <div className="p-4 flex flex-col justify-between">
        <h3
          title={product?.ar_name}
          className="text-xl font-bold overflow-hidden text-ellipsis text-nowrap mb-1"
        >
          {product?.ar_name}
        </h3>

        {/* Product Size */}
        {/* <p className="flex justify-start gap-1 items-center text-sm font-bold text-gray-600">
          <span>gm</span>
          <span>100</span>
        </p> */}

        <div className="flex gap-4 items-center my-3">
          <p className="rounded-md px-1 bg-secondary-400">
            <span>99</span>

            <sub className="inline-block text-xl transform translate-y-2 font-bold">
              {product?.price}
            </sub>

            <span>EGP</span>
          </p>

          {product?.sale_price && (
            <p className="text-gray-500 line-through">
              {product?.sale_price} EGP
            </p>
          )}
        </div>

        {/* Products Variants */}
        {/* <div className="flex flex-row items-center gap-2 flex-wrap mt-4">
          <button className="flex justify-center gap-1 items-center p-2 text-nowrap border-2 border-solid border-primary-950 text-sm rounded-lg">
            <span>GM</span>
            <span>100</span>
          </button>
          <button className="flex justify-center gap-1 items-center p-2 text-nowrap border-2 border-solid border-gray-400 text-sm rounded-lg">
            <span>GM</span>
            <span>200</span>
          </button>
          <button className="flex justify-center gap-1 items-center p-2 text-nowrap border-2 border-solid border-gray-400 text-sm rounded-lg">
            <span>GM</span>
            <span>500</span>
          </button>
        </div> */}
      </div>

      <div className="my-auto p-4 flex flex-row items-center gap-4">
        <button
          className="bg-primary-950 text-sm flex-1 text-white text-start rounded-xl px-4 py-3 overflow-hidden text-ellipsis text-nowrap disabled:cursor-not-allowed "
          onClick={handleAddToCart}
          disabled={isButtonDisabled}
        >
          {isButtonDisabled ? (
            <div className="inline-flex items-center gap-2">
              <span className="inline-block ms-2">جاري الإضافة</span>

              <CgSpinner className="animate-spin inline-block" size={20} />
            </div>
          ) : (
            "أضف إلى السلة"
          )}
        </button>
        <button className="rounded-full bg-primary-50 w-12 h-12 p-2 inline-flex justify-center items-center">
          <LuHeart className=" text-primary-950" size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
