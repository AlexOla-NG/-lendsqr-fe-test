import React from "react";
import { ReactComponent as Chevron } from "../../assets/images/chevron.svg";
import { ReactComponent as Calendar } from "../../assets/images/calendar.svg";

// TODO: stopped here
// style filterform

const FilterForm = () => {
  const handlePreventDefault = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <div className="filter-form">
      <form>
        <div className="select-wrapper">
          <p>organization</p>
          <div className="input-wrapper">
            <input type="text" name="organization" placeholder="select" />
            <button onClick={handlePreventDefault} className="btn">
              <Chevron />
            </button>
          </div>
        </div>
        <label htmlFor="username" className="select-wrapper">
          Username
          <input
            type="text"
            name="username"
            id="username"
            className="input-wrapper"
            placeholder="user"
          />
        </label>
        <label htmlFor="email" className="select-wrapper">
          Email
          <input
            type="email"
            name="email"
            id="email"
            className="input-wrapper"
            placeholder="email"
          />
        </label>
        <div className="select-wrapper">
          <p>calendar</p>
          <div className="input-wrapper date-input">
            <input id="myInput" type="date" />
            <label htmlFor="myInput">
              <span className="place-holder">Date</span>
            </label>
            <button onClick={handlePreventDefault} className="btn calendar-btn">
              <Calendar />
            </button>
          </div>
        </div>
        <label htmlFor="phoneNumber" className="select-wrapper">
          Phone Number
          <input
            type="number"
            name="phoneNumber"
            id="username"
            className="input-wrapper"
            placeholder="phone number"
          />
        </label>
        <div className="select-wrapper">
          <p>status</p>
          <div className="input-wrapper">
            <input type="text" name="status" placeholder="status" />
            <button onClick={handlePreventDefault} className="btn text-btn">
              <Chevron />
            </button>
          </div>
        </div>
        <div className="btn-wrapper">
          <button onClick={handlePreventDefault}>reset</button>
          <button onClick={handlePreventDefault}>filter</button>
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
