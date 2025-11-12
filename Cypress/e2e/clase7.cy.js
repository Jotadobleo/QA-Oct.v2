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


describe('Clase 7', ()=>{
     beforeEach(()=>{
        
        cy.visit('https://ticketazo.com.ar/auth/registerUser')
    })
    it('Registro con Fixtures',()=>{
        const emailRandom = generarEmailRandom();  
        const telefonoRandom = generarTelefonoRandom();
        const dniRandom = generarDNIRandom();  
        cy.log(emailRandom)
        cy.log(telefonoRandom)
        cy.log(dniRandom)
        
        cy.fixture('signUpOk').then((data)=>{
            cy.get('[data-cy="input-nombres"]').type(data.nombres)
            cy.get('[data-cy="input-apellido"]').type(data.apellido)
            cy.get('[data-cy="input-telefono"]').type(telefonoRandom)
            cy.get('[data-cy="input-dni"]').type(dniRandom)
            cy.get('[data-cy="select-provincia"]').type(data.provincia)
             cy.get('span').contains(data.provincia).click()
            cy.get('[data-cy="select-localidad"]').type(data.localidad)
             cy.get('span').contains(data.localidad).click()
            cy.get('[data-type="day"]').type(data.fechaNacimiento.day)
            cy.get('[data-type="month"]').type(data.fechaNacimiento.month)
            cy.get('[data-type="year"]').type(data.fechaNacimiento.year)
            cy.get('[data-cy="input-email"]').type(emailRandom)
            cy.get('[data-cy="input-confirmar-email"]').type(emailRandom)
            cy.get('[data-cy="input-password"]').type(data.password)
            cy.get('[data-cy="input-repetir-password"]').type(data.password)

             cy.log('Enviar formulario')
             cy.get('[data-cy="btn-registrarse"]').click().wait(2000)
             cy.url().should('eq', 'https://ticketazo.com.ar/auth/login')
             
        })

        
    })
} )