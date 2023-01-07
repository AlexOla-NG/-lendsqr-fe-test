const handlePreventDefault = (event: React.FormEvent<HTMLButtonElement>) => {
  event.preventDefault();
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

export { handlePreventDefault, getStatus, strToDate };
