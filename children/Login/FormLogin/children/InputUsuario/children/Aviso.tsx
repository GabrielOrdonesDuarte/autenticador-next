import { NextPage } from 'next';

const Aviso: NextPage = ({ digitouUsuario }: any) => {
  return (
    <p className="text-red-500 text-xs mt-1" data-cy="aviso-usuario">
      {!digitouUsuario ? 'Digite seu Email' : ''}
    </p>
  );
};

export default Aviso;
