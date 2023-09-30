import EasyToUseContainer from "./EasyToUseContainer";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.product} data-scroll-to="productContainer">
      <div className={styles.ourProduct}>OUR PRODUCT</div>
      <div className={styles.frameParent}>
        <EasyToUseContainer
          productImageUrl="/frame-12.svg"
          featureDescription="Easy To Use"
          productDescription="A simple, user-friendly interface ensures you have the best experience with the product."
        />
        <EasyToUseContainer
          productImageUrl="/frame-11.svg"
          featureDescription="Environmentally friendly"
          productDescription="With a simple interface and superior features, DA ATH's products always protect the environment."
          propWidth="414px"
        />
        <EasyToUseContainer
          productImageUrl="/frame-9.svg"
          featureDescription="Convenient"
          productDescription="Providing accurate and fast information about waste types to help you sort easily."
          propWidth="unset"
        />
      </div>
    </div>
  );
};

export default ProductCard;
