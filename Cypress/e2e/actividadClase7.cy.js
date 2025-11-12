describe('Actividad clase 7', ()=>{
     beforeEach(()=>{
          cy.visit('https://ticketazo.com.ar/auth/registerClient')
    })
    it('Registro de Cliente con Fixtures',()=>{
     cy.registroDeOrg() // La magia nace de "fixtures/sUpOrOk" + "support/pCommands2"

    })

    })