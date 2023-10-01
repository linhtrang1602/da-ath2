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
        Tái chế và phân loại rác là những cách cực kỳ đơn giản để bảo vệ môi trường. 
        Nếu bạn đang quan tâm đến việc phân loại rác, hãy để chúng tôi đồng hành cùng bạn!
        </div>
        <Property1Default4 />
      </div>
    </div>
  );
};

export default FormContainer;
