import FormContainer from "../components/FormContainer";
import EnvironmentCard from "../components/EnvironmentCard";
import ProductCard from "../components/ProductCard";
import Property1Default2 from "../components/Property1Default2";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.landingPageChild} />
      <FormContainer />
      <EnvironmentCard />
      <ProductCard />
      <Property1Default2
        phphoneLight="/phphonelight2.svg"
        iconoirdiscord="/iconoirdiscord5.svg"
        phphoneLight1="/phphonelight3.svg"
        iconoirdiscord1="/iconoirdiscord6.svg"
        phphoneLight2="/phphonelight4.svg"
        iconoirdiscord2="/iconoirdiscord7.svg"
        phphoneLight3="/phphonelight4.svg"
        iconoirdiscord3="/iconoirdiscord8.svg"
        phphoneLight4="/phphonelight4.svg"
        iconoirdiscord4="/iconoirdiscord9.svg"
        phphoneLight5="/phphonelight4.svg"
        iconoirdiscord5="/iconoirdiscord9.svg"
        property1DefaultFlexShrink="unset"
        property1DefaultPosition="absolute"
        property1DefaultTop="2627px"
        property1DefaultLeft="calc(50% - 720px)"
      />
      <ContactForm />
      <Header />
    </div>
  );
};

export default LandingPage;
