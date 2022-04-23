import Head from 'next/head'
import { Header } from '../components/Header'

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
    <main>
      <Header />
      {children}
    </main>
  </>
)
export default Layout
