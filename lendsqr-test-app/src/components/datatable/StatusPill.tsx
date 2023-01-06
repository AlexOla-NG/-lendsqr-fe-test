import React from "react";
import { IStatusPill } from "./interface";

const StatusPill = ({ status }: IStatusPill) => {
  return <span className="status-pill">{status}</span>;
};

export default StatusPill;
