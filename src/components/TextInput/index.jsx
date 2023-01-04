import "./styles.css";
import P from "prop-types";
import { React } from "react";
export const TextInput = ({ searchValue, handleChange }) => {
  // https://pt-br.reactjs.org/docs/handling-events.html
  // https://pt-br.reactjs.org/docs/events.html#form-events
  return (
    <input
      onChange={handleChange}
      value={searchValue}
      type="search"
      className="text-input"
      placeholder="Type your search"
    />
  );
};

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
