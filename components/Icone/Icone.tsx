import { NextPage } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

const Icon: NextPage = ({ iconStyle, icon, size, classe }: any) => {
  library.add(fab, fas, far);
  return (
    <>
      <FontAwesomeIcon
        icon={[iconStyle, icon]}
        size={size}
        className={classe}
      />
    </>
  );
};

export default Icon;
