import { ReactNode } from "react";

export interface IMenuItem {
  startAdornment: ReactNode;
  title?: string;
  endAdornment?: ReactNode;
}
