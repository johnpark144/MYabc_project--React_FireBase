import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { loginFunction } from "./auto/login";
import App from "./../App";

describe("Memorize Test", () => {
  test("Add Day and Delete Day", async () => {
    const user = userEvent.setup();
    render(<App />);
    loginFunction();

    const memorizeLink = screen.getByRole("link ", { name: /.*Memorize.*/i });
    await user.click(memorizeLink);
  });
});
