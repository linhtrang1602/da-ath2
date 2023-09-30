import { useMemo } from "react";
import styles from "./EasyToUseContainer.module.css";

const EasyToUseContainer = ({
  productImageUrl,
  featureDescription,
  productDescription,
  propWidth,
}) => {
  const easyToUseStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.frameParent}>
      <img className={styles.frameChild} alt="" src={productImageUrl} />
      <div className={styles.easyToUseParent}>
        <b className={styles.easyToUse} style={easyToUseStyle}>
          {featureDescription}
        </b>
        <div className={styles.aSimpleUserFriendly}>{productDescription}</div>
      </div>
    </div>
  );
};

export default EasyToUseContainer;
