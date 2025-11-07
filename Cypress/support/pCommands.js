Cypress.Commands.add('registroDeUsuario',()=>{
    cy.log('Ingresando nombres, apellidos, celular y dni')
    cy.get('[data-cy="input-nombres"]').clear().type('Juan')
    cy.get('[data-cy="input-apellido"]').clear().type('Pérez')
    cy.get('[data-cy="input-telefono"]').clear().type('3511234567')
    cy.get('[data-cy="input-dni"]').clear().type('20268800')

    cy.log('Seleccionar provincia y localidad')
    cy.get('[data-cy="select-provincia"]').clear().type('Córdoba')
    cy.get('ul > li > span').contains('Córdoba').click()
    cy.get('[data-cy="select-localidad"]').clear().type('Córdoba')
    cy.get('ul > li > span').contains('Córdoba').click()


    cy.log('Ingresando fecha de nacimiento')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="day"]').clear().type('15')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="month"]').clear().type('08')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="year"]').clear().type('1995')


    cy.log('Ingresando mail y confirmación')
    cy.get('[data-cy="input-email"]').clear().type('juan.perez90@example.com')
    cy.get('[data-cy="input-confirmar-email"]').clear().type('juan.perez90@example.com')

    cy.log('Ingresando contraseña y confirmación')
    cy.get('[data-cy="input-password"]').clear().type('P@ssw0rd123')
    cy.get('[data-cy="input-repetir-password"]').clear().type('P@ssw0rd123')


    cy.log('Enviar formulario')
    // cy.get('[data-cy="btn-registrarse"]').click().wait(2000)
})

Cypress.Commands.add('regConEmailRep',()=>{
function generarDNIRandom() {
  const dni = Math.floor(Math.random() * 90000000) + 10000000;
  return dni.toString();
}

function generarTelefonoRandom() {
  const numeroTelefono = Math.floor(Math.random() * 9000000000) + 1000000000;
  return numeroTelefono.toString();
}

    const dniRandom = generarDNIRandom();
    const telefonoRandom = generarTelefonoRandom();
    cy.log(dniRandom)
    cy.log(telefonoRandom)
    cy.log('Ingresando nombres, apellidos, celular y dni')
    cy.get('[data-cy="input-nombres"]').clear().type('Juan')
    cy.get('[data-cy="input-apellido"]').clear().type('Pérez')
    cy.get('[data-cy="input-telefono"]').clear().type(telefonoRandom)
    cy.get('[data-cy="input-dni"]').clear().type(dniRandom)

    cy.log('Seleccionar provincia y localidad')
    cy.get('[data-cy="select-provincia"]').clear().type('Córdoba')
    cy.get('ul > li > span').contains('Córdoba').click()
    cy.get('[data-cy="select-localidad"]').clear().type('Córdoba')
    cy.get('ul > li > span').contains('Córdoba').click()


    cy.log('Ingresando fecha de nacimiento')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="day"]').clear().type('15')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="month"]').clear().type('08')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="year"]').clear().type('1995')


    cy.log('Ingresando mail y confirmación')
    cy.get('[data-cy="input-email"]').clear().type('juan.perez90@example.com')
    cy.get('[data-cy="input-confirmar-email"]').clear().type('juan.perez90@example.com')

    cy.log('Ingresando contraseña y confirmación')
    cy.get('[data-cy="input-password"]').clear().type('P@ssw0rd123')
    cy.get('[data-cy="input-repetir-password"]').clear().type('P@ssw0rd123')


    cy.log('Enviar formulario')
    cy.get('[data-cy="btn-registrarse"]').click()
    cy.get('p').contains('Ya existe un usuario registrado con ese correo electrónico').should('be.visible')

})

Cypress.Commands.add('regConDniRep',()=>{
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
    cy.log('Ingresando nombres, apellidos, celular y dni')
    cy.get('[data-cy="input-nombres"]').clear().type('Juan')
    cy.get('[data-cy="input-apellido"]').clear().type('Pérez')
    cy.get('[data-cy="input-telefono"]').clear().type(telefonoRandom)
    cy.get('[data-cy="input-dni"]').clear().type('20268800')

    cy.log('Seleccionar provincia y localidad')
    cy.get('[data-cy="select-provincia"]').clear().type('Córdoba')
    cy.get('ul > li > span').contains('Córdoba').click()
    cy.get('[data-cy="select-localidad"]').clear().type('Córdoba')
    cy.get('ul > li > span').contains('Córdoba').click()


    cy.log('Ingresando fecha de nacimiento')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="day"]').clear().type('15')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="month"]').clear().type('08')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="year"]').clear().type('1995')


    cy.log('Ingresando mail y confirmación')
    cy.get('[data-cy="input-email"]').clear().type(emailRandom)
    cy.get('[data-cy="input-confirmar-email"]').clear().type(emailRandom)

    cy.log('Ingresando contraseña y confirmación')
    cy.get('[data-cy="input-password"]').clear().type('P@ssw0rd123')
    cy.get('[data-cy="input-repetir-password"]').clear().type('P@ssw0rd123')


    cy.log('Enviar formulario')
    cy.get('[data-cy="btn-registrarse"]').click()
    cy.get('p').contains('Ya existe un usuario registrado con ese DNI').should('be.visible')

})    

Cypress.Commands.add('regRightPath',()=>{
function generarEmailRandom() {
  const tiempoActual = Date.now();
  return `test${tiempoActual}@gmail.com`;
}

function generarDNIRandom() {
  const dni = Math.floor(Math.random() * 90000000) + 10000000;
  return dni.toString();
}

function generarTelefonoRandom() {
  const numeroTelefono = Math.floor(Math.random() * 9000000000) + 1000000000;
  return numeroTelefono.toString();
}

    const emailRandom = generarEmailRandom();
    const telefonoRandom = generarTelefonoRandom();
    const dniRandom = generarDNIRandom();
    cy.log(emailRandom)
    cy.log(telefonoRandom)
    cy.log(dniRandom)
    cy.log('Ingresando nombres, apellidos, celular y dni')
    cy.get('[data-cy="input-nombres"]').clear().type('Juan')
    cy.get('[data-cy="input-apellido"]').clear().type('Pérez')
    cy.get('[data-cy="input-telefono"]').clear().type(telefonoRandom)
    cy.get('[data-cy="input-dni"]').clear().type(dniRandom)

    cy.log('Seleccionar provincia y localidad')
    cy.get('[data-cy="select-provincia"]').clear().type('Córdoba')
    cy.get('ul > li > span').contains('Córdoba').click()
    cy.get('[data-cy="select-localidad"]').clear().type('Córdoba')
    cy.get('ul > li > span').contains('Córdoba').click()


    cy.log('Ingresando fecha de nacimiento')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="day"]').clear().type('15')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="month"]').clear().type('08')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="year"]').clear().type('1995')


    cy.log('Ingresando mail y confirmación')
    cy.get('[data-cy="input-email"]').clear().type(emailRandom)
    cy.get('[data-cy="input-confirmar-email"]').clear().type(emailRandom)

    cy.log('Ingresando contraseña y confirmación')
    cy.get('[data-cy="input-password"]').clear().type('P@ssw0rd123')
    cy.get('[data-cy="input-repetir-password"]').clear().type('P@ssw0rd123')


    cy.log('Enviar formulario')
    cy.get('[data-cy="btn-registrarse"]').click().wait(2000)
    cy.url().should('eq', 'https://ticketazo.com.ar/auth/login')
    
})