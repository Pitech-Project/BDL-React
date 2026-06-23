import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button", () => {
  it("renders button text", () => {
    render(<Button onClick={() => {}}>Save</Button>);

    expect(
      screen.getByRole("button", { name: /save/i })
    ).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const handleClick = jest.fn();

    render(
      <Button onClick={handleClick}>
        Save
      </Button>
    );

    await userEvent.click(
      screen.getByRole("button", { name: /save/i })
    );

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});