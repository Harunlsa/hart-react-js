import { Container } from "react-bootstrap";
import HeroSection from "../components/Home/HeroSection";
import FeaturedServices from "../components/Home/FeaturedServices";
import ClientsSection from "../components/Home/ClientsSection";
import FaqSection from "../components/Home/FaqSection";
import ContactSection from "../components/Home/ContactSection";
import PortfolioSection from "../components/Home/PortfolioSection";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <FeaturedServices></FeaturedServices>
      <ClientsSection></ClientsSection>
      {/* <PortfolioSection></PortfolioSection> */}
      <FaqSection></FaqSection>
      <ContactSection></ContactSection>
    </>
  );
};

export default Home;
