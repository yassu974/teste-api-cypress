/// <reference types= "cypress"/>

describe('Teste de API em Produtos', () => {
    it('Listar produtos - GET', () => {
        cy.request({
            method: 'GET',
            url: 'produtos'
        }).should((response) => {
            expect(response.status).equal(200)
            expect(response.body).to.have.property('produtos')
        })        
    });

    it.only('Cadastrar produto - POST', () => {
        let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFub0BxYS5jb20iLCJwYXNzd29yZCI6InRlc3RlIiwiaWF0IjoxNzQ3MDcxNzI4LCJleHAiOjE3NDcwNzIzMjh9.4ryImwVNq2up_QkX2qaP1QzycwQyW-CDg3sIP_0fH1g"
        cy.request({
            method: 'POST',
            url: 'produtos',
            headers: {authorization: token},
            body: {
                "nome": "Cabo USB 002",
                "preco": 15,
                "descricao": "Caso USB do tipo C",
                "quantidade": 100
              }
        }).should((response) => {
            expect(response.status).equal(201)
            expect(response.body.message).equal('Cadastro realizado com sucesso')
        })

    });
})