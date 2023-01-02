import { IMenuItem } from "./interface";
import { ReactComponent as UsersLogo } from "../../../../assets/images/user-friends 1.svg";
import { ReactComponent as GurantorsLogo } from "../../../../assets/images/users 1.svg";
import { ReactComponent as SackLogo } from "../../../../assets/images/sack 1.svg";
import { ReactComponent as HandshakeLogo } from "../../../../assets/images/handshake-regular 1.svg";
import { ReactComponent as PiggyBankLogo } from "../../../../assets/images/piggy-bank 1.svg";
import { ReactComponent as LoanRequestLogo } from "../../../../assets/images/Group 104.svg";
import { ReactComponent as WhitelistLogo } from "../../../../assets/images/user-check 1.svg";
import { ReactComponent as KarmaLogo } from "../../../../assets/images/user-times 1.svg";
import { ReactComponent as BriefcaseLogo } from "../../../../assets/images/briefcase 1.svg";
import { ReactComponent as SavingsLogo } from "../../../../assets/images/savings.svg";
import { ReactComponent as CoinsLogo } from "../../../../assets/images/coins-solid 1.svg";
import { ReactComponent as TransactionsLogo } from "../../../../assets/images/transactions.svg";
import { ReactComponent as ServicesLogo } from "../../../../assets/images/galaxy 1.svg";
import { ReactComponent as UserCogLogo } from "../../../../assets/images/user-cog 1.svg";
import { ReactComponent as SettlementsLogo } from "../../../../assets/images/scroll 1.svg";
import { ReactComponent as ReportsLogo } from "../../../../assets/images/chart-bar 2.svg";
import { ReactComponent as PreferencesLogo } from "../../../../assets/images/sliders-h 1.svg";
import { ReactComponent as FeesLogo } from "../../../../assets/images/badge-percent 1.svg";
import { ReactComponent as AuditLogo } from "../../../../assets/images/clipboard-list 1.svg";

const customers: IMenuItem[] = [
  { startAdornment: <UsersLogo />, title: "users" },
  { startAdornment: <GurantorsLogo />, title: "guarantors" },
  { startAdornment: <SackLogo />, title: "loans" },
  { startAdornment: <HandshakeLogo />, title: "decision models" },
  { startAdornment: <PiggyBankLogo />, title: "savings" },
  { startAdornment: <LoanRequestLogo />, title: "loan requests" },
  { startAdornment: <WhitelistLogo />, title: "whitelist" },
  { startAdornment: <KarmaLogo />, title: "karma" },
];

const businesses: IMenuItem[] = [
  { startAdornment: <BriefcaseLogo />, title: "organization" },
  { startAdornment: <LoanRequestLogo />, title: "loan products" },
  { startAdornment: <SavingsLogo />, title: "savings product" },
  { startAdornment: <CoinsLogo />, title: "fees and charges" },
  { startAdornment: <TransactionsLogo />, title: "transactions" },
  { startAdornment: <ServicesLogo />, title: "services" },
  { startAdornment: <UserCogLogo />, title: "service account" },
  { startAdornment: <SettlementsLogo />, title: "settlements" },
  { startAdornment: <ReportsLogo />, title: "reports" },
];

const settings: IMenuItem[] = [
  { startAdornment: <PreferencesLogo />, title: "preferences" },
  { startAdornment: <FeesLogo />, title: "fees and pricing" },
  { startAdornment: <AuditLogo />, title: "audit logs" },
];

export { customers, businesses, settings };
