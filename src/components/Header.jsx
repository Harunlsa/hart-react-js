import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "/src/assets/hartLogo.png";

const HeaderWrapper = styled(Navbar)`
  background: #fff;
  transition: all 0.5s;
  z-index: 997;
  min-height: 86px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  padding: 0;
  // button {
  //   color: transparent;
  // border: transparent;
  // }

  &.fixed-top {
    height: 70px;
  }

  @media (max-width: 380px) {
    min-height: 68px;
    button {
    }
    span {
      padding: 0;
      width: 12px;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media (min-width: 768px) {
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media (max-width: 992px) {
    padding: 10px 0;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media (min-width: 1200px) {
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
    margin: 0;
    padding: 0;
    line-height: 1;
    font-weight: 600;
    letter-spacing: 0.8px;
    font-family: "Poppins", sans-serif;
    color: #222222;
    width: 100% !important;
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
  // text-align: center;
  // border-color: transparent;
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
    // border-bottom: 2px solid #f1f1f1;
    // text-align: center;
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

const NavDropdownPrimary = styled(NavDropdown)`
  .dropdown-menu .dropdown-toggle::after {
    margin-left: 10px;
    rotate: -90deg;
  }
  .dropdown-menu {
    min-width: 20rem;
    left: -100px;
  }
  .dropdown-item {
    width: 25%;
    // border-right: 2px solid red;
  }
`;

const NavDropdownSecondary = styled(NavDropdown)`
  padding-left: 0.5rem;
  a {
    margin-left: 0;
    // padding: auto 16px;
    // margin-left: 16px;
  }
`;

const productCategories = [
  {
    title: "Household",
    items: [
      { name: "Baby Care", path: "/products/babyCare" },
      { name: "Basins", path: "/products/basins" },
      { name: "Baskets", path: "/products/baskets" },
      { name: "Bowls", path: "/products/bowls" },
      { name: "Buckets", path: "/products/buckets" },
      { name: "Colanders & Plates", path: "/products/colandersAndPlates" },
      { name: "Coolers", path: "/products/coolers" },
      { name: "Drums", path: "/products/drums" },
      { name: "Mugs & Cups", path: "/products/mugsAndCups" },
      { name: "Racks", path: "/products/racks" },
      { name: "Take Away Containers", path: "/products/takeAwayContainers" },
    ],
  },
  {
    title: "Industrial",
    items: [
      { name: "Ice Cream Containers", path: "/products/iceCreamContainers" },
      { name: "Jerry Cans", path: "/products/jerryCans" },
      { name: "Take Away Containers", path: "/products/takeAwayContainers" },
    ],
  },
  {
    title: "Tanks",
    items: [{ name: "Tanks", path: "/products/tanks" }],
  },
];

const Header = () => {
  return (
    <HeaderWrapper sticky="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <LogoContainer as={NavLink} to="/">
          <img
            alt="Hart Industries Logo"
            src={logo}
            className="d-inline-lock align-top"
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
            <NavDropdownPrimary title="Products" id="products">
              {productCategories.map((category) =>
                category.items.length > 1 ? (
                  <NavDropdownSecondary
                    title={category.title}
                    id={category.title.toLowerCase()}
                    key={category.title}
                  >
                    {category.items.map((item) => (
                      <NavDropdown.Item
                        as={NavLink}
                        to={item.path}
                        key={item.name}
                      >
                        {item.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdownSecondary>
                ) : (
                  <NavDropdown.Item as={NavLink} to={category.items[0].path}>
                    {category.title}
                  </NavDropdown.Item>
                )
              )}
            </NavDropdownPrimary>

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
