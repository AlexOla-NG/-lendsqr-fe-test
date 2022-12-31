import React, { ReactNode } from "react";

interface IMenuItem {
  icon: ReactNode;
  title: string;
}

const MenuItem = ({ icon, title }: IMenuItem) => {
  return (
    <div>
      {icon}
      <p>{title}</p>
    </div>
  );
};

export default MenuItem;
