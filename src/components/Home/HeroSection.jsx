import { useRef, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ActiveSlideContent from "./ActiveSlideContent";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const slides = [
    {
      background: "/assets/images/hero-bg/bg-hero-green.png",
      title: "Organise with Versatile ",
      highlight: "Racks",
      description:
        "Durable and flexible plastic racks perfect for efficient storage and organization in any setting.",
      imgSrc: "/assets/images/product-groups/racksGroup.png",
      color: "#bcff33",
      link: "products/racks",
      // minWidth: "100%",
    },
    {
      background: "/assets/images/hero-bg/bg-hero-blue.png",
      title: "Efficient and Reliable ",
      highlight: "Coolers",
      description:
        "Keep your items fresh and cool with our high-performance plastic coolers, ideal for all occasions.",
      imgSrc: "/assets/images/product-groups/coolersGroup.png",
      color: "#914391",
      link: "products/coolers",
      // minWidth: "80%",
    },
    {
      background: "/assets/images/hero-bg/bg-hero-orange.png",
      title: "Durable and Stylish ",
      highlight: "Bowls",
      description:
        "Perfect for everyday use, our plastic bowls offer a blend of durability and modern design.",
      imgSrc: "/assets/images/product-groups/bowlsGroup.png",
      color: "#C2690F",
      link: "products/bowls",
      // minWidth: "90%",
    },
    {
      background: "/assets/images/hero-bg/bg-hero-yellow.png",
      title: "High-Quality ",
      highlight: "Jerry Cans",
      description:
        "Safe and sturdy jerry cans for transporting liquids, available in various sizes to suit your needs.",
      imgSrc: "/assets/images/product-groups/jerryCansGroup.png",
      color: "#ffff00",

      link: "products/jerryCans",
      // minWidth: "70%",
    },
  ];
  const swiperRef = useState(null);
  return (
    <HeroWrapper
      onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay?.start()}
    >
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Pagination, Autoplay]}
        // virtualTranslate={false}
        // speed={0}
        loop={true}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay?.start()}
        // modules={[Navigation, Autoplay, EffectFade, Pagination]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        pagination={{
          clickable: true,
          // type: "progressbar",
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000000000,
          disableOnInteraction: false,
        }}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            virtualIndex={index}
            onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
            onMouseLeave={() => swiperRef.current?.autoplay?.start()}
          >
            <Slide bg={slide.background}>
              {index === activeIndex && <ActiveSlideContent slide={slide} />}
            </Slide>
          </SwiperSlide>
        ))}

        {/* Navigation buttons */}
        <NavButton ref={navigationPrevRef} className="swiper-button-prev" />
        <NavButton ref={navigationNextRef} className="swiper-button-next" />
      </Swiper>
    </HeroWrapper>
  );
};

export default HeroSection;

const HeroWrapper = styled.section`
  width: 100%;
  position: relative;
  height: 75vh;
  overflow: hidden;
  position: relative;
  padding: 0;
  margin: 0;

  .row > * {
    padding: 0;
  }

  .hero-swiper {
    height: 100%;
    width: 100%;
  }

  .swiper-pagination {
    bottom: 20px;
    // padding: 18px;

    &-bullet {
      width: 18px;
      height: 18px;
      background: rgba(255, 255, 255, 0.5);
      opacity: 1;

      &-active {
        background: #fff;
        transform: scale(1.2);
      }
    }
  }
  @media (min-width: 600px) and (orientation: portrait) {
    height: 75vh;
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    background-attachment: fixed;
  }

  // @media (max-width: 768px) {
  //   height: 75vh;
  // }

  // @media (max-width: 576px) {
  //   height: 75vh;
  // }
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.bg}) center/cover no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  // padding: 0 6%;

  @media (max-width: 576px) {
    padding: 0;
  }
`;

// const SlideImage = styled.img`
//   max-width: ${(props) => props.minWidth || "100%"};
//   height: auto;
//   // padding-left: 10%;

//   @media (max-width: 768px) {
//     max-width: 70%;
//     margin: 0 auto;
//   }

//   @media (max-width: 576px) {
//     max-width: 80%;
//     height: auto;
//     padding: 0;
//     margin-top: 20px;
//   }
// `;
const NavButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  // background: rgba(0, 0, 0, 0.1);
  color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  font-size: 24px;
  border-radius: 0.25rem;
  transition: background 0.3s;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  &.swiper-button-prev {
    left: 1rem;
  }

  &.swiper-button-next {
    right: 1rem;
  }

  // &:hover {
  //   background: rgba(0, 0, 0, 0.2);
  //   color: white;
  // }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
`;
