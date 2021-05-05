import { NextPage } from 'next';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aviso from './children/Aviso';
import IconeInput from '../inputSenha/children/IconeInput';

const InputSenha: NextPage = ({ handleChange, digitouSenha }: any) => {
  return (
    <div className="relative flex w-full flex-wrap items-stretch mb-9">
      <IconeInput />
      <input
        onChange={(e) => handleChange(e)}
        type="password"
        name="password"
        id="senha"
        className="border-2 border-gray-200 px-3 py-3 relative bg-white rounded text-sm outline-none w-full pl-10 focus:outline-zero focus:border-green-800 focus:bg-gray-100"
      />
      <Aviso digitouSenha={digitouSenha} />
    </div>
  );
};

export default InputSenha;
