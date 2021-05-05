import { NextPage } from 'next';
import Form from '../../children/login/form/Form';

const Login: NextPage = () => {
  return (
    <>
      <div className="bg-white w-login-card absolute top-2/4 left-2/4 shadow-2xl rounded-xl px-6 pb-8 transform -translate-x-2/4 -translate-y-2/4">
        <img
          src="/images/korok.png"
          alt="Logo"
          className="w-logo-width mx-auto"
        />
        <p className="uppercase text-center tracking-widest text-gray-400 -mt-7 mb-9">
          Seja bem vindo!
        </p>
        <Form />
        <a href="#">Redefinir Senha</a>
      </div>
    </>
  );
};

export default Login;
