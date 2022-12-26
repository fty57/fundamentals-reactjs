import "./styles.css";
export const TextInput = ({ actionFn, handleChange }) => {
  // https://pt-br.reactjs.org/docs/handling-events.html
  // https://pt-br.reactjs.org/docs/events.html#form-events
  return (
    <input
      onChange={actionFn}
      value={handleChange}
      type="search"
      className="text-input"
      placeholder="Type your search"
    />
  );
};
