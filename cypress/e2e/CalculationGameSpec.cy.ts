describe('Calculation game test', () => {
  it('passes the basic calculation workflow', () => {
    
    const numbersToEnter = ['1', '1', '1', '3'];
    cy.visit('http://localhost:3000');
    cy.get('.number-box:has(label:contains("Enter sum"))').contains('Enter sum')
    let counter = 0;

    numbersToEnter.forEach(number => {
      counter++;
      cy.get('[data-testid="content-input"]')
      .click()
      .type(number)
      .should('be.disabled')
    cy.get('[data-test="previous-calculations"]').children().should('have.length', counter)
    });  
  })
})