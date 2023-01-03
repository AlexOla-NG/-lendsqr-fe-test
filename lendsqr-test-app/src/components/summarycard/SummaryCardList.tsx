import { ISummaryDetails } from "./interface";
import { ReactComponent as UsersLogo } from "../../assets/images/summary-users-icon.svg";
import { ReactComponent as ActiveUsersLogo } from "../../assets/images/summary-active-icon.svg";
import { ReactComponent as UsersLoanLogo } from "../../assets/images/summary-loans-icon.svg";
import { ReactComponent as UsersSavingsLogo } from "../../assets/images/summary-savings-icon.svg";

export const summarycardlist: ISummaryDetails[] = [
  { icon: <UsersLogo />, title: "users", value: 2453 },
  { icon: <ActiveUsersLogo />, title: "active users", value: 2453 },
  { icon: <UsersLoanLogo />, title: "users with loans", value: 12453 },
  { icon: <UsersSavingsLogo />, title: "users with savings", value: 102453 },
];
