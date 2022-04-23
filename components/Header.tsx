import styles from './Header.module.css';

export const Header = () => (
  <header className={styles.header}>
    <div>
      <span>Klim-Sala-Bim</span>
    </div>
    <button>Connect Wallet</button>
  </header>
);
export default Header;
