import { NextPage } from 'next';
import { useState, FormEvent } from 'react';
import InputUsuario from './children/InputUsuario/InputUsuario';
import InputSenha from './children/InputSenha/InputSenha';

const FormLogin: NextPage = () => {
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
    <form
      action="/login"
      method="POST"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <InputUsuario
        handleChange={handleChange}
        digitouUsuario={digitouUsuario}
      />
      <InputSenha handleChange={handleChange} digitouSenha={digitouSenha} />
      <button
        type="submit"
        className="bg-loginBtn text-white tracking-widest uppercase mx-auto block rounded-full py-2 px-8 border-2 border-gray-600 text-lg focus:outline-zero active:bg-loginBtnActive"
      >
        Entrar
      </button>
    </form>
  );
};

export default FormLogin;
