describe('Tela de Redefinir Senha', () => {
  context('URL de Login', () => {
    it('Deve acessar a URL "/login" e carregar o card', () => {
      cy.visit('/login').get('[data-cy="login-card"]');
    });
    it('Deve acessar o link de "Redefinir senha"', () => {
      cy.get('[data-cy="redefinir-senha-link"]').click();
    });
  });

  context('Inputs e Avisos de campo vazio', () => {
    it('Deve clicar no botao "Redefinir" sem preencher o campo e exibir o aviso', () => {
      cy.get('[data-cy="redefinir-senha-btn"]').click();
      cy.get('[data-cy="redefinir-usuario-aviso"]').contains(
        'Digite seu Email'
      );
    });
    it('Deve preencher o campo "Usuario" e nao imprimir aviso', () => {
      cy.get('[data-cy="redefinir-usuario-input"]').type('usuario@usuario.com');
      cy.get('[data-cy="redefinir-senha-btn"]').click();
      cy.get('[data-cy="redefinir-usuario-aviso"]').should('be.empty');
    });
  });

  context('Submit Form', () => {
    it('Deve verificar se os dados do input estao sendo guardados corretamente no objeto do console log apos clicar no Botao', () => {
      const usuario = { username: 'usuario@usuario.com' };
      cy.visit('/login', {
        onBeforeLoad(win) {
          cy.stub(win.console, 'log').as('consoleLog');
        },
      });
      cy.get('[data-cy="redefinir-senha-link"]').click();
      cy.get('[data-cy="redefinir-usuario-input"]').type(usuario.username);
      cy.get('[data-cy="redefinir-senha-btn"]').click();
      cy.get('@consoleLog').should('be.calledWith', usuario);
    });
  });
});
