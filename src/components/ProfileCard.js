import { useMemo } from "react";
import Property1Variant3 from "./Property1Variant3";
import styles from "./ProfileCard.module.css";

const ProfileCard = ({
  imageDimensions,
  personAvatarUrl,
  imageDimensionsUrl,
  emailAvatarUrl,
  imageDimensionsText,
  phoneNumber,
  imageDimensionsTextUrl,
  userAvatarUrl,
  imageDimensionsText2,
  propLeft,
  propLeft1,
}) => {
  const memberssProfileStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div className={styles.memberssProfile} style={memberssProfileStyle}>
      <div className={styles.ellipseParent} style={frameDivStyle}>
        <img className={styles.frameChild} alt="" src={imageDimensions} />
        <div className={styles.trnhThNgcAnhParent}>
          <div className={styles.trnhThNgc}>{personAvatarUrl}</div>
          <div className={styles.frameParent}>
            <div className={styles.fluentmail16RegularParent}>
              <img
                className={styles.fluentmail16RegularIcon}
                alt=""
                src={imageDimensionsUrl}
              />
              <div className={styles.ngocem0601gmailcom}>{emailAvatarUrl}</div>
            </div>
            <div className={styles.phphoneLightParent}>
              <img
                className={styles.fluentmail16RegularIcon}
                alt=""
                src={imageDimensionsText}
              />
              <div className={styles.ngocem0601gmailcom}>{phoneNumber}</div>
            </div>
            <div className={styles.iconoirdiscordParent}>
              <img
                className={styles.fluentmail16RegularIcon}
                alt=""
                src={imageDimensionsTextUrl}
              />
              <div className={styles.ngocem0601gmailcom}>{userAvatarUrl}</div>
            </div>
          </div>
        </div>
      </div>
      <Property1Variant3
        group1="/group-12.svg"
        property1Variant3Position="absolute"
        property1Variant3Top="483px"
        property1Variant3Left="calc(50% - 16px)"
      />
    </div>
  );
};

export default ProfileCard;
