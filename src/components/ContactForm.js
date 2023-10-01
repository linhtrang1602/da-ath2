import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={styles.contact} data-scroll-to="contactContainer">
      <div className={styles.frameMainMenu}>
        <div className={styles.frameMainMenuChild} />
        <div className={styles.frameParent}>
          <div className={styles.contactUsNowParent}>
            <b className={styles.contactUsNow}>Thông tin liên lạc</b>
            <div className={styles.biinstagramParent}>
              <img
                className={styles.biinstagramIcon}
                alt=""
                src="/biinstagram.svg"
              />
              <img
                className={styles.biinstagramIcon}
                alt=""
                src="/lafacebook.svg"
              />
              <img
                className={styles.biinstagramIcon}
                alt=""
                src="/iconoirdiscord10.svg"
              />
            </div>
          </div>
          <div className={styles.getStartedNoewTryOurProduParent}>
            <div className={styles.getStartedNoew}>
              Đăng ký trải nghiệm mới nhất
            </div>
            <div className={styles.enterYourEmailHereParent}>
              <div className={styles.enterYourEmail}>Hãy nhập email</div>
              <div className={styles.groupChild} />
              <div className={styles.groupItem} />
              <img
                className={styles.arrowRight11Icon}
                alt=""
                src="/arrowright1-1.svg"
              />
            </div>
          </div>
        </div>
        <b className={styles.biccas}>Da ATH</b>
      </div>
      <div className={styles.thankYouForYourInterestInParent}>
        <div className={styles.thankYouFor}>
          Cảm ơn bạn đã quan tâm đến sản phẩm của chúng tôi!
        </div>
        <div className={styles.theProductIsContainer}>
          <p
            className={styles.theProductIs}
          >{`Sản phẩm này được xây dựng trong khuôn khổ`}</p>
          <p className={styles.theProductIs}>
            SheCodes Hackathon 2023.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
