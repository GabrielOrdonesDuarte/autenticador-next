import Icone from '../../../../../components/Icone/Icone';
import Aviso from './children/Aviso';

const InputSenha: any = ({ handleChange, digitouSenha }) => {
  return (
    <div className="relative flex w-full flex-wrap items-stretch mb-9">
      <span className="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
        <Icone icon="key" iconStyle="fas" classe="text-gray-400" />
      </span>
      <input
        data-cy="input-senha"
        onChange={(e) => handleChange(e)}
        type="password"
        name="password"
        id="senha"
        placeholder="Senha"
        className="border-2 border-gray-200 px-3 py-3 relative bg-white rounded text-sm outline-none w-full pl-10 focus:outline-zero focus:border-green-800 focus:bg-gray-100"
      />
      <Aviso digitouSenha={digitouSenha} />
    </div>
  );
};

export default InputSenha;
