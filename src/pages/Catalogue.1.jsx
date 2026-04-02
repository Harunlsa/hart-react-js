import { useState, useRef, useEffect } from "react";
import { BsFullscreen } from "react-icons/bs";
import HTMLFlipBook from "react-pageflip";
import {
  ControlsContainer,
  PageNumbers,
  Controls,
  FullscreenToggle,
} from "./Catalogue";

export const Catalogue = () => {
  const [page, setPage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  // const [dimensions, setDimensions] = useState({ width: 595, height: 842 });
  const [currentPage, setCurrentPage] = useState(0);

  const bookRef = useRef(null);
  const totalPages = 34;
  // const aspect = 595 / 842;
  // Recalculate flipbook size on fullscreen toggle
  const getBookSize = () => {
    if (isFullscreen) {
      return { width: 595, height: 842 };
    }
    return { width: 595, height: 842 };
  };
  const [bookSize, setBookSize] = useState(getBookSize());

  // const fullscreenHeight = 842;
  // const fullscreenWidth = fullscreenHeight * aspect;
  // const pages = Array.from(
  //   { length: totalPages },
  //   (_, i) =>
  //     `${import.meta.env.BASE_URL}assets/images/catalogue/page${String(
  //       i + 1
  //     ).padStart(2, "0")}.svg`
  // );
  useEffect(() => {
    const handleResize = () => setBookSize(getBookSize());
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isFullscreen]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    setBookSize(getBookSize());
  };
  // useEffect(() => {
  //   function updateDimensions() {
  //     const factor = fullscreen ? 0.9 : 0.72;
  //     const newHeight = window.innerHeight * factor;
  //     const newWidth = newHeight * aspect;
  //     setDimensions({ width: newWidth, height: newHeight });
  //   }
  //   updateDimensions();
  //   window.addEventListener("resize", updateDimensions);
  //   return () => window.removeEventListener("resize", updateDimensions);
  // }, [fullscreen, aspect]);
  // // Resotre current page after remount
  // useEffect(() => {
  //   if (bookRef.current?.pageFlip) {
  //     const flip = bookRef.current.pageFlip();
  //     if (flip) {
  //       flip.turnToPage(page);
  //     }
  //   }
  // }, [dimensions, page]);
  const getPageSrc = (i) =>
    `${import.meta.env.BASE_URL}assets/images/catalogue/page${String(
      i + 1,
    ).padStart(2, "0")}.svg`;

  // useEffect(() => {
  //   function updateDimensions() {
  //     const aspect = 595 / 842;
  //     if (fullscreen) {
  //       const fullscreenHeight = window.innerHeight * 0.9; // 90% of viewport
  //       const fullscreenWidth = fullscreenHeight * aspect;
  //       setDimensions({ width: fullscreenWidth, height: fullscreenHeight });
  //     } else {
  //       const normalHeight = window.innerHeight * 0.72; // e.g. 60% of viewport
  //       const normalWidth = normalHeight * aspect;
  //       setDimensions({ width: normalWidth, height: normalHeight });
  //     }
  //   }
  //   updateDimensions();
  //   window.addEventListener("resize", updateDimensions);
  //   return () => window.removeEventListener("resize", updateDimensions);
  // }, [fullscreen]);
  return (
    <>
      <div
        className={`catalogue-container ${
          isFullscreen ? "catalogue-fullscreen" : ""
        }`}
      >
        {/* 595 * 842 */}
        <div className="flipbook-wrapper">
          <HTMLFlipBook
            // key={`${dimensions.width}x${dimensions.height}`}
            ref={bookRef}
            width={bookSize.width}
            height={bookSize.height}
            size="stretch"
            autoSize={true}
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1200}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            drawShadow={true}
            onFlip={(e) => setCurrentPage(e.data)}
            className="mx-auto shadow-lg"
            style={{ padding: "10px 0", height: "100%" }}
          >
            {Array.from({ length: totalPages }, (_, i) => (
              <div className="demoPage" key={i}>
                {/* remove the "loading..." gating so images always persist */}
                <img
                  src={getPageSrc(i)}
                  alt={`Page ${i + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </HTMLFlipBook>
          {/* {Array.from({ length: totalPages }, (_, i) => (
                <div className="demoPage" key={i}>
                  {Math.abs(page - i) <= 6 ? (
                    <img
                      src={getPageSrc(i)}
                      alt={`Page ${i + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    <div style={{ textAlign: "center", paddingTop: "50%" }}>
                      Loading...
                    </div>
                  )}
                </div>
              ))}
            </HTMLFlipBook> */}
        </div>

        {/* <ControlsContainer>
                <PageNumbers>
                  {page + 1} / {totalPages}
                </PageNumbers>
                <Controls>
                  <FullscreenToggle
                    variant="outline-secondary"
                    onClick={() => setFullscreen((prev) => !prev)}
                  >
                    <BsFullscreen strokeWidth={0.6} size={14} color="white" />
                  </FullscreenToggle>
                </Controls>
              </ControlsContainer> */}
        <ControlsContainer
          className={`${isFullscreen ? "controls-fullscreen" : ""}`}
        >
          <PageNumbers>
            {page + 1} / {totalPages}
          </PageNumbers>
          <Controls>
            <FullscreenToggle
              variant="outline-secondary"
              onClick={toggleFullscreen}
            >
              <BsFullscreen
                strokeWidth={0.6}
                size={14}
                color="white"
                overflow={"visible"}
              />
            </FullscreenToggle>
          </Controls>
        </ControlsContainer>
      </div>
    </>
  );
};
export default Catalogue;
