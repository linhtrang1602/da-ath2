import EasyToUseContainer from "./EasyToUseContainer";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.product} data-scroll-to="productContainer">
      <div className={styles.ourProduct}>VỚI DA ATH</div>
      <div className={styles.frameParent}>
        <EasyToUseContainer
          productImageUrl="/frame-12.svg"
          featureDescription="Dễ sử dụng"
          productDescription="Giao diện đơn giản, thân thiện với người dùng."
        />
        <EasyToUseContainer
          productImageUrl="/frame-11.svg"
          featureDescription="Thân thiện với môi trường"
          productDescription="Với tính năng đơn giản nhưng vượt trội, Da ATH sẽ giúp bạn phân loại rác một cách dễ dàng."
          propWidth="414px"
        />
        <EasyToUseContainer
          productImageUrl="/frame-9.svg"
          featureDescription="Thuận tiện"
          productDescription="Chỉ cần chụp ảnh rác, Da ATH sẽ giúp bạn phân loại rác một cách dễ dàng."
          propWidth="unset"
        />
      </div>
    </div>
  );
};

export default ProductCard;
