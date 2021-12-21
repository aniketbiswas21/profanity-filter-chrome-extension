import React from "react";
import { MenuContainer } from "./Menu.styles";

interface MenuProps {
  children: React.ReactNode;
}

const Menu: React.FC<MenuProps> = ({ children }) => {
  return <MenuContainer>{children}</MenuContainer>;
};

export default Menu;
