import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button>Connect Wallet</button>
      </main>

      <footer className={styles.footer}>
        <p>Klim-Sala-Bim™ </p>
      </footer>
    </div>
  )
}

export default Home
