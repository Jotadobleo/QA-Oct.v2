
describe('Formulario de Registro', () => {
  beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser') 
  })


  it('Completa todos los campos y presiona Registrar (código base)', () => {
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

  it('Registro fallido por contraseña inválida', () => {
    cy.regPassDudosa()
    // Facu como me hizo renegar esta cosa (el git y el push, y el merge y 37 errores)
  })
  
})