import { useMemo } from "react";
import styles from "./Property1Default3.module.css";

const Property1Default3 = ({
  property1DefaultPosition,
  property1DefaultFlexShrink,
}) => {
  const property1Default2Style = useMemo(() => {
    return {
      position: property1DefaultPosition,
      flexShrink: property1DefaultFlexShrink,
    };
  }, [property1DefaultPosition, property1DefaultFlexShrink]);

  return (
    <div className={styles.property1default} style={property1Default2Style}>
      <div className={styles.groupSlideshow}>
        <div className={styles.groupSlideshowInner}>
          <img className={styles.frameChild} alt="" src="/rectangle-2@2x.png" />
        </div>
        <div className={styles.groupSlideshowChild}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-21@2x.png"
          />
        </div>
        <div className={styles.frameDiv}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-22@2x.png"
          />
        </div>
        <div className={styles.groupSlideshowInner1}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-23@2x.png"
          />
        </div>
        <div className={styles.groupSlideshowInner2}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-24@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Property1Default3;
