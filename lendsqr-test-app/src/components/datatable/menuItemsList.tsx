import { ITextIcon } from "./interface";
import { ReactComponent as EyeIcon } from "../../assets/images/eye-icon.svg";
import { ReactComponent as DeleteFriendIcon } from "../../assets/images/user-times 1.svg";
import { ReactComponent as ActivateUserIcon } from "../../assets/images/user-check 1.svg";

export const menuItems: ITextIcon[] = [
  { title: "view details", startAdornment: <EyeIcon /> },
  { title: "blacklist user", startAdornment: <DeleteFriendIcon /> },
  { title: "activate user", startAdornment: <ActivateUserIcon /> },
];
