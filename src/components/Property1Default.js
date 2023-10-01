import { useMemo } from "react";
import styles from "./Property1Default.module.css";

const Property1Default = ({
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  return (
    <div className={styles.property1default} style={property1DefaultStyle}>
      <div className={styles.letsClassify}>Dùng thử Da ATH</div>
    </div>
  );
};

export default Property1Default;
