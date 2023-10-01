import { useCallback } from "react";
import Property1Default from "./Property1Default";
import styles from "./Header.module.css";

const Header = () => {
  const onAboutTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='aboutContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onProductTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='productContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onMembersTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='frameMemberContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contactContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.mainMenu}>
      <div className={styles.mainMenuChild} />
      <div className={styles.mainMenu1}>
        <b className={styles.daAth}>Da ATH</b>
        <div className={styles.menu}>
          <div className={styles.main}>Trang chủ</div>
          <div className={styles.about} onClick={onAboutTextClick}>
            Về Da ATH
          </div>
          <div className={styles.about} onClick={onProductTextClick}>
            Sản phẩm
          </div>
          <div className={styles.about} onClick={onMembersTextClick}>
            Đội phát triển
          </div>
          <div className={styles.about} onClick={onContactTextClick}>
            Liên hệ
          </div>
        </div>
        <Property1Default
          property1DefaultPosition="absolute"
          property1DefaultTop="0px"
          property1DefaultLeft="1096px"
        />
      </div>
    </div>
  );
};

export default Header;
