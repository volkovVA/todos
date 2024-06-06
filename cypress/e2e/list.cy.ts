describe('Item and List components', () => {
  beforeEach(() => {
    cy.visit('/');

    Cypress._.times(3, (i) => {
      cy.get('input').eq(0).type(`Задача ${i + 1}{enter}`);
      cy.get('[data-testid=add-task]').click();
    });
  });

  it('should toggle completion status of a todo', () => {
    cy.get('input[type="checkbox"]').eq(0).click();
    cy.contains('Задача 1')
      .parent()
      .should('have.css', 'text-decoration', 'line-through solid rgb(128, 128, 128)')
      .and('have.css', 'color', 'rgb(128, 128, 128)');

  });

  it('should remove a todo', () => {
    cy.contains('Задача 1').parents('li').find('button[aria-label="delete"]').click();
    cy.contains('Задача 1').should('not.exist');
  });
});