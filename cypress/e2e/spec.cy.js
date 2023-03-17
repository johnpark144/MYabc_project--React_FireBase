/* eslint-disable cypress/no-unnecessary-waiting */
describe("E2E Test", () => {
  it("Create and Delete both a Day and word from Memorize and video", () => {
    // Login
    cy.viewport(1500, 880);
    cy.visit("http://localhost:3000/");
    cy.findByPlaceholderText(/.*Email.*/i).type("test123@gmail.com");
    cy.findByPlaceholderText(/.*Password.*/i).type("test123");
    cy.findByText(/.*Sign in.*/i).click();
    cy.wait(1000);

    // Create a Day
    cy.visit("http://localhost:3000/memorize");
    cy.findByRole("button", {
      name: /.*add day.*/i,
    }).click();
    cy.findByRole("button", {
      name: /.*confirm.*/i,
    }).click();
    cy.findByText(/day 1/i).should("exist");

    // Enter the Day 1 and Create a word
    cy.findByRole("link", {
      name: /.*day 1.*/i,
    }).click();
    cy.findByRole("button", {
      name: /.*create word.*/i,
    }).click();

    cy.findByRole("combobox").select("1");
    cy.findByPlaceholderText(/.*사과.*/i).type("사과");
    cy.findByPlaceholderText(/.*Apple.*/i).type("Apple");
    cy.findByRole("button", {
      name: /.*create.*/i,
    }).click();

    // Check if the word that I just created exist
    cy.findByText(/.*사과.*/i).should("exist");
    cy.findByText(/.*Apple.*/i).should("exist");

    // Delete the word that I created
    cy.findByRole("button", {
      name: /x/i,
    }).click();
    cy.wait(2000);
    cy.findByRole("button", {
      name: /.*delete*/i,
    }).click();

    // Create a word from Video
    cy.visit("http://localhost:3000/video");
    cy.findByRole("button", {
      name: /.*See create.*/i,
    }).click();

    cy.findByRole("combobox").select("1");
    cy.findByPlaceholderText(/.*사과.*/i).type("비디오");
    cy.findByPlaceholderText(/.*Apple.*/i).type("Video");
    cy.findByTestId("createBtn").click();
    cy.wait(3000);

    // Check if the word that I just created exist
    cy.visit("http://localhost:3000/memorize/1");
    cy.wait(3000);
    cy.findByText(/.*비디오.*/i).should("exist");

    // Delete the word that I created
    cy.findByRole("button", {
      name: /x/i,
    }).click();
    cy.wait(2000);
    cy.findByRole("button", {
      name: /.*delete*/i,
    }).click();

    // Delete the day
    cy.findByText(/.*arrow_back_ios.*/i).click();
    cy.findByRole("button", {
      name: /.*delete day.*/i,
    }).click();
    cy.wait(4000);
    cy.findByTestId("deleteBtn").click();

    // Logout
    cy.findByText(/log out/i).click();
  });
});
