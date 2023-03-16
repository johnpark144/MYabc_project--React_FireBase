import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./../App";
import Auth from "./../routes/Auth";

const user = userEvent.setup();
describe("Auth Test", () => {
  test("Regular Login and logout test", async () => {
    render(<App />);
    // Sign in
    const emailInput = screen.getByPlaceholderText(/.*Email.*/i);
    const passwordInput = screen.getByPlaceholderText(/.*Password.*/i);
    const signInButton = screen.getByText(/.*Sign in.*/i);

    await user.type(emailInput, "test123@gmail.com");
    await user.type(passwordInput, "test123");
    await user.click(signInButton);

    // Check If you see the "Logout" in navbar for login-user
    const logOutButton = await screen.findByText(/.*Log Out.*/i);
    await user.click(logOutButton);

    // Check If logged out completely
    expect(screen.getByText(/.*Sign in.*/i)).toBeInTheDocument();
  });

  test("Signup test with already-created-Email", async () => {
    render(<Auth />);
    // Toggle to Sign-up mode
    const toggleButton = screen.getByText(/.*Account.*/i);
    await user.click(toggleButton);

    // Try to sign up with email that already exist
    const emailInput = screen.getByPlaceholderText(/.*Email.*/i);
    const passwordInput = screen.getByPlaceholderText(/.*Password.*/i);
    await user.type(emailInput, "test123@gmail.com");
    await user.type(passwordInput, "test123");
    await user.click(screen.getByText(/.*Account.*/i));

    // sign-up-function works if 'already' error message comes out.
    const errorMsg = await screen.findByText(/.*already.*/i);
    expect(errorMsg).toBeInTheDocument();
  });
});
