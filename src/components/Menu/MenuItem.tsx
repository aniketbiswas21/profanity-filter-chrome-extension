import React from "react";
import { MenuItemContainer } from "./Menu.styles";

interface MenuProps {
  content: string;
}

const MenuItem: React.FC<MenuProps> = ({ content }) => {
  return (
    <MenuItemContainer>
      <p className="content-box">{content}</p>
      <div className="checkbox-container">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
    </MenuItemContainer>
  );
};

export default MenuItem;
