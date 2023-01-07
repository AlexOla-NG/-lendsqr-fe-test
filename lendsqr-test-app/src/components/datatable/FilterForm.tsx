import React, { useRef } from "react";
import { handlePreventDefault } from "../shared/preventDefault";
import { ReactComponent as Chevron } from "../../assets/images/chevron.svg";
import { ReactComponent as Calendar } from "../../assets/images/calendar.svg";

// TODO: stopped here
// style filterform

const FilterForm = () => {
  const dateRef = useRef<HTMLInputElement | null>(null);

  const handleFocus = () => {
    if (dateRef.current) {
      dateRef.current.type = "date";
    }
  };

  const handleBlur = () => {
    if (dateRef.current) {
      if (dateRef.current.value === "") {
        dateRef.current.type = "text";
      }
    }
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
            <input
              type="text"
              ref={dateRef}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="date"
            />
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
            <input type="text" name="status" placeholder="select" />
            <button onClick={handlePreventDefault} className="btn text-btn">
              <Chevron />
            </button>
          </div>
        </div>
        <div className="btn-wrapper">
          <button className="btn" onClick={handlePreventDefault}>
            reset
          </button>
          <button className="btn" onClick={handlePreventDefault}>
            filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
