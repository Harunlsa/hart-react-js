// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import logo from "/src/assets/hartLogo.png";

// const HeaderWrapper = styled(Navbar)`
//   background: #fff;
//   transition: all 0.5s;
//   z-index: 997;
//   min-height: 86px;
//   box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
//   padding: 0;
//   // button {
//   //   color: transparent;
//   // border: transparent;
//   // }

//   &.fixed-top {
//     height: 70px;
//   }

//   @media (max-width: 380px) {
//     min-height: 68px;
//     button {
//     }
//     span {
//       padding: 0;
//       width: 12px;
//     }
//   }

//   /* Small devices (portrait tablets and large phones, 600px and up) */
//   @media (min-width: 600px) {
//   }

//   /* Medium devices (landscape tablets, 768px and up) */
//   @media (min-width: 768px) {
//   }

//   /* Large devices (laptops/desktops, 992px and up) */
//   @media (max-width: 992px) {
//     padding: 10px 0;
//   }

//   /* Extra large devices (large laptops and desktops, 1200px and up) */
//   @media (min-width: 1200px) {
//   }
// `;

// const LogoContainer = styled(Navbar.Brand)`
//   display: flex;
//   align-items: center;

//   img {
//     max-height: 60px;
//     margin-right: 1rem;
//   }

//   h1 {
//     font-size: 1.875rem;
//     margin: 0;
//     padding: 0;
//     line-height: 1;
//     font-weight: 600;
//     letter-spacing: 0.8px;
//     font-family: "Poppins", sans-serif;
//     color: #222222;
//     width: 100% !important;
//   }

//   @media (max-width: 514px) {
//     h1 {
//       font-size: 1.5rem;
//     }
//     img {
//       max-height: 50px;
//     }
//   }
//   @media (max-width: 438px) {
//     h1 {
//       font-size: 5.5vw;
//     }
//     img {
//       max-height: 10vw;
//       margin-right: 6px;
//     }
//   }
// `;

// const NavSection = styled(Nav)`
//   // text-align: center;
//   // border-color: transparent;
//   .dropdown-menu.show {
//     background-color: #fcfdff;
//     box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
//   }
//   a {
//     font-size: 15px;
//     font-weight: 600;
//     color: #222222;
//     transition: 0.3s;
//     position: relative;
//     margin-left: 26px;

//     &:before {
//       content: "";
//       position: absolute;
//       height: 2px;
//       bottom: 0px;
//       left: 0;
//       background-color: #106eea;
//       visibility: hidden;
//       transition: all 0.3s ease-in-out 0s;
//     }

//     &:hover:before,
//     &.active:before {
//       visibility: visible;
//       width: 100%;
//     }

//     &:hover,
//     &.active {
//       color: #106eea;
//       background-color: transparent;
//     }
//   }
//   .dropdown-item {
//     margin: 0;
//     // border-bottom: 2px solid #f1f1f1;
//     // text-align: center;
//   }
//   @media (max-width: 991px) {
//     ul {
//       display: none;
//     }

//     &.navbar-mobile {
//       position: fixed;
//       overflow: hidden;
//       top: 0;
//       right: 0;
//       left: 0;
//       bottom: 0;
//       background: rgba(9, 9, 9, 0.9);
//       transition: 0.3s;
//       z-index: 999;

//       ul {
//         display: block;
//         position: absolute;
//         top: 55px;
//         right: 15px;
//         bottom: 15px;
//         left: 15px;
//         padding: 10px 0;
//         background-color: #fff;
//         overflow-y: auto;
//       }
//     }
//   }
// `;

// const NavDropdownPrimary = styled(NavDropdown)`
//   .dropdown-menu .dropdown-toggle::after {
//     margin-left: 10px;
//     rotate: -90deg;
//   }
//   .dropdown-menu {
//     min-width: 20rem;
//     left: -100px;
//   }
//   .dropdown-item {
//     width: 25%;
//     // border-right: 2px solid red;
//   }
// `;

// const NavDropdownSecondary = styled(NavDropdown)`
//   padding-left: 0.5rem;
//   a {
//     margin-left: 0;
//     // padding: auto 16px;
//     // margin-left: 16px;
//   }
// `;

// const productCategories = [
//   {
//     title: "Household",
//     items: [
//       { name: "Baby Care", path: "/products/babyCare" },
//       { name: "Basins", path: "/products/basins" },
//       { name: "Baskets", path: "/products/baskets" },
//       { name: "Bowls", path: "/products/bowls" },
//       { name: "Buckets", path: "/products/buckets" },
//       { name: "Colanders & Plates", path: "/products/colandersAndPlates" },
//       { name: "Coolers", path: "/products/coolers" },
//       { name: "Drums", path: "/products/drums" },
//       { name: "Mugs & Cups", path: "/products/mugsAndCups" },
//       { name: "Racks", path: "/products/racks" },
//       { name: "Take Away Containers", path: "/products/takeAwayContainers" },
//     ],
//   },
//   {
//     title: "Industrial",
//     items: [
//       { name: "Ice Cream Containers", path: "/products/iceCreamContainers" },
//       { name: "Jerry Cans", path: "/products/jerryCans" },
//       { name: "Take Away Containers", path: "/products/takeAwayContainers" },
//     ],
//   },
//   {
//     title: "Tanks",
//     items: [{ name: "Tanks", path: "/products/tanks" }],
//   },
// ];

// const Header = () => {
//   return (
//     <HeaderWrapper sticky="top" expand="lg" className="bg-body-tertiary">
//       <Container>
//         <LogoContainer as={NavLink} to="/">
//           <img
//             alt="Hart Industries Logo"
//             src={logo}
//             className="d-inline-lock align-top"
//           />
//           <h1>Hart Industries Limited</h1>
//         </LogoContainer>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav" style={{ flexGrow: 0 }}>
//           <NavSection className="me-auto" activeKey="/home">
//             <Nav.Link as={NavLink} to="/" end>
//               Home
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/about">
//               About Us
//             </Nav.Link>
//             <NavDropdownPrimary title="Products" id="products">
//               {productCategories.map((category) =>
//                 category.items.length > 1 ? (
//                   <NavDropdownSecondary
//                     title={category.title}
//                     id={category.title.toLowerCase()}
//                     key={category.title}
//                   >
//                     {category.items.map((item) => (
//                       <NavDropdown.Item
//                         as={NavLink}
//                         to={item.path}
//                         key={item.name}
//                       >
//                         {item.name}
//                       </NavDropdown.Item>
//                     ))}
//                   </NavDropdownSecondary>
//                 ) : (
//                   <NavDropdown.Item as={NavLink} to={category.items[0].path}>
//                     {category.title}
//                   </NavDropdown.Item>
//                 )
//               )}
//             </NavDropdownPrimary>

//             <Nav.Link as={NavLink} to="/contact">
//               Contact
//             </Nav.Link>
//           </NavSection>
//         </Navbar.Collapse>
//       </Container>
//     </HeaderWrapper>
//   );
// };

// export default Header;

// "use client";

// import { Fragment } from "react";
// import { Popover, Transition } from "@headlessui/react";
// // import { ChevronDown } from "lucide-react";
// import { BiChevronDown } from "react-icons/bi";

// import { Link } from "react-router-dom";

// const categories = [
//   {
//     name: "Products",
//     sections: [
//       {
//         heading: "Baskets",
//         items: [
//           { name: "Plastic Baskets", href: "/products/baskets" },
//           { name: "Woven Baskets", href: "/products/woven-baskets" },
//         ],
//       },
//       {
//         heading: "Buckets",
//         items: [
//           { name: "Household Buckets", href: "/products/buckets" },
//           { name: "Industrial Buckets", href: "/products/industrial-buckets" },
//         ],
//       },
//     ],
//   },
//   {
//     name: "About",
//     href: "/about",
//   },
//   {
//     name: "Contact",
//     href: "/contact",
//   },
// ];

// export default function Navbar() {
//   return (
//     <header className="bg-white shadow sticky top-0 z-50">
//       <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold text-gray-800">
//           Hart Industries
//         </Link>

//         {/* Menu */}
//         <div className="hidden md:flex space-x-6">
//           {categories.map((category) =>
//             category.sections ? (
//               <Popover key={category.name} className="relative">
//                 {({ open }) => (
//                   <>
//                     <Popover.Button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium">
//                       {category.name}
//                       <BiChevronDown
//                         className={`h-4 w-4 transition-transform ${
//                           open ? "rotate-180" : ""
//                         }`}
//                       />
//                     </Popover.Button>

//                     <Transition
//                       as={Fragment}
//                       enter="transition ease-out duration-200"
//                       enterFrom="opacity-0 translate-y-1"
//                       enterTo="opacity-100 translate-y-0"
//                       leave="transition ease-in duration-150"
//                       leaveFrom="opacity-100 translate-y-0"
//                       leaveTo="opacity-0 translate-y-1"
//                     >
//                       <Popover.Panel className="absolute left-0 mt-4 w-screen max-w-md rounded-xl bg-white shadow-lg ring-1 ring-black/5 p-6">
//                         <div className="grid grid-cols-2 gap-6">
//                           {category.sections.map((section) => (
//                             <div key={section.heading}>
//                               <p className="font-semibold text-gray-900 mb-3">
//                                 {section.heading}
//                               </p>
//                               <ul className="space-y-2">
//                                 {section.items.map((item) => (
//                                   <li key={item.name}>
//                                     <Link
//                                       to={item.href}
//                                       className="text-gray-600 hover:text-blue-600"
//                                     >
//                                       {item.name}
//                                     </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>
//                           ))}
//                         </div>
//                       </Popover.Panel>
//                     </Transition>
//                   </>
//                 )}
//               </Popover>
//             ) : (
//               <Link
//                 // key={category.name}
//                 to={category.href}
//                 className="text-gray-700 hover:text-blue-600 font-medium"
//               >
//                 {category.name}
//               </Link>
//             )
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// }

import { Fragment, useMemo, useState } from "react";
import { Popover, Transition, Dialog } from "@headlessui/react";
import {
  BiChevronDown,
  BiChevronRight,
  BiHome,
  BiSolidFactory,
  BiDroplet,
  BiMenu,
  BiX,
} from "react-icons/bi";

import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import logo from "/src/assets/hartLogo.png";
import { Container } from "react-bootstrap";

const productCategories = [
  {
    id: "household",
    title: "Household",
    icon: BiHome,
    items: [
      { name: "Baby Care", path: "/products/babyCare" },
      { name: "Basins", path: "/products/basins" },
      { name: "Baskets", path: "/products/baskets" },
      { name: "Bowls", path: "/products/bowls" },
      { name: "Buckets", path: "/products/buckets" },
      { name: "Colanders and Plates", path: "/products/colandersAndPlates" },
      { name: "Coolers", path: "/products/coolers" },
      { name: "Drums", path: "/products/drums" },
      { name: "Mugs and Cups", path: "/products/mugsAndCups" },
      { name: "Racks", path: "/products/racks" },
      { name: "Toys", path: "/products/toys" },
      { name: "Take Away Containers", path: "/products/takeAwayContainers" },
    ],
  },
  {
    id: "industrial",
    title: "Industrial",
    icon: BiSolidFactory,
    items: [
      { name: "Ice Cream Containers", path: "/products/iceCreamContainers" },
      { name: "Jerry Cans", path: "/products/jerryCans" },
      { name: "Take Away Containers", path: "/products/takeAwayContainers" },
    ],
  },
  {
    id: "tanks",
    title: "Tanks",
    icon: BiDroplet,
    items: [
      { name: "Hart Tanks", path: "/products/tanks" },
      { name: "Liberty Tanks", path: "/products/tanks" },
    ],
  },
];

/* ---------------- STYLED COMPONENTS ---------------- */

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 997;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const HeaderInner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  height: 86px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;

  img {
    height: 48px;
    width: auto;
  }

  h1 {
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: #111827;

    @media (min-width: 640px) {
      font-size: 1.5rem;
    }
  }
`;

const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const NavLinkStyled = styled(NavLink)`
  position: relative;
  font-weight: 600;
  color: #1f2937;
  text-decoration: none;
  transition: color 0.2s ease;

  &.active {
    color: #2563eb;
  }

  &:hover {
    color: #2563eb;
  }
`;

const PopoverButton = styled(Popover.Button)`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-weight: 600;
  color: #1f2937;
  cursor: pointer;
  background: none;
  border: none;

  &:hover {
    color: #2563eb;
  }

  svg {
    height: 1rem;
    width: 1rem;
    transition: transform 0.2s ease;
  }

  &[aria-expanded="true"] svg {
    transform: rotate(180deg);
  }
`;

const MegaMenuPanel = styled(Popover.Panel)`
  position: absolute;
  right: 0;
  margin-top: 1rem;
  width: 704px;
  background: #fff;
  border-radius: 0.75rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Rail = styled.div`
  width: 16rem;
  border-right: 1px solid #e5e7eb;
  padding: 0.75rem;
`;

const RailButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  border-radius: ${({ $active }) => ($active ? "0" : "0.375rem")};
  text-align: left;
  font-weight: 500;
  transition: background 0.2s ease;
  border: none;
  background: ${({ $active }) => ($active ? "#f9fafb" : "transparent")};
  color: ${({ $active }) => ($active ? "#2563eb" : "#1f2937")};
  border-right: ${({ $active }) =>
    $active ? "2px solid #2563eb" : "transparent"};
  width: ${({ $active }) => ($active ? "106%" : "100%")};
  cursor: pointer;

  &:hover {
    background: #f9fafb;
  }

  span {
    color: red;
    flex: 0 !important;
  }

  svg {
    height: 20px;
    width: 20px;
    color: ${({ $active }) => ($active ? "#2563eb" : "#6b7280")};
    &.chevronRight {
      // margin-left: ${({ $active }) => ($active ? "100px" : "")};
      // float: right;
      position: absolute;
      left: 13.5rem;
      // margin-left: auto;
    }
  }
`;

const RightPanel = styled.div`
  flex: 1;
  padding: 1.5rem;

  .grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 4rem;
    row-gap: 0.5rem;
  }

  a {
    display: block;
    padding: 0.25rem 0.375rem;
    font-size: 15px;
    font-weight: 500;
    color: #374151;
    border-radius: 0.375rem;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #2563eb;
    }
  }
`;

const MobileTrigger = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  padding: 0.5rem;
  color: #374151;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    background: #f3f4f6;
  }

  @media (min-width: 1024px) {
    display: none;
  }

  svg {
    height: 24px;
    width: 24px;
  }
`;

const MobilePanel = styled(Dialog.Panel)`
  position: fixed;
  inset: 0 auto 0 0;
  right: 0;
  width: 100%;
  max-width: 24rem;
  background: #fff;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const MobileNav = styled.nav`
  padding: 0 1rem 1.5rem;
`;

const MobileNavLink = styled(NavLink)`
  display: block;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 15px;
  font-weight: 600;
  color: #1f2937;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: #f3f4f6;
  }
`;

/* ---------------- COMPONENT ---------------- */

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState(productCategories[0].id);

  const activeCategory = useMemo(
    () =>
      productCategories.find((c) => c.id === activeId) ?? productCategories[0],
    [activeId]
  );

  return (
    <HeaderWrapper>
      <HeaderInner>
        <LogoContainer to="/">
          <img src={logo} alt="Hart Industries Logo" />
          <h1>Hart Industries Limited</h1>
        </LogoContainer>

        {/* Desktop nav */}
        <DesktopNav>
          <NavLinkStyled to="/" end>
            Home
          </NavLinkStyled>
          <NavLinkStyled to="/about">About Us</NavLinkStyled>

          <Popover>
            {({ open, close }) => (
              <>
                <PopoverButton aria-expanded={open}>
                  Products <BiChevronDown />
                </PopoverButton>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-150"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <MegaMenuPanel>
                    <div style={{ display: "flex" }}>
                      {/* Left rail */}
                      <Rail>
                        <ul
                          style={{ listStyle: "none", margin: 0, padding: 0 }}
                        >
                          {" "}
                          {productCategories.map((cat) => {
                            const Icon = cat.icon;
                            const active = cat.id === activeId;
                            return (
                              <li key={cat.id}>
                                <RailButton
                                  $active={active}
                                  onMouseEnter={() => setActiveId(cat.id)}
                                  onClick={() => setActiveId(cat.id)}
                                >
                                  <Icon />
                                  <span style={{ flex: 1 }}>{cat.title}</span>
                                  {cat.items.length > 0 && (
                                    <BiChevronRight className="chevronRight" />
                                  )}
                                </RailButton>
                                {/* <div className="divider"></div> */}
                              </li>
                            );
                          })}
                        </ul>
                      </Rail>

                      {/* Right panel */}
                      <RightPanel>
                        <div className="grid">
                          {activeCategory.items.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              onClick={() => close()}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </RightPanel>
                    </div>
                  </MegaMenuPanel>
                </Transition>
              </>
            )}
          </Popover>

          <NavLinkStyled to="/contact">Contact</NavLinkStyled>
        </DesktopNav>

        {/* Mobile trigger */}
        <MobileTrigger onClick={() => setMobileOpen(true)}>
          <BiMenu />
        </MobileTrigger>
      </HeaderInner>

      {/* Mobile drawer */}
      <Dialog open={mobileOpen} onClose={setMobileOpen}>
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            zIndex: 999,
          }}
          aria-hidden="true"
        />
        <MobilePanel>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1rem",
            }}
          >
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                textDecoration: "none",
              }}
            >
              <img
                src={logo}
                alt="Hart Industries Logo"
                style={{ height: "40px" }}
              />
              <span style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                Hart Industries
              </span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                borderRadius: "0.375rem",
                padding: "0.5rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#374151",
              }}
            >
              <BiX style={{ height: 24, width: 24 }} />
            </button>
          </div>

          <MobileNav>
            <MobileNavLink to="/" end onClick={() => setMobileOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setMobileOpen(false)}>
              About Us
            </MobileNavLink>

            {/* Products mobile */}
            <div
              style={{
                marginTop: "1rem",
                border: "1px solid #e5e7eb",
                borderRadius: "0.75rem",
              }}
            >
              <div
                style={{ borderBottom: "1px solid #e5e7eb", padding: "0.5rem" }}
              >
                <ul
                  style={{
                    display: "flex",
                    gap: "0.25rem",
                    overflowX: "auto",
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {productCategories.map((cat) => {
                    const Icon = cat.icon;
                    const active = cat.id === activeId;
                    return (
                      <li key={cat.id}>
                        <button
                          onClick={() => setActiveId(cat.id)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.5rem 0.75rem",
                            borderRadius: "0.375rem",
                            fontSize: "0.875rem",
                            background: active ? "#f3f4f6" : "transparent",
                            color: active ? "#2563eb" : "#374151",
                            border: "none",
                            cursor: "pointer",
                          }}
                        >
                          <Icon style={{ height: 16, width: 16 }} />
                          {cat.title}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div style={{ padding: "0.75rem" }}>
                <div style={{ display: "grid", gap: "0.25rem" }}>
                  {activeCategory.items.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        padding: "0.5rem",
                        borderRadius: "0.375rem",
                        fontSize: "15px",
                        fontWeight: 500,
                        color: "#1f2937",
                        textDecoration: "none",
                      }}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            <MobileNavLink
              to="/contact"
              onClick={() => setMobileOpen(false)}
              style={{ marginTop: "0.75rem" }}
            >
              Contact
            </MobileNavLink>
          </MobileNav>
        </MobilePanel>
      </Dialog>
    </HeaderWrapper>
  );
}
