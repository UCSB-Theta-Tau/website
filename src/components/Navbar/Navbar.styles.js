import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { slide } from "react-burger-menu";

export const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 66px;
  max-height: 6vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 100vw;
  max-width: 100vw;
  position: fixed;
  background-color: white;
  z-index: 1;
  font:
    1.4em Raleway,
    sans-serif;
  color: #333;
`;

export const GridContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

export const Logo = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-height: 100%;
  margin-left: 1em;
  margin-right: 1em;
  cursor: pointer;
  color: #333;
  text-decoration: none;
`;

export const LogoImg = styled.img`
  height: 1.25em;
  margin-left: 0.5em;
  margin-right: 0.25em;
`;

export const TTText = styled.div`
  @media (max-width: 480px) {
    display: none;
  }
`;

export const MobileTTText = styled.div`
  @media (min-width: 481px) {
    display: none;
  }
`;

export const LogoSeparator = styled.span`
  margin-left: 0.25em;
  margin-right: 0.25em;
  color: #8b0000;
`;

export const DropdownContainer = styled.div`
  height: 100vh;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
`;

export const MenuIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MenuIcon = styled(FontAwesomeIcon)`
  margin-right: 1em;
  cursor: pointer;
`;

export const Menu = styled(slide)`
  background-color: white;
  font:
    1.4em Raleway,
    sans-serif;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    width: 100% !important;
  }
`;

export const MenuButton = styled.div`
  display: flex !important;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  margin-top: 0.75em;
  margin-bottom: 1em;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-height: 100%;
  margin-left: 1em;
  margin-right: 1em;
  margin-bottom: 0.5em;
`;

export const MenuLink = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  color: #333;
`;
