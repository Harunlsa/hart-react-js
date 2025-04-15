import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const clients = [
  "milacron.png",
  "windsor.png",
  "haitian.png",
  "jagmohan.png",
  "cat.png",
  "prasad.png",
  // "cummins.png",
  "cummins (Custom).png",
];

const ClientsSection = () => {
  const swiperRef = useRef(null);

  return (
    <Section>
      <Container>
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView="auto"
          // pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 80,
            },
            992: {
              slidesPerView: 6,
              spaceBetween: 120,
            },
          }}
          className="init-swiper"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <ClientImage
                src={`/src/assets/images/clients/${client}`}
                alt={`${client.substring(0, client.lastIndexOf("."))}`}
                className="img-fluid"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
};

// Styled Components
const Section = styled.section`
  padding: 60px 0;
  background-color: #f1f6fe;
  .swiper-wrapper {
    align-items: center;
  }
`;

// const Container = styled.div`
//   max-width: 1140px;
//   margin: 0 auto;
//   padding: 0 15px;
// `;

const ClientImage = styled.img`
  max-width: 116px;
  height: auto;
  // max-height: 50px;
  margin-right: 120px;
  object-fit: contain;

  @media (max-width: 992px) {
    margin-right: 80px;
  }
  @media (max-width: 640px) {
    margin-right: 60px;
  }
  @media (max-width: 480px) {
    margin-right: 40px;
  }
`;

export default ClientsSection;
