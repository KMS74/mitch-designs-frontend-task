import Image from "next/image";
import { SlSizeFullscreen } from "react-icons/sl";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <div className="cardImageContainer">
        <Image
          src="https://placehold.co/150x150.png"
          width={150}
          height={150}
          alt="placeholder"
        />

        <div className="fullSizeIconContainer">
          <SlSizeFullscreen />
        </div>
      </div>

      <div className="cardContent">
        <h3 className="productTitle">اسم المنتج</h3>
        <p className="productSize">250 gm</p>
        <h4 className="productPrice">200 EGP</h4>
      </div>

      <div className="cardActionButtons">
        <button className="addToCartBtn">
          <PiShoppingCartSimple />
          اضف الى السلة
        </button>
        <button className="addToFavoriteBtn">
          <IoMdHeartEmpty />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
