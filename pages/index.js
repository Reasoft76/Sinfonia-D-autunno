import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sinfonia D'autunno!</title>
        <link rel="icon" href="/notfavicon.ico" />
      </Head>
      <main>
        <Header title="Il nuovo concerto scout: Sinfonia D'autunno" />
        <p className="description">
         Sinfonia D'autunno è un concerto realizzato dal reparto foligno 3 in cui reciteremo famose canzoni scout ed alcune canzoni da noi realizzate
        </p>
      </main>
      <a href="https://www.instagram.com/_concerto_sinfoniadautunno_/"><button>Instagram</button></a>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSelalrEpc82UmPNQ6t_hPbXFHao0hHF9UoGniZ3hdJBVO36dA/viewform"><button>Modulo di iscrizione</button></a>
      <button>(:</button>
      <Footer />
    </div>
  )
}
