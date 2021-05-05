import { NextPage } from 'next';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconeInput: NextPage = () => {
  return (
    <span className="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
      <FontAwesomeIcon icon={faLock} className={'text-gray-400'} />
    </span>
  );
};

export default IconeInput;
