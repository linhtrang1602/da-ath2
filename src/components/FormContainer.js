import Property1Default4 from "./Property1Default4";
import styles from "./FormContainer.module.css";

const FormContainer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.groupRecyclePic}>
        <img
          className={styles.groupRecyclePicChild}
          alt=""
          src="/ellipse-6.svg"
        />
        <img className={styles.artboard41} alt="" src="/artboard-4-1@2x.png" />
      </div>
      <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      <div className={styles.maskGroupParent}>
        <img
          className={styles.maskGroupIcon1}
          alt=""
          src="/mask-group1@2x.png"
        />
        <div className={styles.recyclingAndWaste}>
          Recycling and waste classification are simple ways to protect the
          environment. If you are concerned about waste classification, let us
          accompany you in environmental protection
        </div>
        <Property1Default4 />
      </div>
    </div>
  );
};

export default FormContainer;
