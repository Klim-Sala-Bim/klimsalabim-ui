import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './Header.module.css';

export const Header = () => {
  const { asPath } = useRouter();

  return (
    <header className={styles.header}>
      <ul>
        <li>
          <Link href="/">
            <a>[Klim-Sala-Bim Logo]</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <a 
              style={{textDecoration: `${ 
                asPath === `/dashboard`
                  ? 'underline'
                  : 'none'
              }`}}
            >Dashboard</a>
          </Link>
        </li>
      </ul>
      <button>Connect Wallet</button>
    </header>
  );
};
export default Header;
