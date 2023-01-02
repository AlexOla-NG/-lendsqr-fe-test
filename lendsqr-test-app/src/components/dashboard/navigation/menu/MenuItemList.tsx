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
  { startAdornment: <UsersLogo />, title: "Users" },
  { startAdornment: <GurantorsLogo />, title: "Guarantors" },
  { startAdornment: <SackLogo />, title: "Loans" },
  { startAdornment: <HandshakeLogo />, title: "Decision Models" },
  { startAdornment: <PiggyBankLogo />, title: "Savings" },
  { startAdornment: <LoanRequestLogo />, title: "Loan Requests" },
  { startAdornment: <WhitelistLogo />, title: "Whitelist" },
  { startAdornment: <KarmaLogo />, title: "Karma" },
];

const businesses: IMenuItem[] = [
  { startAdornment: <BriefcaseLogo />, title: "Organization" },
  { startAdornment: <LoanRequestLogo />, title: "Loan Products" },
  { startAdornment: <SavingsLogo />, title: "Savings Product" },
  { startAdornment: <CoinsLogo />, title: "Fees and Charges" },
  { startAdornment: <TransactionsLogo />, title: "Transactions" },
  { startAdornment: <ServicesLogo />, title: "Services" },
  { startAdornment: <UserCogLogo />, title: "Service Account" },
  { startAdornment: <SettlementsLogo />, title: "Settlements" },
  { startAdornment: <ReportsLogo />, title: "Reports" },
];

const settings: IMenuItem[] = [
  { startAdornment: <PreferencesLogo />, title: "Preferences" },
  { startAdornment: <FeesLogo />, title: "Fees and Pricing" },
  { startAdornment: <AuditLogo />, title: "Audit Logs" },
];

export { customers, businesses, settings };
