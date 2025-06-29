// import { useState } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// // import racksGroup from "../../assets/images/hero-bg/bg-hero-blue.png";
// // import racksHeroBg from "../../assets/images/hero-bg/bg-hero-blue.png";
// // import racksGroup from "../../assets/images/product-group/racks-group.png";

// const HeroSection = () => {
//   const slides = [
//     {
//       background: "/assets/images/hero-bg/bg-hero-green.png",
//       title: "Organise with Versatile ",
//       highlight: "Racks",
//       description:
//         "Durable and flexible plastic racks perfect for efficient storage and organization in any setting.",
//       imgSrc: "/assets/images/product-groups/racksGroup.png",
//       color: "#bcff33",
//       link: "products/racks",
//       // minWidth: "100%",
//     },
//     {
//       background: "/assets/images/hero-bg/bg-hero-blue.png",
//       title: "Efficient and Reliable ",
//       highlight: "Coolers",
//       description:
//         "Keep your items fresh and cool with our high-performance plastic coolers, ideal for all occasions.",
//       imgSrc: "/assets/images/product-groups/coolers6.png",
//       color: "#914391",
//       link: "products/coolers",
//       minWidth: "80%",
//     },
//     {
//       background: "/assets/images/hero-bg/bg-hero-orange.png",
//       title: "Durable and Stylish ",
//       highlight: "Bowls",
//       description:
//         "Perfect for everyday use, our plastic bowls offer a blend of durability and modern design.",
//       imgSrc: "/assets/images/product-groups/bowlsGroupHero.png",
//       color: "#C2690F",
//       link: "products/bowls",
//       // minWidth: "100%",
//     },
//     {
//       background: "/assets/images/hero-bg/bg-hero-yellow.png",
//       title: "High-Quality ",
//       highlight: "Jerry Cans",
//       description:
//         "Safe and sturdy jerry cans for transporting liquids, available in various sizes to suit your needs.",
//       imgSrc: "/assets/images/product-groups/jcGroup.png",
//       color: "#ffff00",
//       link: "products/jerryCans",
//       minWidth: "80%",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <HeroWrapper>
//       <div className="hero-slider">
//         {slides.map((slide, index) => (
//           <Slide
//             key={index}
//             active={index === currentSlide}
//             bg={slide.background}
//           >
//             <Container fluid>
//               <Row className="align-items-center">
//                 <Col md={7}>
//                   <SlideContent>
//                     <h1>
//                       {slide.title}
//                       <span style={{ color: slide.color }}>
//                         {slide.highlight}
//                       </span>
//                     </h1>
//                     <p>{slide.description}</p>
//                     <Button as={Link} to={slide.link}>
//                       View More
//                     </Button>
//                   </SlideContent>
//                 </Col>
//                 <Col md={5} className="text-center slideImage">
//                   <SlideImage
//                     src={slide.imgSrc}
//                     alt={slide.highlight}
//                     minWidth={slide.minWidth}
//                   />
//                 </Col>
//               </Row>
//             </Container>
//           </Slide>
//         ))}
//         <ControlButton onClick={prevSlide} left>
//           &#x2190;
//         </ControlButton>
//         <ControlButton onClick={nextSlide}>&#x2192;</ControlButton>
//       </div>
//     </HeroWrapper>
//   );
// };

// export default HeroSection;

// const HeroWrapper = styled.section`
//   width: 100vw;
//   height: 75vh;
//   overflow: hidden;
//   position: relative;
//   transition: transform 0.8s cubic-bezier(0.22, 1.61, 0.36, 1);
//   padding: 0;
//   margin: 0;
//   @media (min-width: 1024px) {
//     background-attachment: fixed;
//   }
//   @media (max-width: 768px) {
//     height: 100vh;
//     // margin-top: -10px;
//   }
//   @media (max-width: 576px) {
//     // height: auto;
//     // margin-top: -100px;
//   }
// `;

// const Slide = styled(Container)`
//   min-width: 100vw;
//   height: 75vh;
//   background: url(${(props) => props.bg}) center/cover no-repeat;
//   background-size: cover;
//   background-position: center;
//   display: ${(props) => (props.active ? "flex" : "none")};
//   align-items: center;
//   justify-content: space-between;
//   color: #fff;
//   font-size: 3rem;
//   transition: transform 0.8s ease-in-out;
//   padding: 0 6%;
//   @media (max-width: 576px) {
//     padding: 0;
//   }
// `;

// const SlideContent = styled.div`
//   max-width: calc(100vw * 0.5);
//   padding: 0 12px;

//   h1 {
//     font-size: 56px;
//     letter-spacing: 2px;
//     font-weight: 700;
//     line-height: 56px;
//     font-family: "Syne", sans-serif;
//     margin-bottom: 20px;
//   }

//   p {
//     font-size: 1.6rem;
//     margin-bottom: 30px;
//   }

//   a {
//     padding: 10px 20px;
//     font-size: 14px;
//     background-color: #f04f47;
//     border: none;
//     transition: background-color 0.5s;
//     font-family: "Roboto", sans-serif;
//     text-transform: uppercase;
//     font-weight: 500;
//     letter-spacing: 1px;
//     border-radius: 4px;
//     @media (max-width: 768px) {
//       margin-bottom: 15px;
//     }
//   }

//   a:hover {
//     background-color: #c03d38;
//     font-size: scale(2);
//   }
//   @media (max-width: 768px) {
//     // height: 100vh;
//     padding-top: 15px;
//   }
//   @media (max-width: 576px) {
//     padding: 0;
//     margin-top: -32px;
//     text-align: center;
//     max-width: 100%;
//     h1 {
//       font-size: 40px;
//       letter-spacing: 1px;
//       line-height: 44px;
//       margin-bottom: 20px;
//     }

//     p {
//       font-size: 1.2rem;
//       margin-bottom: 30px;
//     }
//   .slideImage {
//     @media (max-width: 768px) {
//       max-width: 70%;
//       margin: 0 auto;
//       height: auto;
//   }}
//   .slideImage {
//     @media (max-width: 576px) {
//       max-width: 100%;
//       margin: 0;
//       height: auto;
//   }}
// `;

// const SlideImage = styled.img`
//   max-width: ${(props) => props.minWidth || "100%"};
//   height: auto;
//   padding-left: 10%;
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

// const ControlButton = styled.button`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   ${(props) => (props.left ? "left: 1rem;" : "right: 1rem;")}
//   background: rgba(0, 0, 0, 0.1);
//   color: rgba(255, 255, 255, 0.5);
//   border: none;
//   width: 50px;
//   height: 50px;
//   cursor: pointer;
//   font-size: 24px;
//   border-radius: 0.25rem;
//   transition: background 0.3s;

//   &:hover {
//     background: rgba(0, 0, 0, 0.2);
//     color: white;
//   }
// `;

import { useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroSection = () => {
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
      minWidth: "100%",
    },
    {
      background: "/assets/images/hero-bg/bg-hero-blue.png",
      title: "Efficient and Reliable ",
      highlight: "Coolers",
      description:
        "Keep your items fresh and cool with our high-performance plastic coolers, ideal for all occasions.",
      imgSrc: "/assets/images/product-groups/coolers6.png",
      color: "#914391",
      link: "products/coolers",
      minWidth: "80%",
    },
    {
      background: "/assets/images/hero-bg/bg-hero-orange.png",
      title: "Durable and Stylish ",
      highlight: "Bowls",
      description:
        "Perfect for everyday use, our plastic bowls offer a blend of durability and modern design.",
      imgSrc: "/assets/images/product-groups/bowlsGroupHero.png",
      color: "#C2690F",
      link: "products/bowls",
      minWidth: "90%",
    },
    {
      background: "/assets/images/hero-bg/bg-hero-yellow.png",
      title: "High-Quality ",
      highlight: "Jerry Cans",
      description:
        "Safe and sturdy jerry cans for transporting liquids, available in various sizes to suit your needs.",
      imgSrc: "/assets/images/product-groups/jcGroup.png",
      color: "#ffff00",
      link: "products/jerryCans",
      minWidth: "70%",
    },
  ];

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <HeroWrapper>
      <Swiper
        modules={[Navigation, Autoplay, EffectFade, Pagination]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        pagination={{
          clickable: true,
          // type: "progressbar",
          dynamicBullets: true,
        }}
        // scrollbar={{ draggable: true }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onInit={(swiper) => {
          // Set refs after initialization
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Slide bg={slide.background}>
              <Container fluid>
                <Row className="align-items-center">
                  <Col md={7}>
                    <SlideContent>
                      <h1>
                        {slide.title}
                        <span style={{ color: slide.color }}>
                          {slide.highlight}
                        </span>
                      </h1>
                      <p>{slide.description}</p>
                      <Button as={Link} to={slide.link}>
                        View More
                      </Button>
                    </SlideContent>
                  </Col>
                  <Col md={5} className="text-center slideImage">
                    <SlideImage
                      src={slide.imgSrc}
                      alt={slide.highlight}
                      minWidth={slide.minWidth}
                    />
                  </Col>
                </Row>
              </Container>
            </Slide>
          </SwiperSlide>
        ))}

        {/* Navigation buttons */}
        <NavButton ref={navigationPrevRef} className="swiper-button-prev">
          {/* &#x2190; */}
        </NavButton>
        <NavButton ref={navigationNextRef} className="swiper-button-next">
          {/* &#x2192; */}
        </NavButton>
      </Swiper>
    </HeroWrapper>
  );
};

export default HeroSection;

// Updated styled components
const HeroWrapper = styled.section`
  width: 100vw;
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

    &-bullet {
      width: 12px;
      height: 12px;
      background: rgba(255, 255, 255, 0.5);
      opacity: 1;

      &-active {
        background: #fff;
        transform: scale(1.2);
      }
    }
  }

  @media (min-width: 1024px) {
    background-attachment: fixed;
  }

  @media (max-width: 768px) {
    height: 100vh;
  }

  @media (max-width: 576px) {
    height: 80vh;
  }
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

const SlideContent = styled.div`
  max-width: calc(100vw * 0.5);
  padding-left: 12%;
  color: #fff;

  h1 {
    font-size: 52px;
    letter-spacing: 2px;
    font-weight: 700;
    line-height: 56px;
    font-family: "Syne", sans-serif;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }

  a {
    padding: 10px 20px;
    font-size: 14px;
    background-color: #f04f47;
    border: none;
    transition: background-color 0.5s;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 4px;
    @media (max-width: 768px) {
      margin-bottom: 15px;
    }
  }

  a:hover {
    background-color: #c03d38;
    font-size: scale(2);
  }
  @media (max-width: 768px) {
    // height: 100vh;
    padding-top: 15px;
  }
  @media (max-width: 576px) {
    padding: 0;
    margin-top: -32px;
    text-align: center;
    max-width: 100%;
    h1 {
      font-size: 40px;
      letter-spacing: 1px;
      line-height: 44px;
      margin-bottom: 20px;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 30px;
    }
  .slideImage {
    @media (max-width: 768px) {
      max-width: 70%;
      margin: 0 auto;
      height: auto;
  }}
  .slideImage {
    @media (max-width: 576px) {
      max-width: 100%;
      margin: 0;
      height: auto;
  }}
`;

const SlideImage = styled.img`
  max-width: ${(props) => props.minWidth || "100%"};
  height: auto;
  // padding-left: 10%;
  @media (max-width: 768px) {
    max-width: 70%;
    margin: 0 auto;
  }
  @media (max-width: 576px) {
    max-width: 80%;
    height: auto;
    padding: 0;
    margin-top: 20px;
  }
`;
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

// import { useState, useEffect } from "react";
// import { useTransition, animated } from "@react-spring/web";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// const HeroSection = () => {
//   const slides = [
//     {
//       background: "/assets/images/hero-bg/bg-hero-green.png",
//       title: "Organise with Versatile ",
//       highlight: "Racks",
//       description:
//         "Durable and flexible plastic racks perfect for efficient storage and organization in any setting.",
//       imgSrc: "/assets/images/product-groups/racksGroup.png",
//       color: "#bcff33",
//       link: "products/racks",
//       minWidth: "100%",
//     },
//     {
//       background: "/assets/images/hero-bg/bg-hero-blue.png",
//       title: "Efficient and Reliable ",
//       highlight: "Coolers",
//       description:
//         "Keep your items fresh and cool with our high-performance plastic coolers, ideal for all occasions.",
//       imgSrc: "/assets/images/product-groups/coolers6.png",
//       color: "#914391",
//       link: "products/coolers",
//       minWidth: "80%",
//     },
//     {
//       background: "/assets/images/hero-bg/bg-hero-orange.png",
//       title: "Durable and Stylish ",
//       highlight: "Bowls",
//       description:
//         "Perfect for everyday use, our plastic bowls offer a blend of durability and modern design.",
//       imgSrc: "/assets/images/product-groups/bowlsGroupHero.png",
//       color: "#C2690F",
//       link: "products/bowls",
//       minWidth: "90%",
//     },
//     {
//       background: "/assets/images/hero-bg/bg-hero-yellow.png",
//       title: "High-Quality ",
//       highlight: "Jerry Cans",
//       description:
//         "Safe and sturdy jerry cans for transporting liquids, available in various sizes to suit your needs.",
//       imgSrc: "/assets/images/product-groups/jcGroup.png",
//       color: "#ffff00",
//       link: "products/jerryCans",
//       minWidth: "70%",
//     },
//   ];

//   const [index, setIndex] = useState(0);
//   const [direction, setDirection] = useState(0); // 0: right, 1: left

//   // Auto-rotation effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDirection(0);
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const nextSlide = () => {
//     setDirection(0);
//     setIndex((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setDirection(1);
//     setIndex((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   // Spring transitions
//   const transitions = useTransition(index, {
//     keys: index,
//     from: {
//       opacity: 0,
//       transform: `translate3d(${direction === 0 ? "100%" : "-100%"},0,0)`,
//       config: { tension: 300, friction: 30 },
//     },
//     enter: {
//       opacity: 1,
//       transform: "translate3d(0%,0,0)",
//       config: { tension: 300, friction: 30 },
//     },
//     leave: {
//       opacity: 0,
//       transform: `translate3d(${direction === 0 ? "-50%" : "50%"},0,0)`,
//       config: { tension: 300, friction: 30 },
//     },
//     config: { tension: 300, friction: 30 },
//     exitBeforeEnter: true,
//   });

//   return (
//     <HeroWrapper>
//       <div className="hero-slider">
//         {transitions((style, i) => (
//           <SlideContainer>
//             <AnimatedSlide style={style} bg={slides[i].background}>
//               <Container fluid>
//                 <Row className="align-items-center">
//                   <Col md={7}>
//                     <SlideContent>
//                       <h1>
//                         {slides[i].title}
//                         <span style={{ color: slides[i].color }}>
//                           {slides[i].highlight}
//                         </span>
//                       </h1>
//                       <p>{slides[i].description}</p>
//                       <Button as={Link} to={slides[i].link}>
//                         View More
//                       </Button>
//                     </SlideContent>
//                   </Col>
//                   <Col md={5} className="text-center slideImage">
//                     <SlideImage
//                       src={slides[i].imgSrc}
//                       alt={slides[i].highlight}
//                       minWidth={slides[i].minWidth}
//                     />
//                   </Col>
//                 </Row>
//               </Container>
//             </AnimatedSlide>
//           </SlideContainer>
//         ))}

//         <ControlButton onClick={prevSlide} left>
//           &#x2190;
//         </ControlButton>
//         <ControlButton onClick={nextSlide}>&#x2192;</ControlButton>
//       </div>
//     </HeroWrapper>
//   );
// };

// export default HeroSection;

// // New styled components
// const SlideContainer = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 0;
// `;

// const AnimatedSlide = styled(animated.div)`
//   width: 100%;
//   height: 100%;
//   background: url(${(props) => props.bg}) center/cover no-repeat;
//   background-size: cover;
//   background-position: center;
//   position: absolute;
//   top: 0;
//   left: 0;
// `;

// // Updated styled components
// const HeroWrapper = styled.section`
//   width: 100vw;
//   height: 75vh;
//   overflow: hidden;
//   position: relative;
//   padding: 0;
//   margin: 0;

//   .row > * {
//     padding: 0;
//   }

//   .hero-swiper {
//     height: 100%;
//     width: 100%;
//   }

//   .swiper-pagination {
//     bottom: 20px;

//     &-bullet {
//       width: 12px;
//       height: 12px;
//       background: rgba(255, 255, 255, 0.5);
//       opacity: 1;

//       &-active {
//         background: #fff;
//         transform: scale(1.2);
//       }
//     }
//   }

//   @media (min-width: 1024px) {
//     background-attachment: fixed;
//   }

//   @media (max-width: 768px) {
//     height: 100vh;
//   }

//   @media (max-width: 576px) {
//     height: 80vh;
//   }
// `;

// const Slide = styled.div`
//   width: 100%;
//   height: 100%;
//   background: url(${(props) => props.bg}) center/cover no-repeat;
//   background-size: cover;
//   background-position: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   // padding: 0 6%;

//   @media (max-width: 576px) {
//     padding: 0;
//   }
// `;

// const SlideContent = styled.div`
//   max-width: calc(100vw * 0.5);
//   padding-left: 12%;
//   color: #fff;

//   h1 {
//     font-size: 52px;
//     letter-spacing: 2px;
//     font-weight: 700;
//     line-height: 56px;
//     font-family: "Syne", sans-serif;
//     margin-bottom: 20px;
//   }

//   p {
//     font-size: 1.5rem;
//     margin-bottom: 30px;
//   }

//   a {
//     padding: 10px 20px;
//     font-size: 14px;
//     background-color: #f04f47;
//     border: none;
//     transition: background-color 0.5s;
//     font-family: "Roboto", sans-serif;
//     text-transform: uppercase;
//     font-weight: 500;
//     letter-spacing: 1px;
//     border-radius: 4px;
//     @media (max-width: 768px) {
//       margin-bottom: 15px;
//     }
//   }

//   a:hover {
//     background-color: #c03d38;
//     font-size: scale(2);
//   }
//   @media (max-width: 768px) {
//     // height: 100vh;
//     padding-top: 15px;
//   }
//   @media (max-width: 576px) {
//     padding: 0;
//     margin-top: -32px;
//     text-align: center;
//     max-width: 100%;
//     h1 {
//       font-size: 40px;
//       letter-spacing: 1px;
//       line-height: 44px;
//       margin-bottom: 20px;
//     }

//     p {
//       font-size: 1.2rem;
//       margin-bottom: 30px;
//     }
//   .slideImage {
//     @media (max-width: 768px) {
//       max-width: 70%;
//       margin: 0 auto;
//       height: auto;
//   }}
//   .slideImage {
//     @media (max-width: 576px) {
//       max-width: 100%;
//       margin: 0;
//       height: auto;
//   }}
// `;

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
// const NavButton = styled.div`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   width: 50px;
//   height: 50px;
//   // background: rgba(0, 0, 0, 0.1);
//   color: rgba(255, 255, 255, 0.5);
//   border: none;
//   cursor: pointer;
//   font-size: 24px;
//   border-radius: 0.25rem;
//   transition: background 0.3s;
//   z-index: 10;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   &.swiper-button-prev {
//     left: 1rem;
//   }

//   &.swiper-button-next {
//     right: 1rem;
//   }

//   // &:hover {
//   //   background: rgba(0, 0, 0, 0.2);
//   //   color: white;
//   // }

//   @media (max-width: 768px) {
//     width: 40px;
//     height: 40px;
//     font-size: 20px;
//   }
// `;
// const ControlButton = styled.button`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   ${(props) => (props.left ? "left: 1rem;" : "right: 1rem;")}
//   background: rgba(0, 0, 0, 0.1);
//   color: rgba(255, 255, 255, 0.5);
//   border: none;
//   width: 50px;
//   height: 50px;
//   cursor: pointer;
//   font-size: 24px;
//   border-radius: 0.25rem;
//   transition: background 0.3s;

//   &:hover {
//     background: rgba(0, 0, 0, 0.2);
//     color: white;
//   }
// `;
