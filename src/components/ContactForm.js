import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={styles.contact} data-scroll-to="contactContainer">
      <div className={styles.frameMainMenu}>
        <div className={styles.frameMainMenuChild} />
        <div className={styles.frameParent}>
          <div className={styles.contactUsNowParent}>
            <b className={styles.contactUsNow}>Contact us now</b>
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
              Get started noew try our product
            </div>
            <div className={styles.enterYourEmailHereParent}>
              <div className={styles.enterYourEmail}>Enter your email here</div>
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
        <b className={styles.biccas}>Biccas</b>
      </div>
      <div className={styles.thankYouForYourInterestInParent}>
        <div className={styles.thankYouFor}>
          Thank you for your interest in our product.
        </div>
        <div className={styles.theProductIsContainer}>
          <p
            className={styles.theProductIs}
          >{`The product is designed to serve the `}</p>
          <p className={styles.theProductIs}>
            SheCodes Hackathon 2023 competition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
