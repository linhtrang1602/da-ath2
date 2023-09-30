import { useMemo } from "react";
import styles from "./Property1Variant3.module.css";

const Property1Variant3 = ({
  group1,
  property1Variant3Position,
  property1Variant3Top,
  property1Variant3Left,
}) => {
  const property1Variant3Style = useMemo(() => {
    return {
      position: property1Variant3Position,
      top: property1Variant3Top,
      left: property1Variant3Left,
    };
  }, [property1Variant3Position, property1Variant3Top, property1Variant3Left]);

  return (
    <div className={styles.property1variant3} style={property1Variant3Style}>
      <img className={styles.property1variant3Child} alt="" src={group1} />
    </div>
  );
};

export default Property1Variant3;
