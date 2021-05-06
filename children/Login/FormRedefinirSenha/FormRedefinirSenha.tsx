import { NextPage } from 'next';
import { useState, FormEvent } from 'react';
import InputUsuario from './children/InputUsuario/InputUsuario';

const FormRedefinirSenha: NextPage = () => {
  const [inputValues, setInputValues] = useState({
    username: '',
  });
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
      <button
        data-cy="redefinir-senha-btn"
        type="submit"
        className="bg-loginBtn text-white tracking-widest uppercase mx-auto block rounded-full py-2 px-8 border-2 border-gray-600 text-lg focus:outline-zero active:bg-loginBtnActive"
      >
        Redefinir
      </button>
    </form>
  );
};

export default FormRedefinirSenha;
