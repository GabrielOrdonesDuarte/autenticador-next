import { useState } from 'react';
import FormLogin from '../../children/Login/FormLogin/FormLogin';
import FormRedefinirSenha from '../../children/Login/FormRedefinirSenha/FormRedefinirSenha';

const Login: any = () => {
  const [redefinirSenha, setRedefinirSenha] = useState(false);

  return (
    <>
      <div
        data-cy="login-card"
        className="bg-white w-login-card absolute top-2/4 left-2/4 shadow-2xl rounded-xl px-6 pb-8 transform -translate-x-2/4 -translate-y-2/4"
      >
        <img
          src="/images/korok.png"
          alt="Logo"
          className="w-logo-width mx-auto"
        />
        <p className="uppercase text-center tracking-widest text-gray-400 -mt-7 mb-9">
          Seja bem vindo!
        </p>
        {redefinirSenha ? <FormRedefinirSenha /> : <FormLogin />}
        <span
          data-cy="redefinir-senha-link"
          onClick={() => {
            setRedefinirSenha((redefinirSenha) => !redefinirSenha);
          }}
          className="text-center block text-sm text-gray-400 underline cursor-pointer mt-2"
        >
          {redefinirSenha ? 'Voltar' : 'Redefinir senha'}
        </span>
      </div>
    </>
  );
};

export default Login;
