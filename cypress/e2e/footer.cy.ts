describe('Footer component', () => {
  beforeEach(() => {
    cy.visit('/');

    Cypress._.times(3, (i) => {
      cy.get('input').eq(0).type(`Задача ${i + 1}{enter}`);
      cy.get('[data-testid=add]').click();
    });
  });

  it('should displayed remaining todos count', () => {
    cy.get('[data-testid="remaining-todos"]').should('have.text', '3 items left');
  });

  it('should filter todos by "Active"', () => {
    cy.contains('Active').click();
    cy.get('[data-testid="remaining-todos"]').should('have.text', '3 items left');

  });

  it('should filter todos by "Completed"', () => {
    cy.get('input[type="checkbox"]').eq(0).click();
    cy.contains('Completed').click();
    cy.get('[data-testid="remaining-todos"]').should('have.text', '2 items left');

  });

  it('should clear completed todos', () => {
    cy.get('input[type="checkbox"]').eq(0).click();
    cy.get('input[type="checkbox"]').eq(1).click();
    cy.contains('Clear completed').click();
    cy.get('[data-testid="remaining-todos"]').should('have.text', '1 item left');
  });
});