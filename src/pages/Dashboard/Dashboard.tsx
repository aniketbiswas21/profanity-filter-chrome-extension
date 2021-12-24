import React, { useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import useDOMEvaluator, { IResult } from "../../hooks/useDOMEvaluator";
import { Menu, MenuItem, ReportItem } from "../../components";
import { MenuItemType } from "../../components/Menu/MenuItem";
import { DashboardContainer } from "./Dashboard.styles";

interface IMenuItem {
  content: string;
  type: MenuItemType;
  id: keyof IResult;
}

const menuItems: IMenuItem[] = [
  {
    content: "Enable profanity filter globally",
    id: "enabled",
    type: MenuItemType.Switch,
  },
  {
    content: "Configure placeholder (replacement for a single alphabet)",
    id: "placeholder",
    type: MenuItemType.Input,
  },
  {
    content: "Blacklist words",
    id: "blacklist",
    type: MenuItemType.Tags,
  },
  {
    content: "Whitelist words",
    id: "whitelist",
    type: MenuItemType.Tags,
  },
];

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
                <ReportItem
                  key={key}
                  content={key}
                  data={parseInt(results.profanityMap[key] || "0")}
                />
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
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                content={item.content}
                id={item.id}
                type={item.type}
                results={results}
                setResults={setResults}
              />
            ))}
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
