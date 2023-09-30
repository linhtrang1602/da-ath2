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
          Both we and you care about the environment
        </div>
        <div className={styles.weUnderstandHow}>
          We understand how important nature is to humanity. Now more than ever,
          it's a time for us to realize the importance of environmental
          protection. Please don't think of it as too big of an issue. We can
          protect the environment through simple daily actions: waste sorting.
          “I don't know which types of waste can be recycled and which cannot!”
          Don't worry, let DA ATH help you with waste classifycation.
        </div>
      </div>
    </div>
  );
};

export default EnvironmentCard;
