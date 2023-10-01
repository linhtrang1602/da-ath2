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

  // a function to open demo link
  const openDemo = () => {
    window.open("https://qanhb-shecodes-da-ath-chatbot-gbcptb.streamlit.app/");
  };

  return (
    <div className={styles.property1default} style={property1DefaultStyle} onClick={openDemo}>
      <div className={styles.letsClassify}>Dùng thử</div>
    </div>
  );
};

export default Property1Default;
