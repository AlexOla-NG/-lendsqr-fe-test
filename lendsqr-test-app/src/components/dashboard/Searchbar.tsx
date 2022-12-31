import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/images/searchIcon.svg";

const Searchbar = () => {
  const [search, setSearch] = useState<string | number>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleClick = () => {
    setSearch("");
  };

  return (
    <div className="input-wrapper searchbar">
      <input
        type="text"
        value={search}
        onChange={handleChange}
        name="search"
        className="searchbar-term"
        placeholder="Search for anything"
      />
      <button className="searchbar-button btn" onClick={handleClick}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Searchbar;
