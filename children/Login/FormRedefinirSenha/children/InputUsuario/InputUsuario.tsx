import { NextPage } from 'next';
import Aviso from './children/Aviso';
import IconeInput from './children/IconeInput';

const InputUsuario: NextPage = ({ handleChange, digitouUsuario }: any) => {
  return (
    <div className="relative w-full flex-wrap items-stretch mb-9">
      <IconeInput />
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        name="username"
        id="username"
        className="border-2 border-gray-200 px-3 py-3 relative bg-white rounded text-sm outline-none w-full pl-10 focus:outline-zero focus:border-green-800 focus:bg-gray-100"
      />
      <Aviso digitouUsuario={digitouUsuario} />
    </div>
  );
};

export default InputUsuario;
