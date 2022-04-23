import Head from 'next/head'
import { Header } from '../components/Header'
import styles from '../styles/Layout.module.css';

export const Layout = ({ children}: any ) => (
  <>
    <Head>
      <title>Klim-Sala-Bim</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
      />
    </Head>
    <Header />
    <main className={styles.main}>
      {children}
    </main>
  </>
)
export default Layout
