import React from "react";
import { Menu } from "@headlessui/react";
import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #fff;
  border-bottom: 1px solid #eee;
`;

const NavItem = styled.div`
  position: relative;
  margin: 0 1rem;
`;

const MenuButton = styled(Menu.Button)`
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
`;

const DropdownPanel = styled(Menu.Items)`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 1.5rem;
  min-width: 600px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 100;
`;

const PanelSection = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  a {
    margin: 0.25rem 0;
    color: #444;
    text-decoration: none;

    &:hover {
      color: #0073e6;
    }
  }
`;

export default function MegaMenu() {
  return (
    <Navbar>
      <NavItem>
        <Menu>
          {({ open }) => (
            <>
              <MenuButton>Tanks</MenuButton>
              {open && (
                <DropdownPanel>
                  <PanelSection>
                    <h4>Small Tanks</h4>
                    <a href="/products/tank1">Tank 1</a>
                    <a href="/products/tank2">Tank 2</a>
                  </PanelSection>
                  <PanelSection>
                    <h4>Large Tanks</h4>
                    <a href="/products/tank3">Tank 3</a>
                    <a href="/products/tank4">Tank 4</a>
                  </PanelSection>
                  <PanelSection>
                    <h4>Accessories</h4>
                    <a href="/products/valve">Valves</a>
                    <a href="/products/pipes">Pipes</a>
                  </PanelSection>
                </DropdownPanel>
              )}
            </>
          )}
        </Menu>
      </NavItem>

      <NavItem>
        <Menu>
          {({ open }) => (
            <>
              <MenuButton>Racks</MenuButton>
              {open && (
                <DropdownPanel>
                  <PanelSection>
                    <h4>Metal Racks</h4>
                    <a href="/products/rack1">Rack 1</a>
                    <a href="/products/rack2">Rack 2</a>
                  </PanelSection>
                  <PanelSection>
                    <h4>Plastic Racks</h4>
                    <a href="/products/rack3">Rack 3</a>
                    <a href="/products/rack4">Rack 4</a>
                  </PanelSection>
                  <PanelSection>
                    <h4>Custom Racks</h4>
                    <a href="/products/custom">Custom</a>
                  </PanelSection>
                </DropdownPanel>
              )}
            </>
          )}
        </Menu>
      </NavItem>
    </Navbar>
  );
}
