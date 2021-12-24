import React from "react";

import { ReportItemContainer } from "./ReportItem.styles";

interface ReportItemProps {
  data: number;
  content: string;
}

const ReportItem: React.FC<ReportItemProps> = ({ content, data }) => {
  return (
    <ReportItemContainer>
      <p className="content-box">{content}</p>
      <div className="display-container">{`${data || 0} occurences`}</div>
    </ReportItemContainer>
  );
};

export default ReportItem;
