import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/hart_logo.png";
// import "../assets/hart-logo.png" as Logo;

const HeaderWrapper = styled(Navbar)`
  // width: 100%;
  // overflow-x: hidden; // scoped only here
  // position: relative;
  background: #fff;
  transition: all 0.5s;
  z-index: 997;
  min-height: 86px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);

  button {
    color: transparent;
  }

  &.fixed-top {
    height: 70px;
  }
  button {
    border: transparent;
  }

  @media (max-width: 380px) {
    // width: 10px;
    min-height: 68px;
    button {
    }
    span {
      padding: 0;
      width: 12px;
    }
  }
`;

const LogoContainer = styled(Navbar.Brand)`
  display: flex;
  align-items: center;

  img {
    max-height: 60px;
    margin-right: 1rem;
  }

  h1 {
    font-size: 1.875rem;
    // font-size: 20vh;
    margin: 0;
    padding: 0;
    line-height: 1;
    font-weight: 600;
    letter-spacing: 0.8px;
    font-family: "Poppins", sans-serif;
    color: #222222;
  }
  @media (max-width: 514px) {
    h1 {
      font-size: 1.5rem;
    }
    img {
      max-height: 50px;
    }
  }
  @media (max-width: 438px) {
    h1 {
      font-size: 5.5vw;
    }
    img {
      max-height: 10vw;
      margin-right: 6px;
    }
  }
`;

const NavSection = styled(Nav)`
  text-align: center;
  border-color: transparent;
  .dropdown-menu.show {
    background-color: #fcfdff;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  }
  a {
    font-size: 15px;
    font-weight: 600;
    color: #222222;
    transition: 0.3s;
    position: relative;
    margin-left: 26px;

    &:before {
      content: "";
      position: absolute;
      height: 2px;
      bottom: 0px;
      left: 0;
      background-color: #106eea;
      visibility: hidden;
      transition: all 0.3s ease-in-out 0s;
    }

    &:hover:before,
    &.active:before {
      visibility: visible;
      width: 100%;
    }

    &:hover,
    &.active {
      color: #106eea;
      background-color: transparent;
    }
  }
  .dropdown-item {
    margin: 0;
    padding-left: 28px;
    padding-right: 28px;
    border-bottom: 2px solid #f1f1f1;
    text-align: center;
  }
  @media (max-width: 991px) {
    ul {
      display: none;
    }

    &.navbar-mobile {
      position: fixed;
      overflow: hidden;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: rgba(9, 9, 9, 0.9);
      transition: 0.3s;
      z-index: 999;

      ul {
        display: block;
        position: absolute;
        top: 55px;
        right: 15px;
        bottom: 15px;
        left: 15px;
        padding: 10px 0;
        background-color: #fff;
        overflow-y: auto;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper sticky="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <LogoContainer as={NavLink} to="/">
          <img
            alt="Hart Industries Logo"
            src={logo}
            className="d-inline-block align-top"
          />
          <h1>Hart Industries Limited</h1>
        </LogoContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ flexGrow: 0 }}>
          <NavSection className="me-auto" activeKey="/home">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About Us
            </Nav.Link>

            <NavDropdown title="Products" id="products">
              {/* <div className="dropdown-menu-container">
                <Container fluid>
                  <Row>
                    <Col>
                      <h6 className="dropdown-header">Blow</h6>
                    </Col>
                  </Row>
                </Container>
              </div> */}
              <NavDropdown.Item as={NavLink} to="/products/babySets">
                Baby Sets
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/products/basins">
                Basins
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/products/baskets">
                Baskets
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/products/bowls">
                Bowls
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/products/buckets">
                Buckets
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/products/colandersAndPlates">
                Colanders & Plates
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/products/coolers">
                Coolers
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/products/drums">
                Drums
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/products/iceCreamContainers">
                Ice Cream Containers
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/products/jerryCans">
                Jerry Cans
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/products/mugsAndCups">
                Mugs & Cups
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/products/racks">
                Racks
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/products/takeAwayContainers">
                Take Away Containers
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/products/toys">
                Toys
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </NavSection>
        </Navbar.Collapse>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
