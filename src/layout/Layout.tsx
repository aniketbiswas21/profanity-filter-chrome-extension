import React from "react";
import { DashboardHeader } from "../components";

import {
  ContentContainer,
  LayoutContainer,
  NavContainer,
} from "./Layout.styles";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <NavContainer>
        <DashboardHeader />
      </NavContainer>
      <ContentContainer>{children}</ContentContainer>
    </LayoutContainer>
  );
};

export default Layout;
