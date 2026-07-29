describe('Teste de Navegação no E-commerce', () => {

  it('Deve abrir o site do e-commerce e validar o carregamento', () => {
    // Abre um site de e-commerce real de testes
    cy.visit('https://saucedemo.com');
    
    // O robô preenche o usuário sozinho
    cy.get('[data-test="username"]').type('standard_user');
    
    // O robô preenche a senha sozinha
    cy.get('[data-test="password"]').type('secret_sauce');
    
    // O robô clica no botão de entrar
    cy.get('[data-test="login-button"]').click();
    
    // Valida se entramos na página de produtos com sucesso
    cy.get('.title').should('contain', 'Products');
  });

});
