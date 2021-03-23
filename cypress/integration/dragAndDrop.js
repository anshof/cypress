describe("drag and drop", () => {
  it("drag and drop", () => {
    cy.visit("https://www.seleniumeasy.com/test/drag-and-drop-demo.html");

    cy.get("#todrag>span:nth-child(2)").drag("#mydropzone");
  });
});
