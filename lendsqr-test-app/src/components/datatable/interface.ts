import { ReactNode } from "react";

export interface ITextIcon {
  startAdornment?: ReactNode;
  title: string;
  endAdornment?: ReactNode;
}

export interface ITableHeadComponent extends ITextIcon {
  handleOpen(): void;
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
  lastActiveDate?: string;
  accountBalance?: string;
  accountNumber?: string;
  profile?: {};
  guarantor?: {};
  socials?: {};
  education?: {};
}

export interface IUserData {
  userData: ITableRow[];
}

export interface IStatusPill {
  status: string;
}

export interface IOptionsMenu {
  handleNavigate(): void;
  blacklistUser(): void;
  activateUser(): void;
}
