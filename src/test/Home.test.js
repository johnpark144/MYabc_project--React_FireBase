import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./../App";
import { loginFunction } from "./auto/login";

test.skip("Home -- Go Button to navigate", async () => {
  const user = userEvent.setup();
  render(<App />);
  // Login to access home
  loginFunction();

  // If you see '박영환', log-in completed
  const WebsiteMaker = await screen.findByText(/.*박영환.*/i);
  expect(WebsiteMaker).toBeInTheDocument();

  // Check all contents exist
  const memoH1 = screen.getByRole("heading", { name: /MEMORIZE/ });
  expect(memoH1).toBeVisible();
  expect(screen.getByRole("heading", { name: /DICTIONARY/ })).toBeVisible();
  expect(screen.getByRole("heading", { name: /VIDEO/ })).toBeVisible();
  expect(screen.getByRole("heading", { name: /GRAMMARLY/ })).toBeVisible();

  // Check if all Go-Button works to Navigate
  // Go to Memorize section and return
  await user.click(screen.getAllByRole("button", { name: "GO" })[0]);
  expect(memoH1).not.toBeVisible();
  await user.click(screen.getByText(/.*abc.*/i));
  expect(screen.getByRole("heading", { name: /MEMORIZE/ })).toBeVisible();

  // Go to Dictionary section and return
  await user.click(screen.getAllByRole("button", { name: "GO" })[1]);
  expect(screen.getByRole("button", { name: "search" })).toBeVisible();
  await user.click(screen.getByText(/.*abc.*/i));

  // Go to Video section and return
  await user.click(screen.getAllByRole("button", { name: "GO" })[2]);
  expect(screen.getByRole("button", { name: /.*Create.*/i })).toBeVisible();
  await user.click(screen.getByText(/.*abc.*/i));

  // Go to Grammarly section and return
  await user.click(screen.getAllByRole("button", { name: "GO" })[3]);
  expect(screen.getByText(/.*John park.*/i)).toBeVisible();
  await user.click(screen.getByText(/.*abc.*/i));
});
