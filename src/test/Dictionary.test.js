import { getByText, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { loginFunction } from "./auto/login";
import App from "../App";

describe("Dictionary Test", () => {
  test("Dictionary", async () => {
    const user = userEvent.setup();
    render(<App />);
    // Login to access home
    loginFunction();

    // Move to dictionary
    const dictionary = await screen.findByText("Dictionary");
    await user.click(dictionary);

    // Before searched, audiofile doesn't exist
    let audio = screen.queryByTestId("eng_audio");
    expect(audio).not.toBeInTheDocument();

    // Textbox is empty
    const textBox = screen.getByRole("textbox");
    expect(textBox).toHaveTextContent("");

    // Type "hello" in the Textbox and search
    await user.type(textBox, "hello");
    await user.click(screen.getByRole("button", { name: "search" }));

    // search results come out
    audio = await screen.findByTestId("eng_audio");
    const noun = await screen.findByText("noun");
    expect(audio).toBeInTheDocument();
    expect(noun).toBeInTheDocument();
  });
});
