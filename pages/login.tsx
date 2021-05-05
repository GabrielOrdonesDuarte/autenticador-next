import { useState, FormEvent } from 'react';
import { NextPage } from 'next';
import { faLock, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Login: NextPage = () => {
  const [inputValues, setInputValues] = useState({
    username: '',
    password: '',
  });
  const [digitouSenha, setDigitouSenha] = useState(true);
  const [digitouUsuario, setDigitouUsuario] = useState(true);

  const handleChange = (e: FormEvent<EventTarget>) => {
    const auxValues = { ...inputValues };
    const targetEvent = e.target as HTMLInputElement;
    auxValues[targetEvent.name] = targetEvent.value;
    setInputValues(auxValues);
  };

  const handleSubmit = (e: FormEvent<EventTarget>) => {
    validaCampos();
    e.preventDefault();
    console.log(inputValues);
  };

  const validaCampos = () => {
    !inputValues.username ? setDigitouUsuario(false) : setDigitouUsuario(true);
    !inputValues.password ? setDigitouSenha(false) : setDigitouSenha(true);
  };

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
        <form
          action="/login"
          method="POST"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="relative w-full flex-wrap items-stretch mb-4">
            <span className="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
              <FontAwesomeIcon icon={faLock} className={'text-gray-400'} />
            </span>
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="username"
              id="username"
              className="border-2 border-gray-200 px-3 py-3 relative bg-white rounded text-sm outline-none w-full pl-10 focus:outline-zero focus:border-green-800 focus:bg-gray-100"
            />
            <p className="text-red-500 text-xs mt-1">
              {!digitouUsuario ? 'Digite seu Email' : ''}
            </p>
          </div>
          <div className="relative flex w-full flex-wrap items-stretch mb-9">
            <span className="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
              <FontAwesomeIcon icon={faKey} className={'text-gray-400'} />
            </span>
            <input
              onChange={(e) => handleChange(e)}
              type="password"
              name="password"
              id="senha"
              className="border-2 border-gray-200 px-3 py-3 relative bg-white rounded text-sm outline-none w-full pl-10 focus:outline-zero focus:border-green-800 focus:bg-gray-100"
            />
            <p className="text-red-500 text-xs mt-1">
              {!digitouSenha ? 'Digite sua Senha.' : ''}
            </p>
          </div>
          <button
            type="submit"
            className="bg-loginBtn text-white tracking-widest uppercase mx-auto block rounded-full py-2 px-8 border-2 border-gray-600 text-lg focus:outline-zero active:bg-loginBtnActive"
          >
            Entrar
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
