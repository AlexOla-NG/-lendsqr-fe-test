const handlePreventDefault = (event: React.FormEvent<HTMLButtonElement>) => {
  event.preventDefault();
};

const handleSidebarToggle = () => {
  document.body.classList.toggle("nav-open");
};

const handleSidebarClose = () => {
  document.body.classList.remove("nav-open");
};

const status = ["active", "inactive", "pending", "blacklisted"];

const getStatus = () => {
  return status[Math.floor(Math.random() * status.length)];
};

const strToDate = (date: string) => {
  let newDate = new Date(date);

  return newDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const formatStr = (text: string) => {
  let textArray = text.split("-");
  let joinedText = textArray.join(" ");

  return joinedText;
};

export {
  handlePreventDefault,
  handleSidebarToggle,
  handleSidebarClose,
  getStatus,
  strToDate,
  formatStr,
};
