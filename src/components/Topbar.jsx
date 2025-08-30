import styled from "styled-components";

const TopBar = styled.section`
  // width: 100%;
  // overflow-x: hidden; // scoped only here
  // position: relative;
  background: #106eea;
  height: 40px;
  font-size: 14px;
  transition: all 0.5s;
  color: #fff;
  padding: 0;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 10;

  @media (max-width: 375px) {
    font-size: 3.6vw;
  }
  .contact-info {
    display: flex;
    align-items: center;

    i {
      font-style: normal;
      color: #fff;
      display: flex;
      align-items: center;
      a span {
        margin-left: -3px;
      }
      a {
        padding-left: 5px;
        color: #fff;
        line-height: 0;
        transition: 0.3s;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const Topbar = () => {
  return (
    <TopBar>
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center">
            <a href="mailto:contact@example.com">sales@hartindustries.com</a>
          </i>
          <i className="bi bi-phone d-flex align-items-center ms-4">
            <a href="tel:+2347025596606">
              <span>+234 702 559 6606</span>
            </a>
          </i>
        </div>
      </div>
    </TopBar>
  );
};

export default Topbar;
