describe('Tela de Login', () => {
  context('URL de Login', () => {
    it('Deve acessar a URL "/login" e carregar o card', () => {
      cy.visit('/login').get('[data-cy="login-card"]');
    });
  });

  context('Inputs e Avisos de campo vazio', () => {
    it('Deve clicar no botao "Entrar" sem preencher os campos e exibir os avisos', () => {
      cy.get('[data-cy="entrar-btn"]').click();
      cy.get('[data-cy="aviso-usuario"]').contains('Digite seu Email');
      cy.get('[data-cy="aviso-senha"]').contains('Digite sua Senha');
    });
    it('Deve preencher somente o campo de Usuario e imprimir apenas o aviso de Senha', () => {
      cy.get('[data-cy="input-usuario"]').type('usuario@usuario.com');
      cy.get('[data-cy="entrar-btn"]').click();
      cy.get('[data-cy="aviso-usuario"]').should('be.empty');
      cy.get('[data-cy="aviso-senha"]').contains('Digite sua Senha');
    });
    it('Deve preencher somente o campo de Senha e imprimir apenas o aviso de Usuario', () => {
      cy.get('[data-cy="input-usuario"]').clear();
      cy.get('[data-cy="input-senha"]').type('123456');
      cy.get('[data-cy="entrar-btn"]').click();
      cy.get('[data-cy="aviso-senha"]').should('be.empty');
      cy.get('[data-cy="aviso-usuario"]').contains('Digite seu Email');
    });
    it('Deve preencher os campos Usuario e Senha e nao imprimir avisos', () => {
      cy.get('[data-cy="input-usuario"]').type('usuario@usuario.com');
      cy.get('[data-cy="entrar-btn"]').click();
      cy.get('[data-cy="aviso-usuario"]').should('be.empty');
      cy.get('[data-cy="aviso-senha"]').should('be.empty');
    });
  });

  context('Submit Form', () => {
    it('Deve verificar se os dados do input estao sendo guardados corretamente no objeto do console log apos clicar no Botao', () => {
      const usuario = { username: 'usuario@usuario.com', password: '123456' };
      cy.visit('/login', {
        onBeforeLoad(win) {
          cy.stub(win.console, 'log').as('consoleLog');
        },
      });
      cy.get('[data-cy="input-usuario"]').type(usuario.username);
      cy.get('[data-cy="input-senha"]').type(usuario.password);
      cy.get('[data-cy="entrar-btn"]').click();
      cy.get('@consoleLog').should('be.calledWith', usuario);
    });
  });
});
