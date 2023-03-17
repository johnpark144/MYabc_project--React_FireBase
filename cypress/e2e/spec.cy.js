describe("My First Test", () => {
  beforeEach(() => {
    cy.viewport(1500, 880);
  });

  it("login", async () => {
    cy.viewport(1500, 880);
    cy.visit("http://localhost:3000/");
    cy.findByPlaceholderText(/.*Email.*/i).type("test123@gmail.com");
    cy.findByPlaceholderText(/.*Password.*/i).type("test123");
    cy.findByText(/.*Sign in.*/i).click();
  });

  it("Memorize Test (Create Day, word and Delete them)", async () => {
    cy.visit("http://localhost:3000/memorize");
    cy.findByRole("button", {
      name: /.*add day.*/i,
    }).click();
    cy.findByRole("button", {
      name: /.*confirm.*/i,
    }).click();

    cy.findByText(/day 1/i).should("exist");
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

    cy.findByText(/.*사과.*/i).should("exist");
    cy.findByText(/.*Apple.*/i).should("exist");

    cy.findByRole("button", {
      name: /x/i,
    }).click();

    cy.wait(2000);

    cy.findByRole("button", {
      name: /.*delete*/i,
    }).click();

    cy.findByText(/.*arrow_back_ios.*/i).click();

    cy.findByRole("button", {
      name: /.*delete day.*/i,
    }).click();

    cy.wait(2000);

    cy.findByTestId("deleteBtn").click();
  });
});
