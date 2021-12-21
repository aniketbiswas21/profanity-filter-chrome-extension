import React from "react";

import { Navbar } from "./DashboardHeader.styles";
import logo from "../../assets/images/logo.png";

const DashboardHeader = () => {
  return (
    <Navbar>
      <img src={logo} alt="profanity-filter" className="logo" />
      <h5 className="title">
        <span className="strikethrough">Profanity</span> Filter
      </h5>
    </Navbar>
  );
};

export default DashboardHeader;
