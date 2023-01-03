import { fireEvent, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Button } from ".";

describe("<Button />", () => {
  // você deve testar o que você quer que aconteça
  it("should render the button with the text 'Load more'", () => {
    render(<Button text="Load more" />);
    // query não levanta um erro, quando um elemento não está na tela
    // get quando sabe-se que o elemento está na tela
    // expect.assertions(1); conferir quantos expects foram passados
    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it("should call function on button click", () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);

    const button = screen.getByRole("button", { name: /load more/i });

    fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when disabled is true", () => {
    render(<Button text="Load more" disabled={true} />);

    const button = screen.getByRole("button", { name: /load more/i });

    expect(button).toBeDisabled();
  });

  it("should be enabled when disabled is false", () => {
    render(<Button text="Load more" disabled={false} />);

    const button = screen.getByRole("button", { name: /load more/i });

    expect(button).toEnabled();
  });
});
