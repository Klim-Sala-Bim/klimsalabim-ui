import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './Header.module.css';

export const Header = () => {
  const { asPath } = useRouter();

  return (
    <header className={styles.header}>
      <img style={{ height: '100px', marginBottom: '1em'}} src="/KlimSalaBim-logo.png" />
      <h2 style={{fontSize: '40px'}}>
        Offset Carbon Footprint
      </h2>
      <h3 style={{fontSize: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <span>Take control of your carbon emissions. </span>
        <span>Become carbon neutral and do your part for the well being of the planet.</span>
      </h3>
    </header>
  );
};
export default Header;
