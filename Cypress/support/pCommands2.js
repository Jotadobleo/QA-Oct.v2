Cypress.Commands.add('registroDeOrg',()=>{
function generarEmailRandom() {
  const tiempoActual = Date.now();
  return `test${tiempoActual}@gmail.com`;
}

function generarTelefonoRandom() {
  const numeroTelefono = Math.floor(Math.random() * 9000000000) + 1000000000;
  return numeroTelefono.toString();
}
 const emailRandom = generarEmailRandom();  
 const telefonoRandom = generarTelefonoRandom();
 cy.log(emailRandom)
 cy.log(telefonoRandom)

  cy.fixture('sUpOrOk').then((data)=>{
    cy.get('[data-cy="input-razon-social"]').type(data.razonSocial)
    cy.get('[data-cy="input-cuit"]').type(data.cuit)
    cy.get('[data-cy="select-provincia"]').type(data.provincia)
    cy.get('span').contains(data.provincia).click()
    cy.get('[data-cy="select-localidad"]').type(data.localidad)
    cy.get('span').contains(data.localidad).click()
    cy.get('[data-cy="input-direccion"]').type(data.dirección)
    cy.get('[data-cy="input-telefono"]').type(telefonoRandom)
    cy.get('[data-cy="input-email"]').type(emailRandom)
    cy.get('[data-cy="input-confirmar-email"]').type(emailRandom)
    cy.get('[data-cy="input-password"]').type(data.contraseña)
    cy.get('[data-cy="input-repetir-password"]').type(data.contraseña)

    cy.log('Enviar formulario')
    cy.get('[data-cy="btn-registrarse"]').click().wait(2000)
    cy.url().should('eq', 'https://ticketazo.com.ar/auth/login')
  } )
} )