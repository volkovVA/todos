describe('Header component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should toggle theme between light and dark mode', () => {
    cy.get('[data-testid="toggle"]').click();
    cy.get('body').should('have.css', 'background-color', 'rgb(18, 18, 18)');
  });

  it('should toggle sorting order', () => {
    cy.get('[data-testid="toggle-sort"]').click();
    cy.get('[data-testid="ArrowUpwardIcon"]').should('exist');
  });
});