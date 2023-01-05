import { ReactNode } from "react";

export interface ITableHead {
  title: string;
  endAdornment: ReactNode;
}

export interface ITableHeadComponent extends ITableHead {
  handleToggle(): void;
}

// TODO: don't forget to expand the interface props after switching from mock to api data
export interface ITableRow {
  id?: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  status?: string;
}
