describe('Login', () => {
  it('permite al usuario iniciar sesión y acceder a la aplicación', () => {
    cy.visit('/login')

    cy.get('[data-cy=login-email]').type('eve.holt@reqres.in')
    cy.get('[data-cy=login-password]').type('cityslicka')
    cy.get('[data-cy=login-btn]').click()

    // Debe redirigir al Home después del login
    cy.url().should('not.include', '/login')
    cy.contains('Gestión de Usuarios')
  })

  it('muestra error con credenciales inválidas', () => {
    cy.visit('/login')

    cy.get('[data-cy=login-email]').type('invalid@test.com')
    cy.get('[data-cy=login-password]').type('wrong')
    cy.get('[data-cy=login-btn]').click()

    cy.get('[data-cy=login-error]').should('be.visible')
  })

  it('redirige a login si no está autenticado', () => {
    cy.clearLocalStorage()
    cy.visit('/')
    cy.url().should('include', '/login')
  })
})
