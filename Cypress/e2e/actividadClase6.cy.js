
describe('Formulario de Registro', () => {
  beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser') 
  })

  
  it('Completa todos los campos y presiona Registrar', () => {
    cy.registroDeUsuario()
  })


  it('Email ya registrado', () => {
    cy.regConEmailRep()
  })


  it('Dni ya registrado', () => {
    cy.regConDniRep()
  })


  it('Registro exitoso y listo para ingresar', () => {
    cy.regRightPath()
  })
})