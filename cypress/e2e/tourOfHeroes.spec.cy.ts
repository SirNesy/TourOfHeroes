describe('Tours of heroes', () => {
  it('should visit tours of heroes home page', () => {
    cy.visit('/');
  });
  it('should open heroes page', () => {
    cy.get('a[href="/heroes"]').click();
  });
});
