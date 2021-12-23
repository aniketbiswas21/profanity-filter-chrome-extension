import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import useDOMEvaluator from "../../hooks/useDOMEvaluator";
import { Menu, MenuItem } from "../../components";
import { MenuItemType } from "../../components/Menu/MenuItem";
import { DashboardContainer } from "./Dashboard.styles";

const Dashboard = () => {
  const { results, setResults, applySettings } = useDOMEvaluator();
  return (
    <DashboardContainer>
      {console.log(results)}
      <h2 className="dashboard-title">Control Panel</h2>
      <div className="progress-container">
        <div className="progress-indicator">
          <CircularProgressbar
            value={results.profanityCount}
            maxValue={100}
            text={`${results.profanityCount} words`}
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
        <MenuItem
          content="Enable profanity filter globally"
          id="enabled"
          type={MenuItemType.Switch}
          results={results}
          setResults={setResults}
        />
        <MenuItem
          content="Configure placeholder (replacement for a single alphabet)"
          id="placeholder"
          type={MenuItemType.Input}
          results={results}
          setResults={setResults}
        />
        <MenuItem
          content="Blacklist words"
          id="blacklist"
          type={MenuItemType.Tags}
          results={results}
          setResults={setResults}
        />
        <MenuItem
          content="Whitelist words"
          id="whitelist"
          type={MenuItemType.Tags}
          results={results}
          setResults={setResults}
        />
        <div className="action-container">
          <button onClick={applySettings}>Apply Changes</button>
        </div>
      </Menu>
    </DashboardContainer>
  );
};

export default Dashboard;
