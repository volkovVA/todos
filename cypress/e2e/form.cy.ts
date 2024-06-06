describe('Form Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should add a new todo', () => {
    cy.get('input').type('New Todo');
    cy.get('[data-testid=add-task]').click();
    cy.contains('li', 'New Todo').should('exist');
  });

  it('should clear input after adding a todo', () => {
    cy.get('input').type('New Todo');
    cy.get('[data-testid=add-task]').click();
    cy.get('input').should('have.value', '');
  });

  it('should not add an empty todo', () => {
    cy.get('[data-testid=add-task]').click();
    cy.get('li').should('have.length', 0);
  });
});
