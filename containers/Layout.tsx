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
    <footer>
    <div className="center">
        <div style={{display:"flex", justifyContent: "center", gridGap: "30px" , fontWeight:"bold", alignItems: "center"}}>
        <p className="mr-1">Powered by</p>
          <a href="https://polygon.technology/">
            <img src="../Polygon.png" height={50}/>
          </a>
          <a  href="https://toucan.earth/">
            <img src="../Toucan.png" height={50}/>
          </a>
          <a href="https://ethglobal.com/">
            <img src="../ETHGlobal.png" height={50}/>
          </a>
          <a href="https://www.coinbase.com/wallet">
            <img src="../coinbase.png" height={70} />
          </a>
          <a href="https://www.superfluid.finance/">
            <img src="../superfluid.png" height={50} />
          </a>
        </div>
      </div>  
    <div style={{display:"flex", justifyContent: "center", gridGap: "30px" , fontWeight:"bold"}}>
        <p className="cursor-pointer ml-8">For ETHAmsterdam</p>
        <p className="cursor-pointer ml-8">Copyright @ 2022</p>
    </div>
    </footer>
   
  </>
)
export default Layout
