// import HTMLFlipBook from "react-pageflip";

// import React from "react";

// function Catalogue() {
//   return (
//     <HTMLFlipBook width={600} height={800}>
//       <div className="demoPage">
//         <img
//           src={`${import.meta.env.BASE_URL}assets/images/catalogue/page01.svg`}
//         />
//       </div>

//     </HTMLFlipBook>
//   );
// }

// export default Catalogue;

import { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import styled from "styled-components";
import { BiFullscreen } from "react-icons/bi";
import { BsFullscreen } from "react-icons/bs";

import { Button } from "react-bootstrap";

const toggleFullScreen = () => {
  const elem = document.querySelector(".catalogue-container");
  if (!document.fullscreenElement) {
    elem.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};

const Catalogue = () => {
  const [page, setPage] = useState(0);
  // Automatically generate an array of page image paths
  const totalPages = 34;
  // const pages = Array.from(
  //   { length: totalPages },
  //   (_, i) =>
  //     `${import.meta.env.BASE_URL}assets/images/catalogue/page${String(
  //       i + 1
  //     ).padStart(2, "0")}.svg`
  // );
  const getPageSrc = (i) =>
    `${import.meta.env.BASE_URL}assets/images/catalogue/page${String(
      i + 1
    ).padStart(2, "0")}.svg`;

  return (
    <div className="catalogue-container">
      <HTMLFlipBook
        width={595}
        height={842}
        autoSize="true"
        // size="stretch" // makes it responsive
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1200}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        onFlip={(e) => setPage(e.data)}
        className="mx-auto shadow-lg"
        style={{ margin: "10px 0" }}
      >
        {Array.from({ length: totalPages }, (_, i) => (
          <div className="demoPage" key={i} style={{}}>
            {/* Lazy load only nearby pages */}
            {Math.abs(page - i) <= 6 ? (
              <img
                src={getPageSrc(i)}
                alt={`Page ${i + 1}`}
                // loading="lazy"
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                  maxHeight: "100%",
                }}
              />
            ) : (
              <div style={{ textAlign: "center", paddingTop: "50%" }}>
                Loading...
              </div>
            )}
          </div>
        ))}
      </HTMLFlipBook>
      {/* <button
        onClick={toggleFullScreen}
        style={{ position: "relative", top: 10, right: 10, zIndex: 10 }}
      >
        Fullscreen
      </button> */}
      <ControlsContainer>
        <PageNumbers>
          {page + 1} / {totalPages}
        </PageNumbers>
        <Controls>
          <FullscreenToggle
            variant="outline-secondary"
            onClick={toggleFullScreen}
          >
            <BsFullscreen
              strokeWidth={0.6}
              size={14}
              color="white"
              overflow={"visible"}
              // style={{ color: "#ffffff", backgroundColor: "red" }}
            />
          </FullscreenToggle>
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
  // padding-right: 200px;
  margin-bottom: 40px;
  background: #393939ff;
  // height: 20px;
`;

const PageNumbers = styled.div`
  // background: #393939ff;
  color: #ffffff;
`;

const Controls = styled.div`
  // width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  // height: 20px;
`;

const FullscreenToggle = styled(Button)`
  color: "red";
`;
// const PageCover = React.forwardRef((props, ref) => {
//   return (
//     <div className="page page-cover" ref={ref} data-density="hard">
//       <div className="page-content">
//         <h2>{props.children}</h2>
//       </div>
//     </div>
//   );
// });

// const Page = React.forwardRef((props, ref) => {
//   return (
//     <div className="page" ref={ref}>
//       <div className="page-content">
//         <h2 className="page-header">Page header - {props.number}</h2>
//         <div className="page-image"></div>
//         <div className="page-text">{props.children}</div>
//         <div className="page-footer">{props.number + 1}</div>
//       </div>
//     </div>
//   );
// });

// class DemoBook extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       page: 0,
//       totalPage: 0,
//     };
//   }

//   nextButtonClick = () => {
//     this.flipBook.getPageFlip().flipNext();
//   };

//   prevButtonClick = () => {
//     this.flipBook.getPageFlip().flipPrev();
//   };

//   onPage = (e) => {
//     this.setState({
//       page: e.data,
//     });
//   };

//   componentDidMount() {
//     this.setState({
//       totalPage: this.flipBook.getPageFlip().getPageCount(),
//     });
//   }

//   render() {
//     return (
//       <div>
//         <HTMLFlipBook
//           width={550}
//           height={733}
//           size="stretch"
//           minWidth={315}
//           maxWidth={1000}
//           minHeight={400}
//           maxHeight={1533}
//           maxShadowOpacity={0.5}
//           showCover={true}
//           mobileScrollSupport={true}
//           onFlip={this.onPage}
//           onChangeOrientation={this.onChangeOrientation}
//           onChangeState={this.onChangeState}
//           className="demo-book"
//           ref={(el) => (this.flipBook = el)}
//         >
//           <PageCover>BOOK TITLE</PageCover>
//           <Page number={1}>Lorem ipsum...</Page>
//           <Page number={2}>Lorem ipsum...</Page>
//           /*...*/
//           <PageCover>THE END</PageCover>
//         </HTMLFlipBook>

//         <div className="container">
//           <div>
//             <button type="button" onClick={this.prevButtonClick}>
//               Previous page
//             </button>
//             [<span>{this.state.page}</span> of
//             <span>{this.state.totalPage}</span>]
//             <button type="button" onClick={this.nextButtonClick}>
//               Next page
//             </button>
//           </div>
//           <div>
//             State: <i>{this.state.state}</i>, orientation:{" "}
//             <i>{this.state.orientation}</i>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default DemoBook;
