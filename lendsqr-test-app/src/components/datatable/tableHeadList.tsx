import { ITextIcon } from "./interface";
import { ReactComponent as FilterButton } from "../../assets/images/filterButton.svg";

export const tableHeaders: ITextIcon[] = [
  { title: "organization", endAdornment: <FilterButton /> },
  { title: "username", endAdornment: <FilterButton /> },
  { title: "email", endAdornment: <FilterButton /> },
  { title: "phone number", endAdornment: <FilterButton /> },
  { title: "date joined", endAdornment: <FilterButton /> },
  { title: "status", endAdornment: <FilterButton /> },
];
