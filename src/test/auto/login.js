import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

export const loginFunction = () => {
  const emailInput = screen.getByPlaceholderText(/.*Email.*/i);
  const passwordInput = screen.getByPlaceholderText(/.*Password.*/i);
  const signInButton = screen.getByText(/.*Sign in.*/i);
  fireEvent.change(emailInput, { target: { value: "test123@gmail.com" } });
  fireEvent.input(passwordInput, { target: { value: "test123" } });
  fireEvent.click(signInButton);
};
