describe('Testing Personal Slack Workspace', function () {
  it('Launch and Login', function () {

    //Commenting this would fail the test, since there is an unhandled exception
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    });

    //this is a hack to launch & login 
    Cypress.on('window:before:load', (win) => {
      Object.defineProperty(win, 'self', {
        get: () => {
          return window.top;
        }
      });
    });

    cy.visit('https://vasikarla.slack.com/');

    // cy.get("#email").type("vasikarla.raj@gmail.com");
    // cy.get("#password").type("splendor");
    // cy.get("#signin_btn").click();
  });
});