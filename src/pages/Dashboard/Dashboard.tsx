import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { DashboardContainer } from "./Dashboard.styles";
import { Menu, MenuItem } from "../../components";
import useDOMEvaluator from "../../hooks/useDOMEvaluator";

const Dashboard = () => {
  const results = useDOMEvaluator();
  return (
    <DashboardContainer>
      {console.log(results)}
      <h2 className="dashboard-title">Control Panel</h2>
      <div className="progress-container">
        <div className="progress-indicator">
          <CircularProgressbar
            value={200}
            maxValue={100}
            text={`200 words`}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: "butt",
              textSize: "16px",
              pathTransitionDuration: 0.5,
              pathColor: `#f88`,
              textColor: "#f88",
              trailColor: "#d6d6d6",
            })}
          />
        </div>
        <p className="indicator-subheading">Profanity Counter</p>
      </div>

      <Menu>
        <MenuItem content="Enable profanity filter globally" />
        <MenuItem content="Use custom blacklisting" />
      </Menu>
    </DashboardContainer>
  );
};

export default Dashboard;
