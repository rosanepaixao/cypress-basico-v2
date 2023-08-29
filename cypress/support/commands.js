Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    const longText = 'Nem todas as tempestades vêm para atrapalhar a sua vida. Algumas vêm para limpar seu caminho.'
    cy.get('#firstName').type('Rosane')
    cy.get('#lastName').type('Paixao')
    cy.get('#email').type('rosane@exemplo.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})