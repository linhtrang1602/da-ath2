import styles from "./Property1Default4.module.css";

const openDemo = () => {
  window.open("https://google.com/");
};

const Property1Default4 = () => {
  return (
    <div className={styles.property1default} onClick={openDemo}>
      <div className={styles.classifyNow}>phân loại rác ngay</div>
    </div>
  );
};

export default Property1Default4;
