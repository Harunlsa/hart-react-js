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
      { name: "Kettles", path: "/products/kettles" },
      { name: "Mugs and Cups", path: "/products/mugsAndCups" },
      { name: "Racks", path: "/products/racks" },
      { name: "Toys", path: "/products/toys" },
      { name: "Take Away Containers", path: "/products/takeAwayContainers" },
      { name: "Others", path: "/products/others" },
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
      { name: "Hart Tanks", path: "/products/hartTanks" },
      { name: "Liberty Tanks", path: "/products/libertyTanks" },
      { name: "Fish Tanks", path: "/products/fishTanks" },
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
    // color: red;
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
  overflow-y: scroll;
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
    [activeId],
  );

  return (
    <HeaderWrapper>
      <HeaderInner>
        <LogoContainer to="/">
          <img src={logo} alt="Hart Industries Logo" width="40" height="40" />
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
        <MobileTrigger
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation menu"
        >
          <BiMenu aria-hidden="true" />
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
              aria-label="Close navigation menu"
              style={{
                borderRadius: "0.375rem",
                padding: "0.5rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#374151",
              }}
            >
              <BiX style={{ height: 24, width: 24 }} aria-hidden="true" />
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
              <div
                style={{
                  padding: "0.75rem",
                  maxHeight: "330px",
                  overflowY: "scroll",
                }}
              >
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
