import HeroSection from "../components/Home/HeroSection";
import FeaturedServices from "../components/Home/FeaturedServices";
import ClientsSection from "../components/Home/ClientsSection";
import FaqSection from "../components/Home/FaqSection";
import ContactSection from "../components/Home/ContactSection";
import SEO from "../components/SEO";
// import PortfolioSection from "../components/Home/PortfolioSection";

const Home = () => {
  return (
    <>
      <SEO
        title=""
        description="Hart Industries Limited manufactures durable plastic products including buckets, basins, racks, and storage solutions for homes and businesses accross Nigeria and beyond."
        canonical="/"
      />
      <HeroSection />
      <FeaturedServices />
      <ClientsSection />
      {/* <PortfolioSection></PortfolioSection> */}
      <FaqSection />
      <ContactSection />
    </>
  );
};

export default Home;
