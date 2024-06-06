describe('Theme testing', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should has the correct initial theme', () => {
    cy.get('body').should('not.have.css', 'background-color', 'rgb(18, 18, 18)');
  });

  it('should changes the theme when the toggle is clicked', () => {
    cy.get('[data-testid=toggle-theme]').click();
    cy.get('body').should('have.css', 'background-color', 'rgb(18, 18, 18)');
  });

  it('should save the theme in localStorage', () => {
    cy.get('[data-testid=toggle-theme]').click();
    cy.reload();
    cy.get('body').should('have.css', 'background-color', 'rgb(18, 18, 18)');
  });

  it('should restore the theme from localStorage', () => {
    cy.window().then((win) => {
      win.localStorage.setItem('theme', 'true');
    });
    cy.get('body').should('have.css', 'background-color', 'rgb(18, 18, 18)');
  });
});
