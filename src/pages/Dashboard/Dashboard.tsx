import React, { useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import useDOMEvaluator from "../../hooks/useDOMEvaluator";
import { Menu, MenuItem } from "../../components";
import { MenuItemType } from "../../components/Menu/MenuItem";
import { DashboardContainer } from "./Dashboard.styles";

const Dashboard = () => {
  const { results, setResults, applySettings } = useDOMEvaluator();
  const [viewReport, setViewReport] = useState(false);
  return (
    <DashboardContainer>
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
        <p
          className="report-text"
          onClick={() => {
            setViewReport(!viewReport);
          }}
        >
          {!viewReport ? "View Detailed Report" : "< Back to settings"}
        </p>
      </div>
      <Menu>
        {viewReport ? (
          <>
            {Object.keys(results.profanityMap).length > 0 ? (
              Object.keys(results.profanityMap).map((key) => (
                <MenuItem
                  key={key}
                  content={key}
                  data={parseInt(results.profanityMap[key] || "0")}
                  id={key as any}
                  type={MenuItemType.Display}
                  results={results}
                  setResults={setResults}
                ></MenuItem>
              ))
            ) : (
              <div className="empty-map">
                {results.enabled
                  ? "No profanity found"
                  : "Profanity Filter is disabled"}
              </div>
            )}
          </>
        ) : (
          <>
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
          </>
        )}
      </Menu>
    </DashboardContainer>
  );
};

export default Dashboard;
