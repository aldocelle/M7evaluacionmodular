describe('Gestión de Usuarios', () => {
  beforeEach(() => {
    // Login antes de cada test
    cy.visit('/login')
    cy.get('[data-cy=login-email]').type('eve.holt@reqres.in')
    cy.get('[data-cy=login-password]').type('cityslicka')
    cy.get('[data-cy=login-btn]').click()
    cy.contains('Gestión de Usuarios')
  })

  it('muestra la lista de usuarios cargados desde la API', () => {
    cy.get('[data-cy=user-item]').should('have.length.greaterThan', 0)
  })

  it('permite agregar un nuevo usuario y verlo en la lista', () => {
    cy.get('#name').type('Carlos Test')
    cy.get('#email').type('carlos@test.com')
    cy.get('[data-cy=submit-btn]').click()

    // El nuevo usuario debe aparecer en la lista
    cy.contains('Carlos Test')
  })

  it('permite cerrar sesión', () => {
    cy.get('[data-cy=logout-btn]').click()
    cy.url().should('include', '/login')
  })
})
