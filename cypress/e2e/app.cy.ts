describe('App Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load todos from localStorage', () => {
    cy.window().then((win) => {
      win.localStorage.setItem('todos', JSON.stringify([
        { id: 1, text: 'Задача 1', completed: false },
        { id: 2, text: 'Задача 2', completed: true },
      ]));
    });
    cy.reload();
    cy.contains('li', 'Задача 1').should('exist');
    cy.contains('li', 'Задача 2').should('exist');
  });
});