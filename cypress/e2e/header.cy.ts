describe('Header component', () => {
  beforeEach(() => {
    cy.visit('/');

    Cypress._.times(3, (i) => {
      cy.get('input').eq(0).type(`Задача ${i + 1}{enter}`);
      cy.get('[data-testid=add-task]').click();
    });
  });

  it('should toggle theme between light and dark mode', () => {
    cy.get('[data-testid="toggle-theme"]').click();
    cy.get('body').should('have.css', 'background-color', 'rgb(18, 18, 18)');
  });

  it('should toggle sorting order', () => {
    cy.get('[data-testid="toggle-sort"]').click();
    cy.get('[data-testid="ArrowUpwardIcon"]').should('exist');
    cy.get('ul').children('li').first().should('contain', 'Задача 3');
  });
});