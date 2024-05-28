import Image from "next/image";
import { LuHeart } from "react-icons/lu";
import { TfiFullscreen } from "react-icons/tfi";

const ProductCard = () => {
  return (
    <div className="card">
      <div className="w-full relative flex justify-center items-center bg-primary-50 h-80">
        <Image
          src="https://placehold.co/200x200.png"
          width={200}
          height={200}
          alt="placeholder image"
        />
        <button className="absolute bottom-4 left-4 p-2 bg-white border-2 border-solid border-gray-500 rounded-full">
          <TfiFullscreen size={20} />
        </button>
      </div>
      <div className="p-4 flex flex-col justify-between">
        <h3 className="text-xl font-bold overflow-hidden text-ellipsis text-nowrap mb-1">
          قهوة ابو عوف محوج سادة
        </h3>

        <p className="text-sm font-bold text-gray-600">200 gm </p>

        <div className="flex gap-4 items-center my-3">
          <p className="rounded-md px-1 bg-secondary-400">
            <span>99</span>

            <sub className="inline-block text-xl transform translate-y-2 font-bold">
              25545
            </sub>

            <span>EGP</span>
          </p>
          <p className="text-gray-500 line-through">30.99 EGP</p>
        </div>

        <div className="flex flex-row items-center gap-2 flex-wrap mt-4">
          <button className="flex justify-center items-center p-3 text-nowrap border-2 border-solid border-primary-950 text-sm rounded-lg">
            100 GM
          </button>
          <button className="flex justify-center items-center p-3 text-nowrap border-2 border-solid border-gray-400 text-sm rounded-lg">
            200 GM
          </button>
          <button className="flex justify-center items-center p-3 text-nowrap border-2 border-solid border-gray-400 text-sm rounded-lg">
            500 GM
          </button>
        </div>
      </div>

      <div className="my-auto p-4 flex flex-row items-center gap-4">
        <button className="bg-primary-950 text-sm flex-1 text-white text-start rounded-xl px-4 py-3">
          اضف الي السلة
        </button>
        <button className="rounded-full bg-primary-50 w-12 h-12 p-2 flex justify-center items-center">
          <LuHeart className="text-primary-950" size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
