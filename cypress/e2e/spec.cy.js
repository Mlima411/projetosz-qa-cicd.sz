describe('Fluxo de Compras - Ecommerce', () => {
  beforeEach(() => {
    // Visita o site de testes de e-commerce (SauceDemo)
    cy.visit('https://www.saucedemo.com/')
  })

  it('Deve realizar o login e adicionar um produto ao carrinho com sucesso', () => {
    // 1. Fazer Login
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // 2. Valida se entrou na página de produtos
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('have.text', 'Products')

    // 3. Adicionar o primeiro produto ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    // 4. Validar que o contador do carrinho subiu para 1
    cy.get('.shopping_cart_badge').should('have.text', '1')

    // 5. Entrar no carrinho e verificar se o produto está lá
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart.html')
    cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack')
  })
})