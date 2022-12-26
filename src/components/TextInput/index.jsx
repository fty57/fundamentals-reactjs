import "./styles.css";
export const TextInput = ({ actionFn, handleChange }) => {
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
