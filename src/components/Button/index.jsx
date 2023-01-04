import P from "prop-types";
import { Component, React } from "react";
import "./styles.css";

export class Button extends Component {
  render() {
    const { text, onClick, disabled = false } = this.props;
    return (
      <div>
        <button disabled={disabled} onClick={onClick} className="button">
          {text}
        </button>
      </div>
    );
  }
}

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
