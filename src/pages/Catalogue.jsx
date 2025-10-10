// import { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { BsFullscreen } from "react-icons/bs";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { useRef, useState } from "react";
import LazyImage from "../components/LazyImage";

const Catalogue = () => {
  const [page, setPage] = useState(0);
  const flipBookRef = useRef(null);
  const [fullscreen, setFullscreen] = useState(false);
  // const [dimensions, setDimensions] = useState({ width: 595, height: 842 });

  const totalPages = 34;
  // const aspect = 595 / 842;
  const width = 595;
  const height = 842;

  const scalingFactor = 0.85;

  const normalWidth = width * scalingFactor;
  const normalHeight = height * scalingFactor;

  const isSmallScreen = window.innerWidth < 768;
  // const aspect = width / height;

  // const getPageSrc = (i) =>
  //   `${import.meta.env.BASE_URL}assets/images/catalogue/page${String(
  //     i + 1
  //   ).padStart(2, "0")}.svg`;
  const getPageSrc = (i) =>
    `/assets/images/catalogue/page${String(i + 1).padStart(2, "0")}.svg`;

  return (
    <div
      className={`catalogue-container ${
        fullscreen ? "catalogue-fullscreen" : ""
      }`}
    >
      <div className="flipbook-wrapper">
        <HTMLFlipBook
          // key={`${dimensions.width}x${dimensions.height}`}
          ref={flipBookRef}
          width={normalWidth}
          height={normalHeight}
          size={isSmallScreen ? "stretch" : "fixed"}
          autoSize={true}
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1200}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          drawShadow={true}
          onFlip={(e) => setPage(e.data)}
          className="mx-auto shadow-lg"
          style={{ padding: "10px 0" }}
        >
          {Array.from({ length: totalPages }, (_, i) => (
            <div className="demoPage" key={i}>
              {/* <img
                src={getPageSrc(i)}
                alt={`Page ${i + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              /> */}
              <LazyImage
                src={getPageSrc(i)}
                alt={`Page ${i + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  // maxHeight: "600px",
                  maxHeight: `${normalHeight}px`,
                }}
              />
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      <ControlsContainer
        className={`${fullscreen ? "controls-fullscreen" : ""}`}
      >
        <PageNumbers>
          {page + 1} / {totalPages}
        </PageNumbers>
        <Controls>
          <NavButtonsContainer>
            <NavButton
              onClick={() => flipBookRef.current.pageFlip().flipPrev()}
              className="bg-transparent text-white  px-3 py-1 rounded shadow hover:bg-gray-200"
            >
              ◀ Prev
            </NavButton>
            <NavButton
              onClick={() => flipBookRef.current.pageFlip().flipNext()}
              // className="bg-transparent text-white m-4 px-3 py-1 rounded shadow "
            >
              Next ▶
            </NavButton>
          </NavButtonsContainer>
          {!isSmallScreen && (
            <FullscreenToggle
              variant="outline-secondary"
              onClick={() => setFullscreen((prev) => !prev)}
            >
              <BsFullscreen strokeWidth={0.6} size={14} color="white" />
            </FullscreenToggle>
          )}
        </Controls>
      </ControlsContainer>
    </div>
  );
};

export default Catalogue;

const ControlsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px 80px;
  justify-content: space-between;
  margin-bottom: 40px;
  background: #393939;

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media (max-width: 600px) {
    padding: 12px 40px;
  }

  // height: 44px;
  // opacity: 1;
  // :hover {
  //   opacity: 0;
  // }
`;

const PageNumbers = styled.div`
  color: #ffffff;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const FullscreenToggle = styled(Button)`
  color: "red";
`;

const NavButtonsContainer = styled.div`
  margin: 0 32px;
`;
const NavButton = styled.button`
  background-color: transparent;
  font-weight: bold;
  color: white;
  padding: 4px 10px;
  border-radius: 6px;
  margin: 2px;
  :hover {
    background-color: #000000;
  }
`;
// bg-transparent text-white m-4 px-3 py-1 rounded shadow hover:bg-gray-200
