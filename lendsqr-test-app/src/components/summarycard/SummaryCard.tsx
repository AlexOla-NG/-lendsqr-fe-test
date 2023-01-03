import React from "react";
import { ISummaryDetails } from "./interface";

const SummaryCard = ({ icon, title, value }: ISummaryDetails) => {
  return (
    <div className="summarycard">
      <div className="icon-wrapper">{icon}</div>
      <div className="title">{title}</div>
      <div className="value">{value}</div>
    </div>
  );
};

export default SummaryCard;
