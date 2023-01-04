import { TextInput } from ".";
import { fireEvent, render, screen } from "@testing-library/react";

describe("<TextInput />", () => {
  it("should have a value of searchValue", () => {
    const fn = jest.fn();
    render(<TextInput actionFn={fn} handleChange={"testando"} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input.value).toBe("testando");
  });

  it("should call handleChange function on each key pressed", () => {
    const fn = jest.fn();
    render(<TextInput handleChange={"testando"} />);

    const input = screen.getByPlaceholderText(/type your search/i);

    const value = "o valor";
  });

  it("should match snapshot", () => {
    const { container } = render(<TextInput handleChange={"testando"} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
