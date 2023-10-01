import Property1Default3 from "./Property1Default3";
import styles from "./EnvironmentCard.module.css";

const EnvironmentCard = () => {
  return (
    <div className={styles.about} data-scroll-to="aboutContainer">
      <Property1Default3
        property1DefaultPosition="relative"
        property1DefaultFlexShrink="0"
      />
      <div className={styles.bothWeAndYouCareAboutTheParent}>
        <div className={styles.bothWeAnd}>
          Tất cả chúng ta đều quan tâm đến môi trường
        </div>
        <div className={styles.weUnderstandHow}>
          Chúng tôi hiểu tầm quan trọng của thiên nhiên đối với con người. Hơn bao 
          giờ hết, chúng ta cần nâng cao tầm quan trọng của việc bảo vệ 
          môi trường. Xin đừng coi đó là một vấn đề quá xa vời. Chúng ta có thể 
          bảo vệ môi trường thông qua những hành động đơn giản hàng ngày như 
          phân loại rác. "Nhưng tôi không biết đâu là rác hữu cơ còn đâu là rác vô cơ!" -
          Đừng lo lắng, hãy để Da ATH giúp bạn phân loại rác nhé.
        </div>
      </div>
    </div>
  );
};

export default EnvironmentCard;
