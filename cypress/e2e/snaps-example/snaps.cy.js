
describe('Login', () => {
  it('should be publicly accessible', () => {
    cy.visit('https://www.google.ru/')

    // snapshot name will be the test title
    cy.compareSnapshot('home-page')

    // // snapshot name will be the name passed in
    // cy.matchImageSnapshot('login');
    //
    // // options object passed in
    // cy.matchImageSnapshot(options);
    //
    // // match element snapshot
    // cy.get('#login').matchImageSnapshot();
  });
});
