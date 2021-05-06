describe('Fluxo tela de Login para tela de Redefinir Senha', () => {
  context('URL de Login', () => {
    it('Deve acessar a URL "/login" e carregar o card', () => {
      cy.visit('/login').get('[data-cy="login-card"]');
    });
  });

  context('Verificar tela de Redefinir Senha', () => {
    it('Deve acessar o link "Redefinir Senha"', () => {
      cy.get('[data-cy="redefinir-senha-link"]').click();
    });
    it('Deve existir 1 input', () => {
      cy.get('[data-cy="redefinir-usuario-input"]').should('be.visible');
      cy.get('[data-cy="input-usuario"]').should('not.exist');
      cy.get('[data-cy="input-senha"]').should('not.exist');
    });
    it('Deve existir um botao "Redefinir"', () => {
      cy.get('[data-cy="redefinir-senha-btn"]')
        .contains('Redefinir')
        .should('be.visible');
    });
    it('Deve existir um link "Voltar"', () => {
      cy.get('[data-cy="redefinir-senha-link"]')
        .contains('Voltar')
        .should('be.visible');
    });
  });

  context('Verificar tela de Login', () => {
    it('Deve acessar o link "Voltar"', () => {
      cy.get('[data-cy="redefinir-senha-link"]').click();
    });
    it('Deve existir 2 inputs', () => {
      cy.get('[data-cy="input-usuario"]').should('be.visible');
      cy.get('[data-cy="input-senha"]').should('be.visible');
    });
    it('Deve existir um botao "Entrar"', () => {
      cy.get('[data-cy="entrar-btn"]').contains('Entrar').should('be.visible');
    });
    it('Deve existir um link "Redefinir senha"', () => {
      cy.get('[data-cy="redefinir-senha-link"]')
        .contains('Redefinir senha')
        .should('be.visible');
    });
  });
});
