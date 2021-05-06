import { NextPage } from 'next';

const Aviso: NextPage = ({ digitouSenha }: any) => {
  return (
    <p className="text-red-500 text-xs mt-1" data-cy="aviso-senha">
      {!digitouSenha ? 'Digite sua Senha' : ''}
    </p>
  );
};

export default Aviso;
